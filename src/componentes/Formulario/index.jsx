import CampoTexto from '../CampoTexto';
import './formulario.css';
import Botao from '../Botao';

const Formulario = ({ titulo, campos, botaoTexto, handleInputChange, valores, onSubmit, className, layout }) => {
    const handleSubmit = (e) => {
        e.preventDefault(); 
        onSubmit();

    };
    
    return (
        <div className='formulario'>
            <form onSubmit={handleSubmit}>
                <div className='header'>
                    {titulo && <h2>{titulo}</h2>}
                </div>
                <div className={`campos-container ${layout}`}>
                    {campos.map((campo, index) => (
                        campo.type === "select" ? (
                            <div key={index} className='campo-select'>
                                <label>{campo.label}</label>
                                <select 
                                    name={campo.name} 
                                    value={valores[campo.name]} 
                                    onChange={handleInputChange}
                                >
                                    {campo.options.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        ) : (
                            <CampoTexto 
                                key={index}
                                label={campo.label} 
                                placeholder={campo.placeholder} 
                                type={campo.type}
                                onChange={handleInputChange}
                                valor={valores[campo.name]}
                                name={campo.name}
                                autoComplete={campo.name === "senha" ? "current-password" : "email"}
                            />
                        )
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
