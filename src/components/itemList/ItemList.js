
import Item from '../item/Item.js';

function ItemList(props){
    return(
        <>
            {props.items.map((item)=>(
                <Item
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    id={item.id}
                    picture={item.picture}
                    stock={item.stock}
                />
            ))}
        </>
    );
}

export default ItemList;
