import React from "react";
import Fondo from "../../images/fondoFeminine.jpg";
import Logo from "../../images/logo.png";
import Delineador from "../../images/delineador.png";
import Pestañina from "../../images/pestañina.png";
import Sombras from "../../images/sombras.png";
import Preparar from "../../images/preparar.png";
import Productos from "../../images/productos.png";
import Noche from "../../images/noche.png";
import Dia from "../../images/dia.png";
import Trucos from "../../images/trucos.png";
import "../Feminine/feminine.css";


function Feminine() {
    return (
        <div className="container-fluid fondo"
            style={{ backgroundImage: `url(${Fondo})` }}>
            <header
                className="header">

                <footer> <img className="logoF"
                    class="rounded mx-auto d-block logoF"
                    src={Logo} alt="x" />

                     
                  
                    <a href="SobreMi"> <button className="sobremi"><h2 className="sobremi">Sobre mí</h2></button></a>
                    <a href="Comments"><button className="comentariosF"><h2 className="comentariosF">Sala comentarios</h2></button></a>   </footer>

            </header>

            <a href="Delineados">
                <button id="delineados"><strong><h3>Delineados</h3></strong>
                    <img className="delineador"
                        class="rounded mx-auto d-block delineador"
                        src={Delineador} alt="x" /></button>
            </a>

            <a href="Pestañina">
            <button id="pestañina"><strong><h3>Pestañina</h3></strong>
                <img className="pestañina"
                    class="rounded mx-auto d-block pestañina"
                    src={Pestañina} alt="x" />
            </button>

            </a>

            <a href="Sombras">
            <button id="sombras"><strong><h3>Sombras</h3></strong>
                <img className="sombras"
                    class="rounded mx-auto d-block sombras"
                    src={Sombras} alt="x" />
            </button>

            </a>
            
           

            <a href="Preparar"> 
            <button id="preparar"><strong><h3>Preparar nuestro rostro para el maquillaje</h3></strong>
                <img className="preparar"
                    class="rounded mx-auto d-block preparar"
                    src={Preparar} alt="x" />
            </button>
            </a>

            <a href="Noche">
            <button id="noche"><strong><h3>Sombras para la noche</h3></strong>
                <img className="noche"
                    class="rounded mx-auto d-block noche"
                    src={Noche} alt="x" />
            </button>

            </a>

            <a href="Productos">
            <button id="productos"><strong><h3>Productos para un maquillaje básico</h3></strong>
                <img className="productos"
                    class="rounded mx-auto d-block productos"
                    src={Productos} alt="x" />
            </button>

            </a>



            <a href="Dia">
            <button id="dia"><strong><h3>Sombras para el día</h3></strong>
                <img className="dia"
                    class="rounded mx-auto d-block dia"
                    src={Dia} alt="x" />
            </button>

            </a>

            <a href="Trucos">
            <button id="trucos"><strong><h3>Trucos de maquillaje</h3></strong>
                <img className="trucos"
                    class="rounded mx-auto d-block trucos"
                    src={Trucos} alt="x" />
            </button>

            </a>

        </div>
    );
}

export default Feminine