import React from 'react';
import Celu from './Celu';

const CelusCards = ({Cards}) => {
    return (
        <div>
            {Cards.map(celular=>
                <div>
                <div className="card" style={{width: '18rem'}}>
                  <ul className="list-group list-group-flush">
                    <Celu celular={celular} key={celular.id}/>
                  </ul>
                </div>
              </div>
                
                )}
        </div>
    );
}

export default CelusCards;
