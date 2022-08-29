import React, {useState, useEffect} from 'react';
import CelusCards from './CelusCards';
import datosCelus from '../DatosCelus';

console.log(datosCelus);
//Eze como estas mira aca te explico maso menos lo que me pasa: 1) no se porque pero no puedo consoliar nada :/ el console.log() no me estaria funciondo no se si habrá que configurar algo en react o soy yo que le estaré errando en algo pero bueno je. 2) Estoy trabado en esta parte fijate que cuando hago la promesa teoricamente hasta resolve va bien (digo teoricamente porque no puedo consoliar =( ) pero cuando hago el getCeluData y entra en el .then ahi me tira los errores, si apoyas el mouse arriba del .then vas a leer que dice todo null y undefined. Lei por ahi que tiene que ver con el useState que no hay que declararlo vacío, pero Gabriel el tutor que dio el ultimo after lo hizo asi y le funcionó. Yo Maso menos lo segui con el codigo pero estoy trabado aca. Hoy estuve todo el dia pero no no hay chance jaja si llegas a ver cual puede ser el error de lujo!. Fijate que por consola te van a salir errores de la funcion Map pero es por que no estoy pudiendo llevar el array hacia Allá. Si comentas en App.jsx el import de CelusCards y sacas el return de CelisCards se va ese error de consola (Seguro ya lo sabes Eze solo es aclaracion) Bueno si lo podes ver genial Eze y muchas gracias como siempre!
const CeluContainer = () => {
    const [celulares, setCelulares] = useState([]);

    useEffect(() => {
        
        const getCeluData = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(datosCelus);
                console.log(datosCelus)
            }, 2000);
        });

        getCeluData
        .then((response) => setCelulares (response))

    }, []);

    return <CelusCards Cards={celulares}/>

};

export default CeluContainer;
