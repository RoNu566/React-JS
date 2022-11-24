import React from 'react';

const ItemListContainer = ({greeting}) => {
    return (
        <div className='ItemListContainer'>
            <h1>{greeting}</h1>
            <img src="./img/logoSHDS.png" alt="Logo de SHDS"/>
        </div>
    );
}

export default ItemListContainer;
