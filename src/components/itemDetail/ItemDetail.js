

function ItemDetail({item}){
    return (
        <div className="row">
            <img src={item.picture} width="300" className="col-4"  />
            <div className="col-8 d-flex flex-column align-items-center" > 
                <h1>
                    {item.title}
                </h1>    
                <h3>${item.price}</h3>
                <h4>Stock: {item.stock}</h4>
            </div>
        </div>
    )
}

export default ItemDetail;