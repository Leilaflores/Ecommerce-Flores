import "./Navbar.css";
import Cart from '../cardWidget/CardWidget'
import logo from "../../assets/logo_locasta.png";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useContext } from "react";
import CartContext from "../../store/CartContext";

function Navbar() {

  const { cartCount } = useContext(CartContext);
  const navigate = useNavigate();


  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-light p-0">
        <div className="fondo container-fluid py-1">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img
              src={logo}
              alt=""
              width="50"
              height="50"
              className="d-inline-block align-text-top"
            />
            <h5 className="ps-2 m-0">Locasta</h5>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse position-absolute end-0 pe-3" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={"/"} className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                   Categorias
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={()=>{navigate("/category/pantalones")}} >Pantalones</Dropdown.Item>
                    <Dropdown.Item onClick={()=>{navigate("/category/camisas")}} >Camisas</Dropdown.Item>
                    <Dropdown.Item onClick={()=>{navigate("/category/buzos")}} >Buzos</Dropdown.Item>
                    <Dropdown.Item onClick={()=>{navigate("/category/remeras")}} >Remeras</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </ul>
            {cartCount != 0 &&
              <Link to="/cart" className="mx-3">
                <Cart/>
              </Link>
            }
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
