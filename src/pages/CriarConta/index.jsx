import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './criarConta.css'

const CriarConta = () => {
    const [descricao, setDescricao] = useState('');
    const [foto, setFoto] = useState('');
    const [todosUsuarios, setTodosUsuarios] = useState([]);
    const [selectedUsuarios, setSelectedUsuarios] = useState([]);
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    
    // Carregar usuários disponíveis
    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await fetch('http://localhost:8080/usuarios', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error("Erro ao buscar usuários.");
                }

                const usuariosData = await response.json();
                setTodosUsuarios(usuariosData); // Armazena todos os usuários
            } catch (error) {
                setError(error.message);
            }
        };

        fetchUsuarios();
    }, []);

    // Função para tratar a seleção de usuários
    const handleUsuarioSelect = (usuarioId) => {
        setSelectedUsuarios(prevSelectedUsuarios => {
            // Verifica se o usuário já está selecionado
            const isSelected = prevSelectedUsuarios.includes(usuarioId);
            // Se já estiver selecionado, remove. Se não estiver, adiciona.
            return isSelected 
                ? prevSelectedUsuarios.filter(id => id !== usuarioId) 
                : [...prevSelectedUsuarios, usuarioId];
        });
    };

    // Função de envio do formulário
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Obtém o ID do usuário logado que está salvo no localStorage
        const usuarioIdLogado = localStorage.getItem('id'); // ID do usuário logado
    
        // Filtra os usuários selecionados para garantir que o usuário logado não seja enviado novamente
        const usuariosParaEnviar = selectedUsuarios.filter(id => id !== usuarioIdLogado);
    
        const dadosConta = {
            descricao,
            foto,
            usuarios: usuariosParaEnviar, // IDs dos usuários selecionados (sem o logado)
        };
    
        console.log("Dados a serem enviados:", dadosConta); // Log dos dados a serem enviados
    
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:8080/contas', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dadosConta),
            });
    
            if (!response.ok) {
                throw new Error("Erro ao criar conta.");
            }
    
            navigate('/contas');
        } catch (error) {
            console.error("Erro ao criar conta:", error); // Log de erro no frontend
            alert(error.message);
        }
    };
    return (
        <div>
            <h1>Criar Nova Conta</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Descrição:</label>
                    <input
                        type="text"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>URL da Foto:</label>
                    <input
                        type="text"
                        value={foto}
                        onChange={(e) => setFoto(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Selecionar Usuários:</label>
                    <div>
                        {todosUsuarios.map(usuario => (
                            <div key={usuario.id}>
                                <input
                                    type="checkbox"
                                    id={`usuario-${usuario.id}`}
                                    value={usuario.id}
                                    checked={selectedUsuarios.includes(usuario.id)}
                                    onChange={() => handleUsuarioSelect(usuario.id)}
                                />
                                <label htmlFor={`usuario-${usuario.id}`}>{usuario.nome}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <button type="submit">Criar Conta</button>
            </form>
        </div>
    );
};

export default CriarConta;
