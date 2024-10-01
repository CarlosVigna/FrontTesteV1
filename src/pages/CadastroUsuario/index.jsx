import { useState } from 'react';
import Formulario from '../../componentes/Formulario';
import './cadastroUsuario.css';

const URL = "http://localhost:8080";

async function cadastrarUsuario(usuario) {
    const response = await fetch (URL + "/usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
    });
    const data = await response.json();
    return data;
}

function CadastroUsuario() {
    const [valores, setValores] = useState({
        nome: '',
        email: '',
        senha: '',
        confirmarSenha: ''
    });

    const [erro, setErro] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValores({
            ...valores,
            [name]: value
        });
    };

    const handleCadastro = async (e) => {
        e.preventDefault();

        const { nome, email, senha, confirmarSenha } = valores;

        if (senha !== confirmarSenha) {
            setErro("As senhas não coincidem!");
            return;
        }

        const novoUsuario = { nome, email, senha };
        
        try{
            await cadastrarUsuario(novoUsuario);

                setValores({
                    nome: '',
                    email: '',
                    senha: '',
                    confirmarSenha: ''

                });

                setErro("");
            } catch(error){
                setErro("Erro ao cadastrar Usuário. Tente novamente.");
            }
        };

    const camposCadastro = [
        {label: "Nome:", placeholder: "Digite seu nome", type: "text", name: "nome"},
        {label: "Email:", placeholder: "Digite seu e-mail", type: "email", name: "email"},
        {label: "Senha:", placeholder: "Digite sua senha", type: "password", name: "senha"},
        {label: "Confirme sua senha:", placeholder: "Repita sua senha", type: "password", name: "confirmarSenha"}
    ];

    return (
        <div>
            <Formulario 
                titulo="Cadastro de Usuário"
                campos={camposCadastro}
                botaoTexto="Enviar Cadastro" 
                className="botao-enviar-cadastro"
                handleInputChange={handleInputChange}
                valores={valores}
                onSubmit={handleCadastro}
            />
            {erro && <p style={{ color: 'red' }}>{erro}</p>}
        </div>
    );
}

export default CadastroUsuario
