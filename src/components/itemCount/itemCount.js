import { useState } from "react";
import "./itemCount.css";

function ItemCount(props) {
  const [num, setNum] = useState(props.initial);

  const sumar = () => {
    if (num < props.stock) {
      setNum(num + 1);
    }
  };

  const restar = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

  const reset = () => {
    setNum(0);
  };

  return (
    <>
      <div className="container">
        <div className="d-grid gap-2 d-flex justify-content-around m-2">
          <button
            className="btn btn-primary px-3"
            type="button"
            onClick={sumar}
          >
            +
          </button>
        <p className="d-flex justify-content-center">{num}</p>
          <button
            className="btn btn-primary px-3"
            type="button"
            onClick={restar}
          >
            -
          </button>
        </div>
        <div className="d-flex flex-column">
          <button
            className="btn btn-primary my-1"
            type="button"
            onClick={reset}
          >
            Reset
          </button>
          <button
            className="btn btn-primary my-1"
            type="button"
            onClick={() => {
              props.onAdd(num);
            }}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </>
  );
}

export default ItemCount;
