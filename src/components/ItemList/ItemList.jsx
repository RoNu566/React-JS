
import Item from '../Item/Item';

const ItemList = ({productlist}) => {
    
    return (
        <div>
            {productlist.map(producto => <Item key={producto.id} prod={producto}/>)}
        </div>
    );
}

export default ItemList;