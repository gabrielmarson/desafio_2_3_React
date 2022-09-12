import React from 'react';
import { useCartContext } from './context/CartContext';


const CartWidget = () => {

    const {totalProducts} = useCartContext();

    return (
        <>
            <li><i className="bi bi-cart2">{totalProducts()}</i></li>
        </>
    );
}

export default CartWidget;
