import "./Navbar.css";
import Form from "../Formulario/Form";
import CartWidget from "../CartWidget/CartWidget";
import Categorias from "./Categorias/Categorias";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand"><img src="./img/logoSHDS.png" alt="Logo de SHDS"/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <Categorias/>
            <Form busqueda={"Buscar prenda"}/>
            <CartWidget/>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;
