import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext";
import { useCarritoContext } from "../../context/CarritoContext";

const ItemDetail = ({item}) => {
    const {darkMode} = useDarkModeContext()
    const {addItem} = useCarritoContext()
    
    const onAdd = (contador) => {
        addItem(item, contador)
    }    
    return (
        <div className="ItemDetailCard">
            <div className="ItemDetailImg col-md-4">
                <img src={item.imagen}className="img-fluid rounded-start"/>
            </div>
            <div className="col-md-8">
                <div className="ItemDetailText card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">Talle: {item.talle} </p>
                    <p className="card-text">Color: {item.color} </p>
                    <p className="card-text">Stock: {item.stock} </p>
                    <p className="card-text">Precio: $ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                    <ItemCount inicial = {1} stock = {item.stock} onAdd={onAdd}/><br/>
                    <button className="btn btn-secondary">Finalizar Compra</button>
                </div>
                
            </div>
            
        </div>
    );
}

export default ItemDetail;