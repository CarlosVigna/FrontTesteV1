

const Botao = ({ texto, onClick, className }) => {
    return (
        <button type="button" onClick={onClick} className={className}>
            {texto}
        </button>
    );
}

export default Botao;