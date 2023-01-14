import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList.jsx';
import {getProductos, getProducto, updateProducto} from '../../assets/firebase.js';
// import {consultarBDD} from "../../assets/funciones.js"
// import { cargarBDD } from '../../assets/firebase';
const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {category} = useParams()

    useEffect(() => {
            if(category) {
                getProductos().then(products => {
                    const productsList= products.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === category)
                    const cardProductos = ItemList({productsList})
                    setProductos(cardProductos)
                })
            } else {
                getProductos().then(products => {
                    const productsList= products.filter(prod => prod.stock > 0)
                    const cardProductos = ItemList({productsList})
                    setProductos(cardProductos)
                })
            }

            
            // cargarBDD().then(productos => console.table(productos))
           

    },[category]);
    
    return (
        <div className= 'row cardProductos' >
            {productos}
        </div>
       
    );
}

export default ItemListContainer;