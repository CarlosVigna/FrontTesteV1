import './cardHome.css'; 

const CardHome = (props) => {
    return (

        <div className="card-home" style={{ width: '18rem' }}>
            <img src={props.img} className="card-img-top" alt="Card do corpo"/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.paragrafo}</p>
            </div>
        </div>
    );
}

export default CardHome;
