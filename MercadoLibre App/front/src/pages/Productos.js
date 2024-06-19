import React from "react";
import styleproductos from "../styles/components/pages/Productos.css";
import prod1 from "../assets/images/calefaccion/calefaccion.jpg";
import prod2 from "../assets/images/calefaccion/estufa gas.jpg";
import prod3 from "../assets/images/calefaccion/panelvitro.jpg";
import prod4 from "../assets/images/calefaccion/calefaccion2.jpeg";
import prod5 from "../assets/images/calefaccion/aire acondicionado.jpg";
import prod6 from "../assets/images/calefaccion/salamandra.jpg";
const Productos = (props) => {
  return (
    <section className="prod">
      <div className="cajas">
      <img className="producto" id="prod1" src={prod1} width="100%" alt="img1"></img>
      <p className="descripcion">Estufa Convector Electrica 2000w Peabody</p>
       <input type="number" id="cantidad" min="0" ></input>
       <button type="submit" id="agregar">Agregar al carrito</button>
    </div>
    <div className="cajas">
    <img className="producto" id="prod2" src={prod2} width="100%" alt="img1"></img>
      <p className="descripcion">Estufa Gas Natural 2500k Volcan</p>
       <form>
       <input type="number" id="cantidad" min="0" ></input>
        </form>           
        <button type="submit" id="agregar">Agregar al carrito</button>
    </div>
    <div className="cajas">
    <img className="producto" id="prod3" src={prod3} width="100%" alt="img1"></img>
      <p className="descripcion">Panel Vitroconvector 2000w Liliana</p>
       <form>
       <input type="number" id="cantidad" min="0" ></input>
        </form>           
        <button type="submit" id="agregar">Agregar al carrito</button>
    </div>
    <div className="cajas">
    <img className="producto" id="prod4" src={prod4} width="100%" alt="img1"></img>
      <p className="descripcion">Estufa Electrica Infrarroja 1200w Liliana</p>
       <form>
       <input type="number" id="cantidad" min="0" ></input>
        </form>           
        <button type="submit" id="agregar">Agregar al carrito</button>
    </div>
    <div className="cajas">
    <img className="producto" id="prod5" src={prod5} width="100%" alt="img1"></img>
      <p className="descripcion">Aire Acondicionado BGH 3200FC Inverter</p>
       <form>
       <input type="number" id="cantidad" min="0" ></input>
        </form>           
        <button type="submit" id="agregar">Agregar al carrito</button>
    </div>
    <div className="cajas">
    <img className="producto" id="´prod6" src={prod6} width="100%" alt="img1"></img>
      <p className="descripcion">Salamandra Tromen Austral 9000k</p>
       <form>
       <input type="number" id="cantidad" min="0" ></input>
        </form>           
        <button type="submit" id="agregar">Agregar al carrito</button>
    </div>


    </section>
   
    
  );
};

export default Productos;
