import { Link } from "react-router-dom";

const Item = ({prod}) => {
    return (
        
            <div className="card border-light mb-3 cardProducto">
                            <img src={`../img/${prod.imagen}`} className="card-img-top" alt="..." />
                            <div className="card-body cardBody">
                                <h5 className="card-title">{prod.nombre} {prod.color}</h5>
                                <p className="card-text">*{prod.talle}*</p>
                                <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
                                <button className='btn btn-secondary'><Link className="nav-link" to={`/product/${prod.id}`}>Ver Producto</Link></button>
                            </div>         
        </div>
    );
}

export default Item;