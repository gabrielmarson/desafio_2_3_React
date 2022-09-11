import {useState} from 'react';

export const ItemCounts = ({stock, onClick}) => {
    
    const [count, setCount] = useState(1);
    
    function sumar() {
        if (count < stock) {

            setCount(count + 1);
        }


    }

    function restar() {
        if (count > 1) {

            setCount(count - 1);
        }
    }

    function reset() {

        setCount(1);
    }

    
    return (
        
            <div className="position-absolute top-50 start-50 translate-middle-y">
                <div className="card-body">
                    <h5 className="card-title text-center">Detalle de su Compra</h5>
                    <p className="card-text text-center">Stock: {stock}</p>
                    <p className="card-text text-center">Cantidad: {count}</p>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary m-5" onClick={sumar}>+</button>
                        <button className="btn btn-primary m-5" onClick={reset}>RESET</button>
                        <button className="btn btn-primary m-5" onClick={restar}>-</button>
                    </div>
                    <div>
                        <button disabled={stock <=0} className="btn btn-success position-absolute top-55 start-50 translate-middle" type="button" onClick={() =>  onClick(count)}>Agregar al Carrito</button>
                    </div>
                </div>
            </div>
    );
}


