import React from "react";
import styleempresa from "../styles/components/pages/Empresa.css";
import empresa1 from "../assets/images/empresa/empresa.webp";
import empresa2 from "../assets/images/empresa/empresa2.jpg";
import empresa3 from "../assets/images/empresa/empresa3.jpg";

const Empresa = (props) => {
    return (
        <div className="nosotros">
            <h2>Nosotros</h2>
            <p className="parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita quas iure nesciunt quos commodi nihil, nisi voluptates veritatis voluptatem.
                Sed maxime, quo temporibus ab atque quae nostrum ex cum laborum!</p>
            <img className="imgemp" src={empresa1} alt="empresa1" />
            <img className="imgemp" src={empresa2} alt="empresa2" />
            <img className="imgemp" src={empresa3} alt="empresa3" />
            <p className="parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita quas iure nesciunt quos commodi nihil, nisi voluptates veritatis voluptatem.
                Sed maxime, quo temporibus ab atque quae nostrum ex cum laborum!</p>

        </div>


    )
}

export default Empresa;