import './Card.css';

function Card({product , price , img}) {
    return(
        <div className='card col-2'>
            <div>
            <h4> {product} </h4>
            <p> {price} </p>
            <img src={img} />
            </div>
        </div>
    );
}

export default Card;