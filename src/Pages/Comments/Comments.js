import React from "react";
import Fondo from "../../images/fondoComentF.jpg";
import Logo from "../../images/logo.png";

function Comments(){
    return(

        <div  className="container-fluid fondo"
        style={{ backgroundImage: `url(${Fondo})` }}>

        <header
            className="header">
               <footer>
               <img className="logoF"   
              class="rounded mx-auto d-block logoF"
               src={Logo} alt="x"/> 
                   </footer>  

            </header>
        </div>
    )
}



export default Comments