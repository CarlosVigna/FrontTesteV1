import './botao.css'; // Certifique-se de que o caminho esteja correto

const Botao = ({ texto, onClick, className }) => {
    return (
        <button className={`botao ${className}`} onClick={onClick}>
            {texto}
        </button>
    );
}

export default Botao;