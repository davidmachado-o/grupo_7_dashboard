import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="d-grid gap-2 d-md-block">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/users">Usuarios</Link>
        </li>
        <li className="nav-item">
          <Link to="/products">Productos</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
