import "./Navbar.css";
import { Link } from "react-router-dom";
import Form from "../Formulario/Form";
import CartWidget from "../CartWidget/CartWidget";
import Categorias from "./Categorias/Categorias";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="navbar-brand"><img src="./img/logoSHDS.png" alt="Logo de SHDS"/></div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="menu nav-link active" to={"/"}>Inicio
                                <span className="visually-hidden">(current)</span></Link>
                        </li>
            <Categorias/>
          </ul>
            <Form busqueda={"Buscar prenda"}/>
            <CartWidget/>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;
