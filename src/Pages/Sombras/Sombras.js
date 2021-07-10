import React from "react";
import Fondo from "../../images/fondoSombras.jpg";

function Sombras(){
    return(
        <div className="container-fluid fondo"
        style={{ backgroundImage: `url(${Fondo})` }}>


        </div>
    );
}

export default Sombras