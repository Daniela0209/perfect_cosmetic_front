import React from "react";
import Fondo from "../../images/fondoPestañina.jpg";
import "../Pestañina/pestañina.css";
import Logo from "../../images/logo.png";
import PestañinaP from "../../images/pestañina.png";
import Plano from "../../images/cepilloPlano.jfif";
import Rigido from "../../images/CepilloRigido.jfif";
import Recto from "../../images/cepilloRecto.jfif";
import Conico from "../../images/cepilloConico.jfif";
import Helicoidal from "../../images/cepilloHelicoidal.jfif";
import Curvo from "../../images/cepilloCurvo.jfif";
import Tupido from "../../images/cepilloTupido.jfif";
import Cerdas from "../../images/CepilloCerdas.jfif";
import FlechaAtras from "../../images/flechaAtras.png";

function Pestañina() {
    return (
        <div className="container-fluid fondoP"
            style={{ backgroundImage: `url(${Fondo})` }}>

            <header
                className="headerP">
                <img className="logoP"
                    class="rounded mx-auto d-block logoP"
                    src={Logo} alt="x" />

                <button className="pestañinaBtn">
                    <img className="pestañinaIcon"
                        class="rounded mx-auto d-block pestañinaIcon"
                        src={PestañinaP} alt="x" /></button>
                <h2 className="tituloP">Pestañina</h2>
            </header>

            <a href="feminine">
            <button className="btnAtras">
            <img className="imgFlechaAtras" 
             class="rounded mx-auto d-block imgFlechaAtras"
             src={FlechaAtras}
            
            />
            </button>
            </a>
           

            <h2 className="tituloPlano">Cepillo plano y fino</h2>
            <img className="plano"
                class="rounded mx-auto d-block plano"
                src={Plano} alt="x" />
            <p className="contenidoPlano">Es un cabezal pensado para ofrecer una gran precisión sin apelmazar las pestañas. Por eso, es ideal para mujeres con pestañas bien visibles (con buen grosor y color) que solo necesitan un poco de definición</p>


            <h2 className="tituloRigido">Cepillo delgado y rígido</h2>
            <img className="rigido"
                class="rounded mx-auto d-block rigido"
                src={Rigido} alt="x" />
            <p className="contenidoRigido">Están pensados para proporcionar longitud y definición sin aportar grosor ni dejar grumos. Son apropiadas para pestañas naturalmente rizadas y con cierto grosor.</p>

            <h2 className="tituloRecto">Cepillo recto clásico</h2>
            <img className="recto"
                class="rounded mx-auto d-block recto"
                src={Recto} alt="x" />
            <p className="contenidoRecto">Las máscaras que cuentan con este tipo de cabezales, con forma recta, cerdas no muy largas e igualadas están pensadas para pestañas que no tienen necesidad de alargar o curvar, sino solamente de marcar y engrosar.

            </p>

            <h2 className="tituloConico">Cepillo cónico</h2>
            <img className="conico"
                class="rounded mx-auto d-block conico"
                src={Conico} alt="x" />
            <p className="contenidoConico">
            La forma de este tipo de cabezales está diseñada para abrir las pestañas, haciendo énfasis en la mitad externa. La parte más fina permite teñir y abrir las pestañas más cortas, de la parte interna del ojo; mientras que la más gruesa se adapta a la parte externa. 

            </p>

            <h2 className="tituloHelicoidal">Cepillo helicoidal</h2>
            <img className="helicoidal"
                class="rounded mx-auto d-block helicoidal"
                src={Helicoidal} alt="x" />
            <p className="contenidoHelicoidal">
            Es una forma de cabezal muy llamativa, pensada para aquellas con pestañas cortas y finas. Y es que este tipo de cepillos con silueta sinuosa permiten alargar visualmente las pestañas a la vez que engrosarlas depositando más cantidad de producto en cada pasada que los cepillos tradicionales

            </p>

            <h2 className="tituloCurvo">Cepillo curvo</h2>
            <img className="curvo"
                class="rounded mx-auto d-block curvo"
                src={Curvo} alt="x" /><p className="contenidoCurvo">Hay mujeres que cuentan con unas pestañas largas y bien definidas, pero con una forma totalmente recta. Para ellas están pensados este tipo de cabezales curvados que permite rizar las pestañas hasta abrir la mirada. las máscaras que cuentan con este tipo de cabezales, con forma recta, cerdas no muy largas e igualadas están pensadas para pestañas que no tienen necesidad de alargar o curvar, sino solamente de marcar y engrosar.

            </p>

            <h2 className="tituloTupido">Cepillo grueso y tupido</h2>
            <img className="tupido"
                class="rounded mx-auto d-block tupido"
                src={Tupido} alt="x" /><p className="contenidoTupido">Es un tipo de cepillo pensado para dotar de un mayor volumen y definición a las pestañas. Es ideal para pestañas medias y largas pero finas o con un tono claro que las hace pasar desapercibidas. 

            </p>

            <h2 className="tituloCerdas">Cepillo grueso con cerdas alternas</h2>
            <img className="cerdas"
                class="rounded mx-auto d-block cerdas"
                src={Cerdas} alt="x" /><p className="contenidoCerdas"> Este tipo de cepillos buscan dar volumen con un extra de grosor, al contar con cerdas de diferente longitud que depositan diferente cantidad de producto en cada sección. 

            </p>
        </div>
    );
}

export default Pestañina