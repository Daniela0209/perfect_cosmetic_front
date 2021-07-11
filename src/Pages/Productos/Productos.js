import React from "react";
import Fondo from "../../images/fondoProductos.jpg";
import "../Productos/productos.css";
import Logo from "../../images/logo.png";
import FlechaAtras from "../../images/flechaAtras.png";
import ProductosIcon from "../../images/productos.png"
import PolvoCompacto from "../../images/polvoCompacto.jpg";
import CorrectorOjeras from "../../images/correctorOjeras.jpg";
import MascaraPestaña from "../../images/Pestañina.jpg";
import Cejas from "../../images/cejas.jpeg";
import Brochas from "../../images/brochas.jpeg";
import Blush from "../../images/blush.jpeg";
import Base from "../../images/base.jpeg";
import PaletaSombras from "../../images/paletaSombras.jpeg";
import PinturaLabial from "../../images/labial.jpeg";


function Productos() {
    return (

        <div className="container-fluid fondoPro"
            style={{ backgroundImage: `url(${Fondo})` }}>
            <header
                className="headerD">

                <img className="logoD"
                    class="rounded mx-auto d-block logoD"
                    src={Logo} alt="x" />

                <button className="prepara">
                    <img className="prepara"
                        class="rounded mx-auto d-block prepara"
                        src={ProductosIcon} alt="x" /></button>


                <h2 className="tituloD">Productos para un maquillaje sencillo </h2>


            </header>

            <h2 className="tituloCompacto">Polvo compacto o suelto</h2>

            <img className="polvoCompacto"
                class="rounded mx-auto d-block polvoCompacto"
                src={PolvoCompacto} alt="x" />
            <p className="contenidoCompacto">Sellan el maquillaje, gracias a su textura ligera, similar a la harina o el talco. Los hay traslúcidos (no alteran el color) o con color, para cambiar ligeramente el tono. Es muy importante controlar la cantidad de producto que se usa, para que el resultado sea el deseado.</p>

            <h2 className="tituloOjeras">Corrector de ojeras
            </h2>
            <img className="correctorOjeras"
                class="rounded mx-auto d-block correctorOjeras"
                src={CorrectorOjeras} alt="x" />
            <p className="contenidoOjeras">El corrector de ojeras es de esos productos de maquillaje que nos encantan, porque nos ayudan a borrar imperfecciones en cuestión de segundos </p>


            <h2 className="tituloPestañina">Mascara de pestañas
            </h2>
            <img className="pestañina"
                class="rounded mx-auto d-block pestañina"
                src={MascaraPestaña} alt="x" />

            <p className="contenidoPestañina"> máscara de pestañas o rímel (término derivado de la marca registrada Rimmel) es un cosmético usado para oscurecer, espesar, curvar y definir las pestañas. Los colores, tintas y fórmulas usados en la elaboración de la máscara de pestañas son diversos.</p>

            <h2 className="tituloCejas">Sombra y pincel para cejas.</h2>
            <img className="cejas"
                class="rounded mx-auto d-block cejas"
                src={Cejas} alt="x" />
            <p className="contenidoCejas">Siempre busca un tono marrón, sin importar que tus vellos sean negros; esto las hará lucir más naturales. También debes tener un pincel para realizar este trabajo, los perfectos para esto son los pinceles angulares.
                Para esto, cualquier sombra marrón parecida al color de tus cejas te servirá y cualquier pincel angular, realizará bien el objetivo.</p>

            <h2 className="tituloBrochas">Kit de brochas
            </h2>
            <img className="brochas"
                class="rounded mx-auto d-block brochas"
                src={Brochas} alt="x" />
            <p className="contenidoBrochas">De ti depende adquirir un kit con la cantidad de brochas que desees. Siempre y cuando, estas sean de hebras naturales, para así lograr un mejor acabado y mejor uso de tus productos.
                Dentro de las mejores marcas de pinceles puedes obtener las Sigma, Mac, Morphe Brushes o Sonia Kashuk que son un poco más accesibles.
            </p>

            <h2 className="tituloBlush">Blush o Bronzer</h2>
            <img className="blush"
                class="rounded mx-auto d-block blush"
                src={Blush} alt="x" />
            <p className="contenidoBlush">Tanto el blush como el bronzer deben ser aplicados con pinceles específicos. El primero se aplica con una brocha tupida, es decir, redonda. Y el segundo, se utiliza con una brocha plana, generalmente en forma de abanico.</p>


            <h2 className="tituloBase">Base líquida o en crema</h2>
            <img className="base"
                class="rounded mx-auto d-block base"
                src={Base} alt="x" />
            <p className="contenidoBase">Esta se debe aplicar con una brocha gruesa, realizando movimientos circulares o con una brocha delgada y plana con movimientos horizontales, por todo el rostro para lograr una mejor cobertura.
                Para una base de gran cobertura para maquillajes más estructurados, opta por una base NARS, Mac o Maybelline. Y para un maquillaje más fresco y diario, la más recomendada es la BB Cream de Maybelline, que aparte de ser un cobertor de imperfecciones, actúa como protector solar.</p>

            <h2 className="tituloPaleta">Paleta de sombras</h2>
            <img className="paleta"
                class="rounded mx-auto d-block paleta"
                src={PaletaSombras} alt="x" />
            <p className="contenidoPaleta">Una paleta de sombras es mucho más útil, aunque un poco más costosa que una sombra individual, ya que estas traen diversos colores permitiendo así la combinación entre los mismos. Actualmente el mundo del maquillaje está siendo dominado por sombras en tonos tierra, dorados, marrones y negros.</p>

            <h2 className="tituloLabial">Lápiz y pintura Labial</h2>
            <img className="labialImg"
                class="rounded mx-auto d-block labialImg"
                src={PinturaLabial} alt="x" />
            <p className="contenidoLabial">El lápiz, utilizado para delinear los labios y hacerlos lucir más grandes. Y el labial, para darle color y resaltar los mismos. Actualmente los más pedidos son los tonos nude, es decir, tonos piel. Estos se pueden encontrar en tonos color carne, durazno, rosa vieja y en diversas texturas tales como mate, y brillante.</p>


            <a href="Feminine">  <button className="flechaAtrasProducto">
                <img className="flechaAtrasProduct"
                    class="rounded mx-auto d-block flechaAtrasProduct"
                    src={FlechaAtras} alt="x" />
            </button>
            </a>

        </div>
    );
}
export default Productos