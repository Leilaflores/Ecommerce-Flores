
import ItemCount from "../itemCount/itemCount";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ItemDetail({item}){
    const navigate = useNavigate();
    const [itemCount, setItemCount] = useState(1);
    const [itemAdded, setItemAdded] = useState(false);

    return (
        <div className="row">
            <img src={item.picture} width="300" className="col-4"  />
            <div className="col-8 d-flex flex-column align-items-center" > 
                <h1>
                    {item.title}
                </h1>    
                <h3>${item.price}</h3>
                <h4>Stock: {item.stock}</h4>
                {!itemAdded && <ItemCount stock={item.stock} initial={itemCount} onAdd={(num)=>{setItemCount(num); setItemAdded(true)}} />}
                {itemAdded && <button onClick={()=>{navigate("/cart")}} className="btn btn-primary px-3" >Terminar compra</button>}
            </div>
        </div>
    )
}

export default ItemDetail;