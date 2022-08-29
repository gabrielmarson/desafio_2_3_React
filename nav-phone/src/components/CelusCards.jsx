import React from 'react';
import Celu from './Celu';

const CelusCards = ({Cards}) => {
    return (
        <div>
            {Cards.map((celular) =>
                <div className='p-5 d-table-cell w-50' key={celular.id}>
                <div className="card" style={{width: '18rem'}}>
                  <ul className="list-group list-group-flush">
                    <Celu celular={celular}/>
                  </ul>
                </div>
              </div>
                
                )}
        </div>
    );
}

export default CelusCards;
