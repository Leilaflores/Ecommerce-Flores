import "./CardWidget.css";
import { useContext } from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import CartContext from "../../store/CartContext";
const fontStyles={color:'white'};

function Cart(){
    const { cartCount } = useContext(CartContext);

    return(
        <div className='position-relative'>
            <FaShoppingCart style={fontStyles}/>
            <div className='cart-badge position-absolute'>
                {cartCount}
            </div>
        </div>
    )
}

export default Cart;