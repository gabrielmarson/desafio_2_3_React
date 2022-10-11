import { async } from "@firebase/util";
import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../components/context/CartContext";
import db from "../firebase/firebaseConfig";
import Swal from "sweetalert2";

const FormCheckout = () => {
    const {cart, totalPrice, clear} = useCartContext();
    const [orderId, setOrderId] = useState()
    const [comprar, setComprar] = useState({
        Nombre:"",
        Apellido:"",
        Email:"",
        Telefono:""
    })

    const {Nombre, Apellido, Email, Telefono} = comprar
    const navigate = useNavigate()
    const generateOrder = async (data) => {
        try {
            const col = collection(db, "Orders")
            const order = await addDoc(col, data)
            setOrderId(order.id)
            clear()
        } catch (error) {
            console.log(error)
        }
    }

    const handleInputChanges = (e) => {
        setComprar(({
            ...comprar,
            [e.target.name] : e.target.value
        }))  
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const celus = cart.map(e=>{return {id:e.id, marca:e.marca, modelo:e.modelo, precio:e.precio, quantity:e.quantity}})
        const dia = new Date()
        const total = totalPrice(1)
        const data = {comprar, celus, dia, total}
        generateOrder(data)
    }

    const handleClear = () => {
        clear()
        navigate("/cart")
    }

    const finalizar = () => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Compra realizada con éxito!',
          showConfirmButton: false,
          timer: 2500
        })
      }

  return (
    <>
    {!orderId ?
      (<div>
          <form onSubmit={handleSubmit}>
            <legend>Estas a punto de finalizar tu compra</legend>
            <h4>Completar Datos</h4>
            <div className="container-fluid">
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-lg-3 mb-2">
                  <input
                    type="text"
                    name="Nombre"
                    className="form-control"
                    placeholder="Nombre"
                    value={Nombre}
                    onChange={handleInputChanges}
                  />
                </div>
                <div className="col-xs-12 col-sm-6 col-lg-3 mb-2">
                  <input
                    type="text"
                    name="Apellido"
                    className="form-control"
                    placeholder="Apellido"
                    value={Apellido}
                    onChange={handleInputChanges}
                  />
                </div>
                <div className="col-xs-12 col-sm-6 col-lg-3 mb-2">
                  <input
                    type="text"
                    name="Email"
                    className="form-control"
                    placeholder="@email"
                    value={Email}
                    onChange={handleInputChanges}
                    required
                  />
                </div>
                <div className="col-xs-12 col-sm-6 col-lg-3 mb-2">
                  <input
                    type="number"
                    name="Telefono"
                    className="form-control"
                    placeholder="numero"
                    value={Telefono}
                    onChange={handleInputChanges}
                  />
                </div>
                <div className="col-xs-4 col-sm-6 col-lg-12 mx-auto p-2">
                  <button onClick={finalizar} type="submit" className="btn btn-primary mb-3">
                    FINALIZAR COMPRA
                  </button>
                  <button className="btn btn-danger mb-3" onClick={handleClear}>
                    CANCELAR COMPRA
                  </button>
                </div>
              </div>
            </div>
          </form>
      </div>)
        :  
        <h4 className="text-center fs-2 fw-bolder">Su orden de compra es: {orderId}</h4> 
    }
    </>
  );
};

export default FormCheckout;
