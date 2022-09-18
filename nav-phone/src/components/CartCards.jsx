import React from "react";

import { useCartContext } from "./context/CartContext";

const CartCards = ({product}) => {

    const {removeItem} = useCartContext();

  return (
    <>
      <div className="card mb-3 w-80 m-3">
        <div className="row g-0">
          <div className="col-2">
            <img src={product.imagen} style={{width: '15rem'}}/>
          </div>
          <div className="col-3 d-flex align-items-center">
            <div className="card-body">
              <h4 className="card-title">{product.marca} {product.modelo}</h4>
            </div>
          </div>
          <div className="col-3 d-flex align-items-center">
            <div className="card-body">
              <h5 className="card-title">Cantiad: {product.quantity}</h5>
              <h5 className="card-title">Precio Unitario: ${product.precio}</h5>
            </div>
          </div>
          <div className="col-2 d-flex align-items-center">
            <div className="card-body">
              <h5 className="card-title">Subtotal: ${product.quantity * product.precio}</h5>
            </div>
          </div>
          <div className="col-2 position-relative">
            <div className="card-body">
              <button><i onClick={()=>removeItem(product.id)} class="bi bi-trash3 text-danger fs-4"></i></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCards;
