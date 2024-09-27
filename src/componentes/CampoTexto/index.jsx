import './campoTexto.css'

const CampoTexto = (props) => {
    return (
        <div className="campo-texto">
            <h1>{props.texto}</h1>
            <label>
                {props.label}
            </label>
            <input value={props.valor} 
            placeholder={props.placeholder}
            onChange={props.onChange}
            name={props.name}
             />
        </div>
    )
}

export default CampoTexto