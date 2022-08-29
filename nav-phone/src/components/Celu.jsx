import React from 'react';

const Celu = ({celular}) => {
    return (
        <div>
            <li className="list-group-item text-bg-primary">{celular.marca}</li>
            <li className="list-group-item text-bg-secondary">{celular.modelo}</li>
            <li className="list-group-item text-bg-success">${celular.precio}</li>
        </div>
    );
}

export default Celu;
