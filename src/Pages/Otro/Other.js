import React from "react";
import Fondo from "../../images/fondoOtro.jpg";
import "../Otro/other.css";
import Logo from "../../images/logo.png";
import Mascarillas from "../../images/mascarillas.png";
import Limpieza from "../../images/limpieza.png";
import Sombras from "../../images/sombras.png";

function Other() {
    return (
        <div className="container-fluid fondoO"
            style={{ backgroundImage: `url(${Fondo})` }}>

            <header
                className="headerO">
                <footer> <img className="logoO"
                    class="rounded mx-auto d-block logoO"
                    src={Logo} alt="x" />

                    <a> <button className="sobremiO"><h2 className="sobremiO">Sobre mí</h2></button></a>
                    <a><button className="comentariosO"><h2 className="comentariosO">Sala comentarios</h2></button></a>
                </footer>

            </header>

            <a>
                <button id="mascarillas"><strong><h3>Mascarillas</h3></strong>
                    <img className="mascarillasO"
                        class="rounded mx-auto d-block mascarillasO"
                        src={Mascarillas} alt="x" /></button>
            </a>

            <a>
                <button id="limpiezaO"><strong><h3>Limpieza</h3></strong>
                    <img className="limpiezaO"
                        class="rounded mx-auto d-block limpiezaO"
                        src={Limpieza} alt="x" /></button>
            </a>

            <a>
            <button id="sombraO"><strong><h3>Sombras</h3></strong>
                <img className="sombrasO"
                    class="rounded mx-auto d-block sombrasO"
                    src={Sombras} alt="x" />
            </button>

            </a>

        </div>
    );
}

export default Other