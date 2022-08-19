import React from 'react';

const IconCarrito = ({cantidad}) => {
    return (
        <>
            <li><a href="#"><i className="bi bi-cart2">{cantidad}</i></a></li>
        </>
    );
}

export default IconCarrito;
