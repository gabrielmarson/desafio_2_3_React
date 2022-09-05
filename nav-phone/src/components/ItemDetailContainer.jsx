import React, {useState, useEffect} from 'react';
import datosCelus from '../DatosCelus';
import Counter from './Counter';
import Swal from "sweetalert2";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [celulares, setCelulares] = useState([]);
    console.log(celulares)
    const {id} = useParams()
    useEffect(() => {
        
        const getCeluData = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(datosCelus);
            }, 2000);
        });

        getCeluData
        .then((response) => (response))
        .then(data => {

            const producto = data.find(producto => producto.id == id)
            setCelulares(producto)

        })
        .catch(error => {
            console.error(error)
        })
    
    }, []);
                
        function onAdd(count){
            Swal.fire(`Se han seleccionado ${count} productos`)
        }

    return(
               
        <>
            <div className='p-5 d-table-cell'>
                <div className="card" style={{width: '20rem'}}>
                  <ul className="list-group list-group-horizontal">
                    <li className='list-group text-center fs-3 fw-bold'><img src={celulares.imagen} alt="..."></img>{celulares.marca}  {celulares.modelo} ${celulares.precio}</li>
                    <li className="list-group-item text-bg-secondary">{celulares.descripcion}</li>
                  </ul>
                </div>
            </div>
            <div>
                <Counter stock = {14} onAdd={onAdd}/>
            </div>
        </>
    )

};

export default ItemDetailContainer;