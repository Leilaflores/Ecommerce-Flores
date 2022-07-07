import './ItemListContainer.css'
import { useEffect, useState } from 'react';
import ItemList from '../itemList/ItemList.js'
import { useParams } from 'react-router-dom'

function ItemListContainer() {
    const { id } = useParams();
    const [items, setItems] = useState([])

    const getItems = async () => {
        const fetchData = await fetch('/data.json') 
        const data = await fetchData.json()
        return new Promise((res)=>{setTimeout(res(data),2000)})
      }
    
      useEffect(() => {
        getItems().then((res)=>{
          if(id){
            const filteredData = res.filter((item)=> item.category === id)
            setItems(filteredData);
          }
          else{
            setItems(res);
          }
        })
      }, []);

    return (
      <div className='container'>
        <section className='row justify-content-around flex-wrap g-4'>
            { <ItemList items={items} /> }
        </section>
      </div>
    );
}

export default ItemListContainer;