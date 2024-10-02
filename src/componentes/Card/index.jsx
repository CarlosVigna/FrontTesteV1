import Botao from '../Botao'
import './card.css'

const Card = () => {

    const handleClick = () => {
        
        alert('Somente teste!');
    }

    return (

        <div className='container'>
            <div className='card'>
            <img className='imagem-card' src='/imagens/card.jpeg' alt='imagem do card'/>
            <h1>Titulo</h1>
            <p>Usuário 1</p>
            <p>Usuário 2</p>
            <p>Usuário 3</p>

            <Botao 
            
            className="botao-card" 
            texto="Entrar" 
            onClick={handleClick} />
            
            </div>
            <div className='card'>
            <img className='imagem-card' src='/imagens/card.jpeg' alt='imagem do card'/>
            <h1>Titulo</h1>
            <p>Usuário 1</p>
            <p>Usuário 2</p>
            <p>Usuário 3</p>

            <Botao 
            
            className="botao-card" 
            texto="Entrar" 
            onClick={handleClick} />
            
            </div>
            <div className='card'>
            <img className='imagem-card' src='/imagens/card.jpeg' alt='imagem do card'/>
            <h1>Titulo</h1>
            <p>Usuário 1</p>
            <p>Usuário 2</p>
            <p>Usuário 3</p>

            <Botao 
            
            className="botao-card" 
            texto="Entrar" 
            onClick={handleClick} />
            
            </div>
            
            
            
        </div>
    )
}

export default Card