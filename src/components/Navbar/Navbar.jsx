import "./Navbar.css";
import { Link } from "react-router-dom";
import Form from "../Formulario/Form";
import CartWidget from "../CartWidget/CartWidget";
import Categorias from "./Categorias/Categorias";
import BotonDarkMode from "./BotonDarkMode/BotonDarkMode";

import { useDarkModeContext } from '../../context/DarkModeContext';
const Navbar = () => {
    
  const {darkMode} = useDarkModeContext()
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${darkMode ? 'bg-dark' : 'bg-primary'}`}>
        <div className="container-fluid">
          <div className="navbar-brand"><img src="https://firebasestorage.googleapis.com/v0/b/viene-y-va-8a6ba.appspot.com/o/logoSHDS.png?alt=media&token=2f8ba4ca-5c50-4e09-9160-2e39fcada1fa" alt="Logo de SHDS"/></div>
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
            <CartWidget/>
            <BotonDarkMode/>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;
