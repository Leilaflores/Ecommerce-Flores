import './ItemListContainer.css'
import { useEffect, useState } from 'react';
import ItemList from '../itemList/ItemList.js'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

function ItemListContainer() {
    const { categoryId } = useParams();
    const [items, setItems] = useState([])
    const db = getFirestore();

    useEffect(()=>{
      const collRef = collection(db, "items");
      
      if(!categoryId){
        getDocs(collRef).then((snapshot) =>{
          setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
        })
      }
      else{
        const q = query(collRef, where("category", "==", categoryId));
        getDocs(q).then((snapshot) =>{
          setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
        })
      }
    },[categoryId])

    return (
      <div className='container'>
        <section className='row justify-content-around flex-wrap g-4'>
            { <ItemList items={items} /> }
        </section>
      </div>
    );
}

export default ItemListContainer;