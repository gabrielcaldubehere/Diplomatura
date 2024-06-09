import { BrowserRouter, Routes, Route } from "react-router-dom";

import logo from "./logo.svg";
import mercadolibre from "./assets/images/mercadolibre.png";
import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";

import Homepage from "./pages/Homepage.js";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
