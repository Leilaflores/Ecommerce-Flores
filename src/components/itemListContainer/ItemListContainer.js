import './ItemListContainer.css'
import Card from '../card/Card';

function ItemListContainer() {
    return (
    <div className='container'>
    <section className='row justify-content-around flex-wrap g-4'>
        <Card product='Remera' price='20' img=''/>
        <Card product='Pantalon' price='60' img=''/>
        <Card product='Buzo' price='80' img=''/>
        <Card product='Medias' price='10' img=''/>
    </section>
    </div>
    );
}

export default ItemListContainer;