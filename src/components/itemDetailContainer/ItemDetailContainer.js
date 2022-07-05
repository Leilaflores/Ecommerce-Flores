//import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import Item from "../item/Item";

function ItemDetailContainer() {
  const [item, setItem] = useState([]);

  const id = 2;
  const getItem = async () => {
    const fetchData = await fetch('data.json') 
    const data = await fetchData.json()
    const item = data.find(item => item.id == id)
    return new Promise((res)=>{setTimeout(res(item),2000)})
  }

  useEffect(() => {
    getItem().then((res)=>{
      setItem(res);
    })
  }, []);

  return <div className="container">{<ItemDetail item={item} />}</div>;
}

export default ItemDetailContainer;
