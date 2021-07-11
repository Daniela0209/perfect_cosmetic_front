import React from "react";
import Fondo from "../../images/fondoComentF.jpg";
import Logo from "../../images/logo.png";
import { render } from 'react';
import ChatRoom from "./ChatRoom";

function Comments() {
    return (

        <div className="container-fluid fondo"
        style={{ backgroundImage: `url(${Fondo})` }}>
        <header
            className="header">
            <img className="logoF"
                class="rounded mx-auto d-block logoF"
                src={Logo} alt="x" />


        </header>
    </div>
    )
}



export default Comments 