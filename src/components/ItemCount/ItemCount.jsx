import {useState} from 'react';
import { useDarkModeContext } from '../../context/DarkModeContext';
const ItemCount = ({inicial, stock, onAdd}) => {
    const {darkMode} = useDarkModeContext()

    const [contador, setContador] = useState(inicial);
    
    const sumar = () => contador < stock && setContador(contador + 1)

    const restar = () => contador > 1 && setContador(contador - 1)
    
    const agregarAlCarrito = () => onAdd(contador)

    return (
        <div>
            <button className={`btn ${darkMode ? 'btn-dark' : 'btn-light'}`} onClick={() => restar()}>➖</button>
                    {contador}
            <button className={`btn ${darkMode ? 'btn-dark' : 'btn-light'}`} onClick={() => sumar()}>➕</button>
            <button className={`btn ${darkMode ? 'btn-primary' : 'btn-dark'}`} onClick={agregarAlCarrito}>🛒</button>
        </div>
    );
}

export default ItemCount;