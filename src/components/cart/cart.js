import { useContext, useState } from "react";
import CartContext from "../../store/CartContext";
import Item from "../item/Item";
import ItemCount from "../itemCount/itemCount";
import { Link } from "react-router-dom";
import { Form, InputGroup, Button } from "react-bootstrap";
import { collection, addDoc, getFirestore } from 'firebase/firestore';

const Cart = () => {
  const { cart, cartCount, removeItem, getTotal, getItemsForOrder } = useContext(CartContext);
  const [modal, setModal] = useState(false);
  const [orderId, setOrderId] = useState();
  const db = getFirestore();

  const generateOrder = () => {
    const collRef = collection(db, "orders");
    const total = getTotal();
    const order = {
        buyer: {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
        },
        items: getItemsForOrder(),
        date: Date.now(),
        total: total
    }

    addDoc(collRef, order).then((res)=>{
        setOrderId(res.id)
    })
  };

  const buy = () =>{
    setModal(true);
  }
  return (
    <>
      <div className="container">
        <h1 className="text-center">{cartCount} Elementos</h1>
        <section className="row justify-content-around flex-wrap g-4">
          {cart.length > 0 ? (
            <>
                {
                    cart.map((item) => {
                    return (
                        <div key={item.id} style={{ width: "300px" }}>
                        <Item
                            title={item.title}
                            price={item.price}
                            id={item.id}
                            picture={item.picture}
                            stock={item.stock}
                            cant={item.quantity}
                        />
                        <div>
                            <ItemCount
                            stock={item.quantity}
                            initial={1}
                            onClick={(num) => removeItem(item.id, num)}
                            btnText="Eliminar del carrito"
                            />
                        </div>
                        </div>
                    );
                    })
                }
                <Button variant="primary" onClick={buy}>Finalizar compra</Button>{' '}
            </>
            
          ) : (
            <>
              <Link className="text-center" to="/">
                Ir a la landing
              </Link>
            </>
          )}
        </section>
      </div>
      {modal && 

        <div
            style={{
            position: "absolute",
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            left: 0,
            top: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            }}
        >
            <div style={{ width: "300px", backgroundColor: "#fff", padding: "40px", borderRadius: "15px" }}>
            <InputGroup className="mb-3">
                <InputGroup.Text>
                Nombre
                </InputGroup.Text>
                <Form.Control
                id="name"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text>
                Telefono
                </InputGroup.Text>
                <Form.Control
                id="phone"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text>
                Email
                </InputGroup.Text>
                <Form.Control
                id="email"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <Button variant="primary" onClick={generateOrder}>Generar orden</Button>{' '}
            </div>
            { orderId &&
                <div style={{backgroundColor: "#fff", padding:"15px", marginTop:"30px"}}>
                    <h2>Id de orden: {orderId}</h2>
                </div>
            }
        </div>
      }
    </>
  );
};

export default Cart;
