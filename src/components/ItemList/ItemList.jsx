
import Item from '../Item/Item';

const ItemList = ({productslist}) => {
    
    return (
        <>
            {productslist.map(producto => <Item key={producto.id} prod={producto}/>)}
        </>
    );
}

export default ItemList;