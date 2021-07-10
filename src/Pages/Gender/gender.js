import React from "react";
import Fondo from "../../images/FondoGender.jpg";
import "../../Pages/Gender/gender.css";
import Beso from "../../images/beso.png";
import Mensaje from "../../images/mensaje.png";
import Estrella from "../../images/estrella.png";
import Corazon from "../../images/corazon.png";
import Labial from "../../images/labial.png";

function Gender(){
    return(
        <div  className="container-fluid fondo"
        style={{ backgroundImage: `url(${Fondo})` }}>
            
              <img className="beso"   
              class="rounded mx-auto d-block beso"
               src={Beso} alt="x"/>

                 <img className="mensaje"   
              class="rounded mx-auto d-block mensaje"
               src={Mensaje} alt="x"/>
          
            <h1 className="fraseGender">¡QUE BUENO TENERTE CON NOSOTROS!</h1>
                <h2 className="fraseElegir">Elige tu género</h2>

         <a href="Feminine"><button className="btnFemenino">Femenino</button></a>  
             <a href="Male"><button className="btnMasculino">Masculino</button></a>   
                <a href="Other"><button className="btnOtro">Otro</button></a>

            <img className="corazon1"   
              class="rounded mx-auto d-block corazon1"
               src={Corazon} alt="x"/>

            <img className="corazon2"   
                class="rounded mx-auto d-block corazon2"
               src={Corazon} alt="x"/>

            <img className="labial"   
                class="rounded mx-auto d-block labial"
               src={Labial} alt="x"/>

            <img className="estrella"   
              class="rounded mx-auto d-block estrella"
               src={Estrella} alt="x"/>
            
            </div>
    )
}

export default Gender