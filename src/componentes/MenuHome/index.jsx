import { Switch } from '@mui/material';
import './menuHome.css'
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Botao from '../Botao';


function MenuHome() {
    return (
        <nav className='nav'>
            <div className='nav-left'>

                <Nav variant="tabs">
                    <Nav.Link as={Link} to="/home">Página Inicial</Nav.Link>
                    <Nav.Link as={Link} to="/home">Sobre</Nav.Link>
                    <Nav.Link as={Link} to="/home">Perguntas</Nav.Link>
                </Nav>
            </div>
            <div className='botao-container'>

                <Link to='/login'>
                    <Botao texto="Login" />
                </Link>
                
                <Link to='/cadastro'>
                    <Botao texto="Cadastrar" />
                </Link>

            </div>




        </nav>
    )
}

export default MenuHome;