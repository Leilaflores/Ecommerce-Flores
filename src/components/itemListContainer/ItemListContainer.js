import './ItemListContainer.css'
import { useEffect, useState } from 'react';
import ItemList from '../itemList/ItemList.js'

function ItemListContainer() {

    const [items, setItems] = useState([])

    useEffect(()=>{
        fetch('data.json') 
        .then((resp)=> resp.json())
        .then((data)=> setItems(data)) 
    }, [])


    return (
    <div className='container'>
    <section className='row justify-content-around flex-wrap g-4'>
        { <ItemList items={items} /> }
    </section>
    </div>
    );
}

export default ItemListContainer;