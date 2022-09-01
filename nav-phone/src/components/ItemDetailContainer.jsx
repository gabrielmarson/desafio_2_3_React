import React, {useState, useEffect} from 'react';

const ItemDetailContainer = () => {
    const [celulares, setCelulares] = useState({});

    useEffect(() => {
        
        fetch("./equipos.json")
        .then((response) => response.json())
        .then(({marca, modelo, precio, imagen, id}) => {
                console.log(marca)
            setCelulares(Object.entries({marca, modelo, precio, imagen, id}).map((celu) =>
    
            <div className="card p-5 d-table-cell w-50" key={celu.id} style={{width: '18rem'}}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{celu.marca}</h5>
              <p className="card-text">.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">sjhdjklshdf</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
            </ul>
            <div className="card-body">
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
          </div>

        ))
        
        })

    }, [{}]);

    return (

        <>{celulares}</>
    );

};

export default ItemDetailContainer;