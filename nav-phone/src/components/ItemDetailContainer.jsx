import React, {useState, useEffect} from 'react';
import datosCelus from '../DatosCelus';
import Counter, { ItemCounts } from "./Counter";
import Swal from "sweetalert2";
import { Link, useParams, useNavigate } from 'react-router-dom';


const ItemDetailContainer = () => {

    const navigate = useNavigate();
    const [celulares, setCelulares] = useState([]);

    const {id} = useParams();
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
        function onAdd(count) {
            
            Swal.fire({
                title: (`Se han seleccionado ${count} productos`),
                text: "Desea terminar su compra?",
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Finalizar mi compra',
                cancelButtonText: 'Modificar mi compra',
              }).then((result) => {
                if (result.isConfirmed) {
                    const productoCarrito = {id: celulares.id, cantidad: count}
                    console.log(productoCarrito)
                    navigate("/cart")
                                   
                }

              })
        }

    return(
               
        <>
        <div>
            <div className='p-5 d-table-cell'>
                <div className="card" style={{width: '20rem'}}>
                  <ul className="list-group list-group-horizontal">
                    <li className='list-group text-center fs-3 fw-bold'><img src={celulares.imagen} alt="..."></img>{celulares.marca}  {celulares.modelo} ${celulares.precio}</li>
                    <li className="list-group-item text-bg-secondary">{celulares.descripcion}</li>
                  </ul>
                </div>
            </div>
            <div>
                {<ItemCounts stock = {celulares.stock} onClick={onAdd}/>}     
            </div>
        </div>
        </>
    )

};

export default ItemDetailContainer;