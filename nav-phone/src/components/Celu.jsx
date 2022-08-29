import React from 'react';

const Celu = ({celular}) => {
    return (
        <div>
            <li className="list-group-item">{celular.marca}</li>
            <li className="list-group-item">{celular.modelo}</li>
            <li className="list-group-item">{celular.precio}</li>
        </div>
    );
}

export default Celu;
