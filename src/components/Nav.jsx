import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/numpy-02.png";

function Nav() {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light">
      <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <img className="logo" src={logo} alt="Logo" />
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link link-dark">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/users" className="nav-link link-dark">
            Usuarios
          </Link>
        </li>
        <li>
          <Link to="/products" className="nav-link link-dark">
            Productos
          </Link>
        </li>
        <li>
          <Link to="/categories" className="nav-link link-dark">
            Categorías
          </Link>
        </li>
        <li>
          <Link to="/lastproduct" className="nav-link link-dark">
            Último producto creado
          </Link>
        </li>
        <li>
          <Link to="/lastuser" className="nav-link link-dark">
            Último usuario creado
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;