import React from "react";
import stylenav from "../styles/components/layout/Nav.css";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav className="nav">
      <ul className="ulnav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="clasificacion">
          Productos
          <ul className="productos">
            <li>Climatización</li>
            <li>Electrónica</li>
            <li>Deportes</li>
          </ul>
        </li>
        <li>La Empresa</li>
        <li>Trabaja con Nosotros</li>
      </ul>
    </nav>
  );
};

export default Nav;
