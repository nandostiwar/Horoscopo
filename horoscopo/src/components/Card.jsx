import "./Card.css"

function Card({tittle = "Signo", description = "Descripcion"}) {
    return (
    <div className="Card">
        <h2>{tittle}</h2>
        <p>{description}</p>
    </div>)
}

export default Card