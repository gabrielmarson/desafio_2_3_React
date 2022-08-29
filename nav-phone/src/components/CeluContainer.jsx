import React, {useState, useEffect} from 'react';
import CelusCards from './CelusCards';
import datosCelus from '../DatosCelus';

const CeluContainer = () => {
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

    return <CelusCards Cards={celulares}/>

};

export default CeluContainer;
