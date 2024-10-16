import './menuHome.css'
import {  Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Botao from '../Botao';




function MenuHome({ scrollToCadastro }) {
    return (
        <nav className='nav'>
            <div className='nav-left'>

                <Nav variant="tabs">
                    <Nav.Link as={Link} to="/home">Página Inicial</Nav.Link>
                    <Nav.Link as={Link} to="/home">Sobre</Nav.Link>
                    <Nav.Link as={Link} to="/contas">Contas</Nav.Link>
                    <Nav.Link as={Link} to="/cadastroTitulo">Cadastro de Titulos</Nav.Link>
                    <Nav.Link as={Link} to="/listaTitulo">Listagem de Titulos</Nav.Link>
                    <Nav.Link as={Link} to="/cadastrarCategoria">Cadastro Categoria</Nav.Link>
                </Nav>
            </div>
            <div className='botao-container'>

                <Link to='/login'>
                    <Botao texto="Login" className="botao-login" />
                </Link>
                
                
                    <Botao texto="Cadastrar" className="botao-cadastrar" onClick={scrollToCadastro}/>
                                   
                
            </div>

        </nav>
    )
}

export default MenuHome;