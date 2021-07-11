import React from "react";
import Fondo from "../../images/fondoPreparar.jpg";
import "../PrepararF/preparar.css";
import Logo from "../../images/logo.png";
import FlechaAtras from "../../images/flechaAtras.png";
import PrepararIcon from "../../images/preparar.png"
import LavarRostro from "../../images/lavarRostro.webp";
import Piel from "../../images/piel.webp";
import Hidratada from "../../images/hidratada.webp";
import Exfolia from "../../images/exfolia.webp";
import Tonico from "../../images/tonico.webp";
import Serum from "../../images/serum.webp";
import Protector from "../../images/protector.png";
import LimpiezaFacial from "../../images/limpiezaFacial.jpg";

function Preparar() {
    return (

        <div className="container-fluid fondoPr"
            style={{ backgroundImage: `url(${Fondo})` }}>
            <header
                className="headerD">

                <img className="logoD"
                    class="rounded mx-auto d-block logoD"
                    src={Logo} alt="x" />

                <button className="prepara">
                    <img className="prepara"
                        class="rounded mx-auto d-block prepara"
                        src={PrepararIcon} alt="x" /></button>


                <h2 className="tituloD">Preparar nuestro rostro para el maquillaje </h2>


            </header>

            <h2 className="tituloLavar">1. Lava tu rostro por la mañana</h2>

            <img className="lavarRostro"
                class="rounded mx-auto d-block lavarRostro"
                src={LavarRostro} alt="x" />
            <p className="contenidoLavar">No importan cuánta prisa tengas o que hayas tomado un baño por la mañana, lavar tu cara con el jabón adecuado es básico para que la piel de tu rostro luzca radiante. Es necesario lavar tu cara al menos dos veces para remover todas las bacterias que se acumulan por la noche.</p>

            <h2 className="tituloPiel">2. Conoce tu tipo de piel
            </h2>
            <img className="piel"
                class="rounded mx-auto d-block piel"
                src={Piel} alt="x" />
            <p className="contenidoPiel">La rutina de limpieza diaria debe ser de acuerdo a tu tipo de piel. Si por ejemplo tiendes más a la piel grasa, lavarte la cara con agua tibia o caliente sería lo ideal; pero si tu piel es más reseca, hacerlo con agua fría es lo más recomendable.</p>


            <h2 className="tituloHidratada">3. Mantén tu piel hidratada
            </h2>
            <img className="hidratada"
                class="rounded mx-auto d-block hidratada"
                src={Hidratada} alt="x" />

            <p className="contenidoHidratada">Hay diferentes formas de mantener tu piel con la humectación que necesita para lucir firme y radiante: lo primero es beber los suficientes líquidos para que tu cuerpo esté hidratado para mantener la elasticidad que tu piel necesita.</p>

            <h2 className="tituloExfolia">4. Exfolia tu piel para eliminar las células muertas</h2>
            <img className="exfolia"
                class="rounded mx-auto d-block exfolia"
                src={Exfolia} alt="x" />
            <p className="contenidoExfolia">Lo importante es que lo que sea que uses no irrite tu piel, este paso es esencial para eliminar las células muertas y mejorar la circulación de la sangre.
                Antes de proceder a la exfoliación es de suma importancia que humedezcas tu piel con agua tibia. Una exfoliación en seco hará irritar tu piel y enrojecerla y exfoliarse demasiadas veces a la semana también podría causar daños a tu piel.</p>

            <h2 className="tituloLimpiar">5. Limpia una vez más
            </h2>
            <img className="limpiar"
                class="rounded mx-auto d-block limpiar"
                src={LavarRostro} alt="x" />
                <p className="contenidoLimpiar">Para retirar los restos del exfoliante es necesario limpiar el rostro nuevamente y masajear en forma circular toda la cara con agua para lograr mejores resultados al estimular tu rostro.</p>

            <h2 className="tituloTonico">6. No olvides usar un tónico</h2>
            <img className="tonico"
                class="rounded mx-auto d-block tonico"
                src={Tonico} alt="x" />
                <p className="contenidoTonico">Los tónicos normaliza el pH de la piel después de la limpieza facial, refrescan la piel, regulan la cantidad de grasa sin resecar, especialmente en pieles mixtas y grasas, aportan las propiedades de los ingredientes según el tipo de piel y dan un aspecto de firmeza y luminosidad.</p>


            <h2 className="tituloSerum">7. Sérum</h2>
            <img className="serum"
                class="rounded mx-auto d-block serum"
                src={Serum} alt="x" />
                <p className="contenidoSerum">¿Qué es un sérum? Se trata de un concentrado cosmético con activos más potentes que los de una crema hidratante. Su textura suele ser más ligera para que la absorción sea muy rápida. Además, la penetración de los ingredientes llega a las capas más profundas de la piel. Su aplicación es posterior a la limpieza de la piel. Siempre antes de la crema hidratante. Y en pequeñas cantidades.</p>

            <h2 className="tituloProtector">8. Usa protector solar</h2>
            <img className="protector"
                class="rounded mx-auto d-block protector"
                src={Protector} alt="x" />
                <p className="contenidoProtector">Otro paso que muchas veces olvidamos es la importancia de usar un protector solar todo el año. Si bien en verano el sol es más fuerte, los rayos UV están presentes siempre y además de ser muy peligrosos para toda tu piel, pueden dañar el cutis y provocar la aparición de arrugas. La cantidad de opciones de filtros es enorme, pero asegúrate de que su protección sea al menos de 15 o 50 SPF.</p>

            <h2 className="tituloFacial">9. Cuida tu rostro</h2>
            <img className="facial"
                class="rounded mx-auto d-block facial"
                src={LimpiezaFacial} alt="x" />
                <p className="contenidoFacial">Lucir una piel radiante no tiene por qué ser tan complicado después de todo. Con estos sencillos pasos tu piel estará sana, limpia y eso se notará.</p>


            <a href="Feminine">  <button className="flechaAtras">
                <img className="flechaAtrasI"
                    class="rounded mx-auto d-block flechaAtrasI"
                    src={FlechaAtras} alt="x" />
            </button>
            </a>

        </div>
    );
}
export default Preparar