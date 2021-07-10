import React from "react";
import Fondo from "../../images/fondoMale.jpg";
import "../Male/male.css";
import Logo from "../../images/logo.png";
import Puntos from "../../images/puntos.png";
import Limpieza from "../../images/limpieza.png";
import Mascarillas from "../../images/mascarillas.png";
import Piel from "../../images/piel.png";

function Male() {
    return (

        <div className="container-fluid fondo"
            style={{ backgroundImage: `url(${Fondo})` }}>
            <header
                className="headerM">
                <footer> <img className="logoM"
                    class="rounded mx-auto d-block logoF"
                    src={Logo} alt="x" />

                    <a> <button className="sobremiM"><h2 className="sobremiM">Sobre mí</h2></button></a>
                    <a><button className="comentariosM"><h2 className="comentariosM">Sala comentarios</h2></button></a>
                </footer>

            </header>

            {/*Creacion de puntos para el fondo */}
            <button className="punto1"> <img className="punto1"
                class="rounded mx-auto d-block punto1"
                src={Puntos} alt="x" /></button>
            <button className="punto2"><img className="punto2"
                class="rounded mx-auto d-block punto2"
                src={Puntos} alt="x" /></button>
            <button className="punto3"><img className="punto3"
                class="rounded mx-auto d-block punto3"
                src={Puntos} alt="x" /></button>
            <button className="punto4"><img className="punto4"
                class="rounded mx-auto d-block punto4"
                src={Puntos} alt="x" /></button>
            <button className="punto5"><img className="punto5"
                class="rounded mx-auto d-block punto5"
                src={Puntos} alt="x" /></button>
            <button className="punto6"><img className="punto6"
                class="rounded mx-auto d-block punto6"
                src={Puntos} alt="x" /></button>
            <button className="punto7"><img className="punto7"
                class="rounded mx-auto d-block punto7"
                src={Puntos} alt="x" /></button>


            <a>
                <button id="limpieza"><strong><h3>Limpieza</h3></strong>
                    <img className="limpiezaM"
                        class="rounded mx-auto d-block limpiezaM"
                        src={Limpieza} alt="x" /></button>
            </a>

            <a>
                <button id="mascarillas"><strong><h3>Mascarillas</h3></strong>
                    <img className="mascarillasM"
                        class="rounded mx-auto d-block mascarillasM"
                        src={Mascarillas} alt="x" /></button>
            </a>

            <a>
                <button id="piel"><strong><h3>Hidratación para la piel</h3></strong>
                    <img className="pielM"
                        class="rounded mx-auto d-block pielM"
                        src={Piel} alt="x" /></button>
            </a>
        </div>
    );
}
export default Male