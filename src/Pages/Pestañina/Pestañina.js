import React from "react";
import Fondo from "../../images/fondoPestañina.jpg";

function Pestañina(){
    return(
        <div className="container-fluid fondo"
        style={{ backgroundImage: `url(${Fondo})` }}>


        </div>
    );
}

export default Pestañina