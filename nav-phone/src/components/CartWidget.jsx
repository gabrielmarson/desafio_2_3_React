import React from 'react';

const CartWidget = ({cantidad}) => {
    return (
        <>
            <li><i className="bi bi-cart2">{cantidad}</i></li>
        </>
    );
}

export default CartWidget;
