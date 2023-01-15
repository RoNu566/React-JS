import { Link } from "react-router-dom";

const Categorias = () => {
    return (

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to={"/category/ropa"}>Ropa</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/category/accesorios"}>Accesorios</Link>
          </li>  
          <li className="tit">Second Chance- Tienda de Ropa Usada</li>
        </ul>
    );
}

export default Categorias;
