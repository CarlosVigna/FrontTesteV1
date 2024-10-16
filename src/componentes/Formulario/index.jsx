import CampoTexto from '../CampoTexto';
import './formulario.css';
import Botao from '../Botao';

const Formulario = ({ titulo, campos, botaoTexto, handleInputChange, valores, onSubmit, className, layout }) => {
    return (
        <div className='formulario'>
            <form onSubmit={onSubmit}>
                <div className='header'>
                    <div className='img-form'>
                <img src='/imagens/logo-cadastrar.JPG' />
                    </div>
                {titulo && <h2>{titulo}</h2>}
                </div>
                <div className={`campos-container ${layout}`}>
                {campos.map((campo, index) => (
                    <CampoTexto 
                        key={index}
                        label={campo.label} 
                        placeholder={campo.placeholder} 
                        type={campo.type}
                        onChange={handleInputChange}
                        valor={valores[campo.name]}
                        name={campo.name}
                    />
                ))}
                </div>
                <div className='botao-container'>
                    
                    <Botao 
                        texto={botaoTexto} 
                        onClick={onSubmit}
                        className={className}

                    />
                </div>
            </form>
        </div>
    );
};

export default Formulario;
