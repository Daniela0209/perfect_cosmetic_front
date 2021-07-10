import React from "react";
import Fondo from "../../images/fondoProductos.jpg";

function Productos(){
    return(
        <div className="container-fluid fondo"
        style={{ backgroundImage: `url(${Fondo})` }}>


        </div>
    );
}

export default Productos