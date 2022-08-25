import React from 'react';

const CartWidget = ({cantidad}) => {
    return (
        <>
            <li><a href="#"><i className="bi bi-cart2">{cantidad}</i></a></li>
        </>
    );
}

export default CartWidget;
