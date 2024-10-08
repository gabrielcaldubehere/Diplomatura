import React from "react";
import styleNav from "./../styles/components/layout/Nav.css";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (<div>
    <nav className="nav">
      <ul className="ulnav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Productos">Productos </Link>
        </li>
        <li><Link to="/Empresa">La Empresa</Link></li>
        <li><Link to="/Contacto">Contacto</Link></li>
      </ul>
    </nav>


  </div>

  );
};

export default Nav;
