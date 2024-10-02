import { useState } from 'react';
import Formulario from '../../componentes/Formulario';
import './login.css';

const Login = () => {
    const [valores, setValores] = useState({
        email: '',
        senha: ''
    });
    const [erro, setErro] = useState("");

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

        
        setValores({ email: '', senha: '' });
        setErro("");
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
