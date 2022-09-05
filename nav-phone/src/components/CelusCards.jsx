import React from 'react';
import Celu from './Celu';
import { Link } from 'react-router-dom';

const CelusCards = ({Cards}) => {
    return (
        <>
            {Cards.map((celular) =>
                <div className='p-5 d-table-cell w-50' key={celular.id}>
                <div className="card" style={{width: '22rem'}}>
                  <ul className="list-group list-group-flush">
                    <Celu celular={celular}/>
                  </ul>
                </div>
                <Link to={"/detalles/" + celular.id}>
                    <button type="button" className="btn btn-warning mt-2 ml-10 p-2 fs-5 fw-bold">VER DETALLES</button>
                  </Link>
              </div>
                
                )}
        </>
    );
}

export default CelusCards;
