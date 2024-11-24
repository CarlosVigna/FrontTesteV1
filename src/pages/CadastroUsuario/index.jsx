import { useState } from 'react';
import Formulario from '../../componentes/Formulario';
import './cadastroUsuario.css';

const URL = "http://localhost:8080";

async function cadastrarUsuario(usuario) {
    console.log("Enviando dados para o backend:", usuario);  // Log para ver os dados que estão sendo enviados
    const response = await fetch (URL + "/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
    });

    console.log("Resposta da requisição:", response);  // Log para ver a resposta do fetch
    const data = await response.json();
    console.log("Dados retornados do backend:", data);  // Log para ver os dados recebidos do backend
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
    const [sucesso, setSucesso] = useState("");  // Para mostrar mensagens de sucesso

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(`Campo alterado: ${name}, Novo valor: ${value}`);  // Log para ver as alterações de campos
        setValores({
            ...valores,
            [name]: value
        });
    };

    const handleCadastro = async (e) => {
        e.preventDefault();
        console.log("Iniciando cadastro com os seguintes dados:", valores);  // Log para ver os dados do formulário no momento da submissão

        const { nome, email, senha, confirmarSenha } = valores;

        if (senha !== confirmarSenha) {
            console.log("Erro: As senhas não coincidem!");  // Log de erro quando as senhas não coincidem
            setErro("As senhas não coincidem!");
            return;
        }

        const novoUsuario = { nome, email, senha };
        console.log("Dados do novo usuário para cadastro:", novoUsuario);  // Log para ver os dados do novo usuário

        try {
            const data = await cadastrarUsuario(novoUsuario);
            console.log("Dados após o cadastro:", data);  // Log para ver a resposta após o cadastro

            if (data && data.id) {  // Verifica se o cadastro foi bem-sucedido com base na resposta
                setSucesso("Cadastro realizado com sucesso!");  // Exibe mensagem de sucesso
                setValores({
                    nome: '',
                    email: '',
                    senha: '',
                    confirmarSenha: ''
                });
                setErro("");  // Reseta o erro se o cadastro foi bem-sucedido
            } else {
                setErro("Erro ao cadastrar Usuário. Tente novamente.");
            }
        } catch (error) {
            console.log("Erro ao tentar cadastrar usuário:", error);  // Log de erro caso a requisição falhe
            setErro("Erro ao cadastrar Usuário. Tente novamente.");
        }
    };

    const camposCadastro = [
        { label: "Nome:", placeholder: "Digite seu nome", type: "text", name: "nome" },
        { label: "Email:", placeholder: "Digite seu e-mail", type: "email", name: "email" },
        { label: "Senha:", placeholder: "Digite sua senha", type: "password", name: "senha" },
        { label: "Confirme sua senha:", placeholder: "Repita sua senha", type: "password", name: "confirmarSenha" }
    ];

    return (
        <div className='contai-cadastro'>
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
            {sucesso && <p style={{ color: 'green' }}>{sucesso}</p>}
        </div>
    );
}

export default CadastroUsuario;
