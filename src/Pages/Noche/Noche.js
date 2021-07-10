import React from "react";
import Fondo from "../../images/fondoNoche.jpg";

function Noche(){
    return(
        <div className="container-fluid fondo"
        style={{ backgroundImage: `url(${Fondo})` }}>


        </div>
    );
}

export default Noche