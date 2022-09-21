import React, { useState, useEffect } from "react";
import CelusCards from "./CelusCards";
//import datosCelus from '../DatosCelus';
import "./Navbar.css";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../firebase/firebaseConfig";


const CeluContainer = () => {

  const {categoria} = useParams();

  const [celulares, setCelulares] = useState([]);

  const getData = async(categoria) => {
    try {

        const document = categoria ? query(collection(db,"celulares"), where("marca", "==", categoria)) : collection(db, "celulares")
        const col = await getDocs(document)
        const result = col.docs.map((doc) => doc ={id: doc.id, ...doc.data()})
        setCelulares(result)

    } catch (error) {
        console.log(error)   
    }  
  }

  useEffect(() => {
    getData(categoria)
  }, [categoria]) 

  /*const getCeluData = new Promise ((resolve, reject) => {

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

    }, [categoria]);*/

  return (
    <>
      {celulares.length ? (
        <CelusCards Cards={celulares} />
      ) : (
        <h1 className="loader">Cargando...</h1>
      )}
    </>
  );
};

export default CeluContainer;
