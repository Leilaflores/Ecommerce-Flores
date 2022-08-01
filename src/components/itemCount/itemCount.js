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

  return (
    <>
      <div className="container">
        <div className="d-grid py-1 d-flex justify-content-between align-items-center">
          <button
            className="btn btn-primary px-3"
            type="button"
            onClick={restar}
          >
            -
          </button>
          <p className="m-0 d-flex justify-content-center">{num}</p>
          <button
            className="btn btn-primary px-3"
            type="button"
            onClick={sumar}
          >
            +
          </button>
        </div>
        <div className="d-flex flex-column">
          <button
            className="btn btn-primary my-1"
            type="button"
            onClick={() => {
              props.onClick(num);
            }}
          >
            {props.btnText}
          </button>
        </div>
      </div>
    </>
  );
}

export default ItemCount;
