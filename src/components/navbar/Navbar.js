import "./Navbar.css";
import Cart from '../cardWidget/CardWidget'
import logo from "../../assets/logo_locasta.png";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-light">
        <div className="fondo container-fluid">
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
                <a className="nav-link active" aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  Galeria
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  Contacto
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  Conocenos
                </a>
              </li>
              <li>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                   Categorias
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Link to="/category/pantalones">
                      <Dropdown.Item >Pantalones</Dropdown.Item>
                    </Link>
                    <Link to="/category/camisas">
                      <Dropdown.Item >Camisas</Dropdown.Item>
                    </Link>
                    <Link to="/category/buzos">
                      <Dropdown.Item >Buzos</Dropdown.Item>
                    </Link>
                    <Link to="/category/remeras">
                      <Dropdown.Item >Remeras</Dropdown.Item>
                    </Link>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </ul>
            <a className="nav-link">
              <Cart/>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
