import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "./context/CartContext";
const CartEndShop = () => {
    const {totalPrice} = useCartContext();
    const [cuota, setCuota] = useState(totalPrice(1)); 

  return (
    <div className="d-flex justify-content-center gap-5 mb-5">
      <p className="text-sm-center m-4">Elija Cantidad de Cuotas</p>
      <div>
        <select onChange={(e) => {setCuota(e.target.value)}} className="form-select-sm m-4">
          <option value={totalPrice(1)}>1 Pago Sin Interés</option>
          <option value={totalPrice(3)}>3 Pagos 20% de Recargo</option>
          <option value={totalPrice(6)}>6 Pagos 40% de Recargo</option>
          <option value={totalPrice(12)}>12 Pagos 60% de Recargo</option>
        </select>
      </div>
      <div className="card ">
        <div className="card-body fw-bold fs-3 text-center" style={{width: '12rem'}}>${cuota}</div>
      </div>
      <Link to="/checkout"><button type="button" class="btn btn-primary fs-5" style={{height: '5rem'}}>COMPRAR</button></Link>
    </div>
  );
};

export default CartEndShop;
