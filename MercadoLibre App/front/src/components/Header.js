import React from "react";
import mercadolibre from "../assets/images/mercadolibre.png";
import styleheader from "../styles/components/layout/Header.css";

const Header = (props) => {
  return (
    <header className="header">
      <img id="mercadolibreimg" src={mercadolibre} alt="Logo"></img>
      <h1>Mercado Libre</h1>
    </header>
  );
};

export default Header;
