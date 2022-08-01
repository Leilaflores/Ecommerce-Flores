import { useContext, useState } from "react";
import CartContext from "../../store/CartContext";
import CartItem from "../cart-item/CartItem";
import "./cart.css";
import { Link, useNavigate } from "react-router-dom";
import { Form, InputGroup, Button } from "react-bootstrap";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const Cart = () => {
  const { cart, cartCount, cartTotal, getItemsForOrder, clear } =
    useContext(CartContext);
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [error, setError] = useState("");

  const [orderId, setOrderId] = useState("");
  const [bougth, setBougth] = useState(false);
  const db = getFirestore();

  const generateOrder = () => {

    if(name == ""){
      return setError("Nombre requerido");
    }
    if(phone == ""){
      return setError("Telefono requerido");
    }
    if(email == ""){
      return setError("Email requerido");
    }
    if(email2 == ""){
      return setError("Verificacion de email requerida");
    }
    if(email != email2){
      return setError("Los emails nlo coinciden");
    }

    setError("");

    const collRef = collection(db, "orders");
    const total = cartTotal;
    const order = {
      buyer: {
        name: name,
        phone: phone,
        email: email,
      },
      items: getItemsForOrder(),
      date: Date.now(),
      total: total,
    };

    addDoc(collRef, order).then((res) => {
      setOrderId(res.id);
    });
  };

  const buy = () => {
    setBougth(true);
    setTimeout(()=>{
      clear();
      navigate("/")
    },3000);
  };

  return (
    <>
      <div className="container">
        <section className="row justify-content-around flex-wrap g-4">
          {cart.length > 0 ? (
            <>
              <h1 className="text-center">{cartCount} Elementos</h1>
              <div className="row">
                <div
                  className="col-8 d-flex flex-column"
                  style={{ gap: "15px" }}
                >
                  {cart.map((item) => {
                    return (
                      <div key={item.id}>
                        <CartItem
                          title={item.title}
                          price={item.price}
                          id={item.id}
                          picture={item.picture}
                          stock={item.stock}
                          cant={item.quantity}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="cart-card col-4 text-center">
                  <h4>Datos personales</h4>
                  <InputGroup className="my-3">
                    <InputGroup.Text style={{width:"35%", justifyContent: "center"}}>Nombre</InputGroup.Text>
                    <Form.Control
                      id="name"
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      onChange={(event)=>{setName(event.target.value)}}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Text style={{width:"35%", justifyContent: "center"}}>Telefono</InputGroup.Text>
                    <Form.Control
                      id="phone"
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      onChange={(event)=>{setPhone(event.target.value)}}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Text style={{width:"35%", justifyContent: "center"}}>Email</InputGroup.Text>
                    <Form.Control
                      id="email"
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      onChange={(event)=>{setEmail(event.target.value)}}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Text style={{width:"35%", justifyContent: "center"}}>Validar email</InputGroup.Text>
                    <Form.Control
                      id="validEmail"
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      onChange={(event)=>{setEmail2(event.target.value)}}
                    />
                  </InputGroup>
                  <div className="text-center mb-3">
                    <span className="text-danger text-center">{error}</span>
                  </div>
                  <Button variant="primary" onClick={generateOrder}>
                    Generar orden
                  </Button>
                </div>
              </div>
              <h2 className="text-center">Total: ${cartTotal} </h2>
            </>
          ) : (
            <>
              <h1 className="text-center">
                No hay elementos agregados al carito
              </h1>
              <Link className="text-center" to="/">
                Ir a la Home
              </Link>
            </>
          )}
        </section>
      </div>
      {orderId && (
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
              padding: "40px",
              borderRadius: "15px",
            }}
          >
            <h2 className="mb-5">Id de orden: {orderId}</h2>
            
            { bougth ? (

            <div className="bg-success text-light py-2 px-5 rounded">
              Compra realizada exitosamente!
            </div>
            ): 
            (
              <Button variant="primary" onClick={buy}>
                Finalizar compra
              </Button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
