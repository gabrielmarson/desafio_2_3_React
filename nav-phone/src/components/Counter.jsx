import {useState} from 'react';

const Counter = ({stock, onAdd}) => {

    const [count, setCount] = useState(0);

    function sumar() {
        if (count < stock) {

            setCount(count + 1);
        }


    }

    function restar() {
        if (count > 0) {

            setCount(count - 1);
        }
    }

    function reset() {

        setCount(0);
    }

    return (
            <div className="position-absolute top-50 start-50 translate-middle-y">
                <div className="card-body">
                    <h5 className="card-title text-center">Contador</h5>
                    <p className="card-text text-center">Stock: {stock}</p>
                    <p className="card-text text-center">Cantidad: {count}</p>
                    <div className="d-flex justify-content-center">
                        <a href="#" className="btn btn-primary m-5" onClick={sumar}>+</a>
                        <a href="#" className="btn btn-primary m-5" onClick={reset}>RESET</a>
                        <a href="#" className="btn btn-primary m-5" onClick={restar}>-</a>
                    </div>
                    <div>
                    <a href="#" className="btn btn-dark position-absolute top-55 start-50 translate-middle" onClick={() => onAdd(count)}>Confirmar</a>
                    </div>
                </div>
            </div>
    );
}

export default Counter;
