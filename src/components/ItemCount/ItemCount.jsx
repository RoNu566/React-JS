import {useState} from 'react';

const ItemCount = ({stock}) => {
    const [contador, setContador] = useState(1);
   
    const sumar = () => contador < stock && setContador(contador + 1)

    const restar = () => contador > 1 && setContador(contador - 1)
    
    return (
        <div className='ItemCount'>
            <button className='btn btn-dark' onClick={() => restar()}>-</button>
                {contador}
            <button className='btn btn-dark' onClick={() => sumar()}>+</button>
            <button className='btn btn-light'>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;
