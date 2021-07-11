import React from "react";
import Fondo from "../../images/fondoFeminine.jpg";
import Logo from "../../images/logo.png";
import Delineador from "../../images/delineador.png";
import Pestañina from "../../images/pestañina.png";
import Sombras from "../../images/sombras.png";
import Preparar from "../../images/preparar.png";
import Productos from "../../images/productos.png";
import "../Feminine/feminine.css";
import SignOut from "../Login/SignOut";
import Cerrar from "../../images/cerrar.png";


function Feminine() {
    return (
        <div className="container-fluid fondoF"
            style={{ backgroundImage: `url(${Fondo})` }}>
            <header
                className="header">

                
                 <img className="logoF"
                    class="rounded mx-auto d-block logoF"
                    src={Logo} alt="x" />

             <a href="Comments"><button className="comentariosF"><h2 className="comentariosF">Sala comentarios</h2></button></a> 

                   <button className="cerrarSesion"  onClick={SignOut}>
                   <img className="cerrar"
                    class="rounded mx-auto d-block cerrar"
                    src={Cerrar} alt="x" />
                   </button>
            </header>

            <a href="Delineados">
                <button id="delineados"><strong><h3>Delineados</h3></strong>
                    <img className="delineador"
                        class="rounded mx-auto d-block delineador"
                        src={Delineador} alt="x" /></button>
            </a>

            <a href="Pestañina">
            <button id="pestañina"><strong><h3>Pestañina</h3></strong>
                <img className="pestañinaF"
                    class="rounded mx-auto d-block pestañinaF"
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

            <a href="Productos">
            <button id="productos"><strong><h3>Productos para un maquillaje básico</h3></strong>
                <img className="productos"
                    class="rounded mx-auto d-block productos"
                    src={Productos} alt="x" />
            </button>

            </a>




           

        </div>
    );
}

export default Feminine