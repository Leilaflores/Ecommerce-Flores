import { useContext } from "react";
import CartContext from "../../store/CartContext";
import Item from "../item/Item";
import ItemCount from "../itemCount/itemCount";
import { Link } from "react-router-dom";

const Cart = () =>{
    const { cart, cartCount, removeItem } = useContext(CartContext);

    return (
        <div className="container">
            <h1 className="text-center">{cartCount} Elementos</h1>
            <section className='row justify-content-around flex-wrap g-4'>
                {cart.length > 0 ? (cart.map((item)=>{
                    return (
                    <div key={item.id} style={{width: "300px"}}>
                        <Item 
                            title={item.title}
                            price={item.price}
                            id={item.id}
                            picture={item.picture}
                            stock={item.stock}
                            cant={item.quantity}
                        />
                        <div>
                        <ItemCount stock={item.quantity} initial={1} onClick={(num)=>removeItem(item.id, num)} btnText="Eliminar del carrito" />
                        </div>
                    </div>
                    )
                })):(
                    <>
                        <Link className="text-center" to="/">Ir a la landing</Link>
                    </>
                )}
            </section>
        </div>
    )
}

export default Cart;