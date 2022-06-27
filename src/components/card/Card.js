import ItemCount from "../itemCount/itemCount";
import "./Card.css";

function Card({ product, price, img }) {
  return (
    <div className="card col-2 pb-4">
      <div>
        <div className="d-flex flex-column align-items-center">
        <h4> {product} </h4>
        <p> {price} </p>
        </div>
        <img src={img} />
        <ItemCount stock={5} initial={1} onAdd={(numero)=>{console.log(numero);}} />
      </div>
    </div>
  );
}

export default Card;
