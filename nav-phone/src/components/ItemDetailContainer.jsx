
import React, {useState, useEffect} from 'react';
import datosCelus from '../DatosCelus';
import s22 from '../img/s22_ultra_300.png';

const ItemDetailContainer = () => {
    const [celulares, setCelulares] = useState([]);

    useEffect(() => {
        
        const getCeluData = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(datosCelus);
            }, 2000);
        });

        getCeluData
        .then((response) => setCelulares (response))
        .catch(error => {
            console.error(error)
        })

    }, []);
                    
    return(
                //Eze bueno aca te dejo el otro desafio lo unicoi que no pude hacer es traer la imagen del Array osea cuando quiero traerla haciendo {celulares[0]?.imagen} no me la devuelve... probe mil fomar pero no pude hacerlo asique la tuve que importar directamente. Si le sacas la ficha avisame Eze jaj. El mejor Tutor Lejos! ahora le tengo que meter al otro desafio lo voy a hacer en un repo nuevo para que no se me mezcle todo!, me parece que es lo mejor..
        <div>
            <div className='p-5 d-table-cell w-50'>
                <div className="card" style={{width: '18rem'}}>
                  <ul className="list-group list-group-flush">
                  <div>
                  <img src={s22} className="card-img-top" alt="..."></img>
                    <li className="list-group-item text-bg-primary">{celulares[0]?.marca}</li>
                    <li className="list-group-item text-bg-secondary">{celulares[0]?.modelo}</li>
                    <li className="list-group-item text-bg-secondary">{celulares[0]?.descripcion}</li>
                    <li className="list-group-item text-bg-success">${celulares[0]?.precio}</li>
                 </div>
                  </ul>
                </div>
            </div>
        </div>
    )

};

export default ItemDetailContainer;