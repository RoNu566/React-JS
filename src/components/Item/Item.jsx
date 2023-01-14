import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext";
const Item = ({prod}) => {
    
    const {darkMode} = useDarkModeContext()
    return (
        
            <div className={`card mb-3 cardProducto ${darkMode? 'bg-dark' : 'bg-ligth'}` }>
                            <img src={prod.imagen}className="card-img-top" alt="..." />
                            <div className={`card-body ${darkMode ? 'bg-dark' : 'bg-ligth' }`}>
                                <h5 className="card-title">{prod.nombre} {prod.color}</h5>
                                <p className="card-text">*{prod.talle}*</p>
                                <p className="card-text">Stock: {prod.stock}</p>
                                <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
                                <button className='btn btn-secondary'><Link className="nav-link" to={`/product/${prod.id}`}>Ver Producto</Link></button>
                            </div>         
        </div>
    );
}

export default Item;