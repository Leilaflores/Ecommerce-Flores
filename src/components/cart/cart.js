import { useContext } from "react";
import CartContext from "../../store/CartContext";

const Cart = () =>{
    const { cart } = useContext(CartContext);
    console.log(cart)
}

export default Cart;