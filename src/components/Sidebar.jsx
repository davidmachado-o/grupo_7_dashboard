import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <ul className="nav flex-column">
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
      </div>
    </div>
  );
}

export default Sidebar;
