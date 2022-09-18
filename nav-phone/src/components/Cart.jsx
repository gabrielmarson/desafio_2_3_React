import React from "react";
import CartCards from "./CartCards";
import { useCartContext } from "./context/CartContext";
import NoProductsImg from "../img/no-products-found_2.png";
import { Link } from "react-router-dom";
import CartEndShop from "./CartEndShop";

const Cart = () => {
  const { cart, totalPrice} = useCartContext();
  

  if (cart.length === 0) {
    return (
      <>
        <div>
          <img src={NoProductsImg} className="card col-md-6 w-50 mx-auto"/>
          <div className="card-body">
            <Link to="/" className="Underline"><h5 className="card-title text-center">VER EQUIPOS!</h5></Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <h1 className="text-center m-5">Carrito de Compras</h1>
      {cart.map((product) => (
        <CartCards key={product.id} product={product} />
      ))}
        <CartEndShop totalPrice={totalPrice}/>
    </>
  );
};

export default Cart;
