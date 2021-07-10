import React from "react";
import Fondo from "../../images/fondoDia.jpg";

function Dia(){
    return(
        <div className="container-fluid fondo"
        style={{ backgroundImage: `url(${Fondo})` }}>


        </div>
    );
}

export default Dia