
import ItemCount from "../itemCount/itemCount";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../store/CartContext";

function ItemDetail({item}){
    const navigate = useNavigate();
    const { addItem } = useContext(CartContext);
    const [itemCount, setItemCount] = useState(1);
    const [itemAdded, setItemAdded] = useState(false);

    const addToCart = (quantity) =>{
        const newItem = {
            id: item.id,
            title: item.title,
            picture: item.picture,
            price: item.price
        }
        addItem(newItem, quantity);
    }

    const onAdd = (num)=>{   
        setItemCount(num); 
        setItemAdded(true);
        addToCart(num);
    }

    return (
        <div className="row">
            <img alt="" src={item.picture} width="300" className="col-4"  />
            <div className="col-8 d-flex flex-column align-items-center" > 
                <h1>
                    {item.title}
                </h1>    
                <h3>${item.price}</h3>
                <h4>Stock: {item.stock}</h4>
                {!itemAdded && <ItemCount stock={item.stock} initial={itemCount} onClick={(num)=>onAdd(num)} btnText="Agregar al carrito" />}
                {itemAdded && <button onClick={()=>navigate("/cart")} className="btn btn-primary px-3" >Terminar compra</button>}
            </div>
        </div>
    )
}

export default ItemDetail;