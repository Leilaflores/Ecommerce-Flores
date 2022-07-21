import { useEffect, useState } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore';

function ItemDetailContainer() {
  const [item, setItem] = useState([]);
  const { id } = useParams();
  const db = getFirestore();

  useEffect(()=>{
    const docRef = doc(db, "items", id);
    getDoc(docRef).then((snapshot) =>{
      setItem({id: snapshot.id, ...snapshot.data()});
    })
  },[id])

  return (

    <div className="container">
      {item && <ItemDetail item={item} />}
    </div>
  )
}

export default ItemDetailContainer;
