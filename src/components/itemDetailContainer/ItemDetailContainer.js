//import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {
  const [item, setItem] = useState([]);

  const { id } = useParams();

  const getItem = async () => {
    const fetchData = await fetch('/data.json') 
    const data = await fetchData.json()
    const item = data.find(item => item.id == id)
    return new Promise((res)=>{setTimeout(res(item),2000)})
  }

  useEffect(() => {
    getItem().then((res)=>{
      setItem(res);
    })
  }, [id]);

  return (

    <div className="container">
      {item && <ItemDetail item={item} />}
    </div>
  )
}

export default ItemDetailContainer;
