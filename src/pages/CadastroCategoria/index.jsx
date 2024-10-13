import './cadastroCategoria.css'
import { useState } from 'react';
import Formulario from '../../componentes/Formulario';

const URL = "http://localhost:8080";

async function cadastrarCategoria(categoria) {
    try {
        const response = await fetch(URL + "/categorias", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(categoria), 
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            console.error("Erro na API:", errorData); 
            throw new Error('Erro ao cadastrar categoria: ' + errorData.message);
        }

        const data = await response.json();
        console.log("Resposta da API:", data); 
        return data;

    } catch (error) {
        console.error("Erro ao fazer a requisição:", error.message);
        throw error;
    }
}

function CadastroCategoria() {
    const [valores, setValores] = useState({
        nome: '',
        tipo: '',
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

        const { nome, tipo } = valores;

        const novaCategoria = { nome, tipo };
        
        try {
            const resposta = await cadastrarCategoria(novaCategoria);
            console.log("Categoria cadastrada com sucesso:", resposta);

            setValores({
                nome: '',
                tipo: ''
            });

            setErro(""); 

        } catch (error) {
            setErro(error.message || "Erro ao cadastrar Categoria. Tente novamente.");
        }
    };

    const camposCadastro = [
        { label: "Nome:", placeholder: "Digite o nome da categoria", type: "text", name: "nome" },
        { label: "Tipo:", placeholder: "Recebimento/Pagamento", type: "text", name: "tipo" }
    ];

    return (
        <div className='container-categoria'>
            <Formulario 
                titulo="Cadastro de Categoria"
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

export default CadastroCategoria;
