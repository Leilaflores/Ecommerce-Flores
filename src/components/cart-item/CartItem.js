import "./CartItem.css"
import { useContext } from "react";
import ItemCount from "../itemCount/itemCount";
import CartContext from "../../store/CartContext";

function CartItem(props) {
    const { removeItem } = useContext(CartContext);
    return (
        <div className="cart-card w-100 d-flex justify-content-between align-items-center" style={{height: "120px"}}>
        <div className="h-100 d-flex align-items-center">
            <img alt={props.title} className="h-100" src={props.picture} />
            <div className="ms-3 d-flex flex-column align-items-start">
                <h4> {props.cant && props.cant + " X " } {props.title} </h4>
                <p className="m-0"> ${props.price * props.cant} </p>
            </div>
        </div>
        <div>
            <ItemCount
                stock={props.cant}
                initial={1}
                onClick={(num) => removeItem(props.id, num)}
                btnText="Eliminar del carrito"
                />
        </div>
        </div>
    );
}

export default CartItem;
