import CampoTexto from '../CampoTexto';
import './formulario.css';
import Botao from '../Botao';

const Formulario = ({ titulo, campos, botaoTexto, handleInputChange, valores, onSubmit }) => {
    return (
        <div className='formulario'>
            <form onSubmit={onSubmit}>
                {titulo && <h2>{titulo}</h2>}
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
                <div className='botao-container'>
                    <Botao 
                        texto={botaoTexto} 
                        onClick={onSubmit}
                        className='botao-enviar-cadastro'

                    />
                </div>
            </form>
        </div>
    );
};

export default Formulario;
