import React, {useState, useEffect} from 'react';
import CelusCards from './CelusCards';
import datosCelus from '../DatosCelus';
import './Navbar.css';
import { useParams } from 'react-router-dom';

const CeluContainer = () => {
    const [celulares, setCelulares] = useState([]);

    const {categoria} = useParams()

    useEffect(() => {
        
        const getCeluData = new Promise ((resolve, reject) => {

            if(categoria) {
                 setTimeout(() => {
                    resolve(datosCelus.filter(item => item.marca === categoria));
                }, 2000);
            }else{
                setTimeout(() => {
                    resolve(datosCelus)}, 2000);
                }
            
        });

        getCeluData
        .then((response) => setCelulares (response))
        .catch(error => {
           
            console.error(error)

        })

    }, [categoria]);

    return( 
        <> 
    
            {celulares.length ? <CelusCards Cards={celulares}/> : <h1 className='loader'>Cargando...</h1> }
    
        </>
    
    )

};

export default CeluContainer;
