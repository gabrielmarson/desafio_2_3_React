import React from 'react';
import Counter from './Counter';
import Swal from "sweetalert2"
import CeluContainer from './CeluContainer';
import ItemDetailContainer from './ItemDetailContainer';

const ItemListContainer = () => {

    
    function onAdd(count){
        Swal.fire(`Se han seleccionado ${count} productos`)
    }
    return (
        <div>
            <Counter stock = {14} onAdd={onAdd}/>
            <CeluContainer/>
            <div>
                <ItemDetailContainer/>
            </div>
        </div>

    );
}

export default ItemListContainer;
