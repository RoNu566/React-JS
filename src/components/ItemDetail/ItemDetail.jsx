import ItemCount from "../ItemCount/ItemCount";
const ItemDetail = ({item}) => {
    return (
        <div className="row g-0">
            <div className="col-md-4">
                <img src={`../img/${item.imagen}`} className="img-fluid rounded-start"/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">Talle: {item.talle} </p>
                    <p className="card-text">Color: {item.color} </p>
                    <p className="card-text">Precio: $ {new Intl.NumberFormat('de-DE').format(item.precio)} </p>
                    <p className="card-text">Stock: {item.stock} </p>
                    <ItemCount stock= {item.stock}/>
                    <button className="btn btn-secondary">Finalizar Compra</button>
                </div>
                
            </div>
            
        </div>
    );
}

export default ItemDetail;