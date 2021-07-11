import React from "react";
import Fondo from "../../images/fondoSombras.jpg";
import "../Sombras/sombras.css";
import Logo from "../../images/logo.png";
import Sombra from "../../images/sombras.png";
import SombraAhumada from "../../images/sombraAhumada.jpg";
import SombraPrincipiante from "../../images/sombrasPrincipiantes.jpg";
import SombraCasual from "../../images/sombraCasual.jpg";
import SombraProfunda from "../../images/sombraProfunda.jpg";
import SombraSencilla from "../../images/sombraSencilla.jpg";
import SombraDifuminada from "../../images/sombraDifuminada.jpg";
import FlechaAtrasS from "../../images/flechaAtras.png";

function Delineados() {
    return (

        <div className="container-fluid fondoS"
            style={{ backgroundImage: `url(${Fondo})` }}>
            <header
                className="headerS">

                <img className="logoS"
                    class="rounded mx-auto d-block logoS"
                    src={Logo} alt="x" />

                <button className="sombra">
                    <img className="sombras"
                        class="rounded mx-auto d-block sombras"
                        src={Sombra} alt="x" /></button>


                <h2 className="tituloS">Sombras</h2>


            </header>

            <h2 className="tituloCafe">Sombra café</h2>

            <img className="cafe"
                class="rounded mx-auto d-block cafe"
                src={SombraAhumada} alt="x" />
            

            <h2 className="tituloPrincipiante">Sombra principiantes</h2>
            <img className="principiante"
                class="rounded mx-auto d-block principiante"
                src={SombraPrincipiante} alt="x" />
           

            <h2 className="tituloCasual">Sombra casual</h2>
            <img className="casual"
                class="rounded mx-auto d-block casual"
                src={SombraCasual} alt="x" />
            

            <h2 className="tituloProfunda">Sombra profunda</h2>
            <img className="profunda"
                class="rounded mx-auto d-block profunda"
                src={SombraProfunda} alt="x" />
           
            <h2 className="tituloSencilla">Sombra sencilla</h2>
            <img className="sencilla"
                class="rounded mx-auto d-block sencilla"
                src={SombraSencilla} alt="x" />
            
            <h2 className="tituloDifuminada">Sombra Difuminada</h2>
            <img className="difuminada"
                class="rounded mx-auto d-block difuminada"
                src={SombraDifuminada} alt="x" />
          
            
          <a href="Feminine">  <button className="flechaAtrasS">
            <img className="flechaAtrasSO"
                class="rounded mx-auto d-block flechaAtrasSO"
                src={FlechaAtrasS} alt="x" />
            </button>
            </a>
       
        </div>
    );
}
export default Delineados