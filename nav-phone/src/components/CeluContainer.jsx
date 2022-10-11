import React, { useState, useEffect } from "react";
import CelusCards from "./CelusCards";
import Celu from "./Celu";
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

  return (
    <>
      {celulares.length ? ( 
        <CelusCards Cards={celulares}/>
      ) : (
        <h1 className="loader">Cargando...</h1>
      )}
    </>
  );
};

export default CeluContainer;
