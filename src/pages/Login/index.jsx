import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Formulario from '../../componentes/Formulario';
import './login.css';

const Login = () => {
    const [valores, setValores] = useState({
        email: '',
        senha: ''
    });
    const [erro, setErro] = useState("");
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValores({
            ...valores,
            [name]: value
        });
    };

    const handleLogin = async () => {
        const { email, senha } = valores;

        
        if (!email || !senha) {
            setErro("Por favor, preencha todos os campos.");
            return;
        }

        try {
            
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, senha })
            });

            if (response.ok) {
                const data = await response.json();
                const token = data.token;

                
                localStorage.setItem('token', token);

             
                setValores({ email: '', senha: '' });
                setErro("");

              
                navigate('/lista-titulo');
            } else {
                const errorData = await response.json();
                setErro(errorData.message || "Erro ao fazer login.");
            }
        } catch (error) {
            setErro("Erro ao conectar com o servidor.");
        }
    };

    const camposLogin = [
        { label: "Email:", placeholder: "Digite seu e-mail", type: "email", name: "email" },
        { label: "Senha:", placeholder: "Digite sua senha", type: "password", name: "senha" }
    ];

    return (
        <div className='container-login'>
            <Formulario 
                titulo="Login"
                campos={camposLogin}
                botaoTexto="Entrar" className="botao-login"
                handleInputChange={handleInputChange}
                valores={valores}
                onSubmit={handleLogin}
            />
            {erro && <p style={{ color: 'red' }}>{erro}</p>}
        </div>
    );
}

export default Login;