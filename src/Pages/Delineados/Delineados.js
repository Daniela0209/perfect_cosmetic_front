import React from "react";
import Fondo from "../../images/fondoDelineados.jpg";
import "../Delineados/delineados.css";
import Logo from "../../images/logo.png";
import Delineador from "../../images/delineador.png";
import Simple from "../../images/delineadoSimple.jpg";
import Doble from "../../images/delineadoDoble.jpg";
import Gato from "../../images/delineadoGato.jpg";
import Pinup from "../../images/delineadoPinup.png";
import Galactico from "../../images/delineadoGalactico.webp";
import Smoky from "../../images/delineadoSmoky.png";
import Griego from "../../images/delineadoGriego.png";
import Egipcio from "../../images/delineadoEgipcio.png";
import Hebreo from "../../images/delineadoHebreo.jpg";
import FlechaAtras from "../../images/flechaAtras.png";

function Delineados() {
    return (

        <div className="container-fluid fondoD"
            style={{ backgroundImage: `url(${Fondo})` }}>
            <header
                className="headerD">

                <img className="logoD"
                    class="rounded mx-auto d-block logoD"
                    src={Logo} alt="x" />

                <button className="delineado">
                    <img className="delineador"
                        class="rounded mx-auto d-block delineador"
                        src={Delineador} alt="x" /></button>


                <h2 className="tituloD">Delineados</h2>


            </header>

            <h2 className="tituloSimple">Delineado Simple</h2>

            <img className="simple"
                class="rounded mx-auto d-block simple"
                src={Simple} alt="x" />
            <p className="ContenidoSimple">Consiste, básicamente, en marcar la línea del borde superior
                del párpado de extremo a extremo con el delineador o eyeliner.
                Los colores más adecuados para realizar este tipo de delineado son el negro y los tonos café, ya que permiten destacar la línea, a la par que resultan discretos.</p>

            <h2 className="tituloDoble">Delineado Doble</h2>
            <img className="doble"
                class="rounded mx-auto d-block doble"
                src={Doble} alt="x" />
            <p className="ContenidoDoble">
                Se llama delineado doble y, como su nombre lo dice, incluye dos líneas.
                A diferencia del delineado flotante que, además de la línea tradicional incluye una
                en el pliegue del ojo, en el delineado doble, los trazos van uno sobre el otro.
            </p>

            <h2 className="tituloGato">Delineado Gato</h2>
            <img className="gato"
                class="rounded mx-auto d-block gato"
                src={Gato} alt="x" />
            <p className="contenidoGato">
                Para poder realizarlo lo que se debe hacer es comenzar con una raya fina desde la zona del lagrimal, e ir aumentando su grosor cuando lleguemos más a o menos a la mitad del ojo, para acabar en un rabillo orientado hacia arriba en la zona exterior. Esta orientación del rabillo final otorga un aspecto felino o de ojos rasgados a nuestra mirada.</p>

            <h2 className="tituloPinup">Delineado Pin Up</h2>
            <img className="pinUp"
                class="rounded mx-auto d-block pinUp"
                src={Pinup} alt="x" />
            <p className="contenidoPinup">Un tipo de delineado que se “ha vuelto a poner de moda”, ya que fue la tendencia predominante en los años 20 del siglo pasado.
                Se trata de un estilo muy similar al Cat Eye, marcando la línea superior más gruesamente y acabando en forma de punta orientada hacia arriba.</p>

            <h2 className="tituloGalactico">Delineado Galáctico</h2>
            <img className="galactico"
                class="rounded mx-auto d-block galactico"
                src={Galactico} alt="x" />
            <p className="contenidoGalactico">Un tipo de delineado que se “ha vuelto a poner de moda”, ya que fue la tendencia predominante en los años 20 del siglo pasado.
                Se trata de un estilo muy similar al Cat Eye, marcando la línea superior más gruesamente y acabando en forma de punta orientada hacia arriba.</p>

            <h2 className="tituloSmoky">Delineado Smoky</h2>
            <img className="smoky"
                class="rounded mx-auto d-block smoky"
                src={Smoky} alt="x" />
            <p className="contenidoSmoky">Un tipo de delineado que se “ha vuelto a poner de moda”, ya que fue la tendencia predominante en los años 20 del siglo pasado.
                Se trata de un estilo muy similar al Cat Eye, marcando la línea superior más gruesamente y acabando en forma de punta orientada hacia arriba.</p>


            <h2 className="tituloGriego">Delineado Griego</h2>
            <img className="griego"
                class="rounded mx-auto d-block griego"
                src={Griego} alt="x" />
            <p className="contenidoGriego">Para realizar el delineado griego deberemos marcar completamente la línea superior del párpado, desde la zona del lagrimal hasta el exterior.
                En el párpado inferior se deberá marcar la raya, pero únicamente en los dos tercios exteriores, es decir, no marcaremos el tercio más próximo al lagrimal.
                Cuando lleguemos al borde exterior, uniremos ambas líneas, pudiendo alargar esta línea.</p>

            <h2 className="tituloEgipcio">Delineado Egipcio</h2>
            <img className="egipcio"
                class="rounded mx-auto d-block egipcio"
                src={Egipcio} alt="x" />
            <p className="contenidoEgipcio"> Para realizar el delineado egipcio deberemos marcar ambos bordes de los párpados con una línea algo gruesa, y unirlas, tanto en el extremo exterior como en el lagrimal con un ala alargada.
                Esta ala, en el extremo exterior deberá llegar hasta casi la misma altura y la distancia en la cual termina nuestra ceja.</p>


            <h2 className="tituloHebreo">Delineado Hebreo</h2>
            <img className="hebreo"
                class="rounded mx-auto d-block hebreo"
                src={Hebreo} alt="x" />
            <p className="contenidoHebreo"> Consiste en realizar una línea sobre el borde del párpado superior, de forma que vaya creciendo en grosor hasta alcanzar la zona exterior del mismo.
                En este extremo la línea, que ya será muy gruesa, terminará en forma de bisel.

            </p>
       
          <a href="Feminine">  <button className="flechaAtras">
            <img className="flechaAtrasI"
                class="rounded mx-auto d-block flechaAtrasI"
                src={FlechaAtras} alt="x" />
            </button>
            </a>
       
        </div>
    );
}
export default Delineados