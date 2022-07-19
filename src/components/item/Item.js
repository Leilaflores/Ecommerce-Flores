
import "./Item.css";
import { Link } from "react-router-dom";

function Item(props) {
  return (
    <div className="card col-2 pb-4">
      <div>
        <div className="d-flex flex-column align-items-center">
        <h4> {props.cant && props.cant + " X " } {props.title} </h4>
        <p> {props.price} </p>
        </div>
        <Link to={`/item/${props.id}`}>
          <img alt={props.title} width={250} height={400} src={props.picture} />
        </Link>
        
      </div>
    </div>
  );
}

export default Item;
