import "./Navbar.css";
import logo from "../assets/logo_locasta.png";

function Navbar() {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-light">
        <div class="fondo container-fluid">
          <a class="navbar-brand d-flex align-items-center" href="#">
            <img
              src={logo}
              alt=""
              width="50"
              height="50"
              class="d-inline-block align-text-top"
            />
            <h5 class="ps-2 m-0">Locasta</h5>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse position-absolute end-0 pe-3" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Productos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Galeria
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contacto
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Conocenos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
