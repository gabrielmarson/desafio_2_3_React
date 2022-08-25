import React from 'react';
import Counter from './Counter';
import Swal from "sweetalert2"


const ItemListContainer = () => {

    
    function onAdd(count){
        Swal.fire(`Se han seleccionado ${count} productos`)
    }
    return (
        <div>
            <Counter stock = {14} onAdd={onAdd}/>
        </div>
    );
}

export default ItemListContainer;
