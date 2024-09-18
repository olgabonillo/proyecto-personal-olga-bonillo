import balasana from "../images/balasana.png";
import ustrasana from "../images/ustrasana.png";
import adhoMukha from "../images/adho-mukha.jpg";
import savasana from "../images/savasana.jpg";
import gatoVaca from "../images/cat-cow-pose.jpg";
import anantasana from "../images/anantasana.webp";


function Hero() {
  return (
    <>
      <div className="div">
        <h1 className="titles">¿Qué es el kundalini yoga?</h1>
        <p className="text">
          El Kundalini Yoga es mucho más que una serie de posturas; es un
          despertar de la energía dormida en la base de tu columna vertebral,
          conocido como Kundalini. Esta energía, cuando se activa, se eleva a
          través de los chakras, abriendo caminos de bienestar, claridad mental
          y conciencia plena. De acuerdo a la doctrina Kundalini yoga, la
          serpiente Kundalini nace en la boca del nadi (‘río’) Sushumna y reside
          en el chakra fundamental (muladhara o soporte de la raíz) situado en
          la base de la columna vertebral. La finalidad del kundalini yoga es
          excitar o despertar la circulación del prana, y elevarla de manera
          gradual hacia el sahasrara chakra a través del nadi Sushumna,
          despertando el gran potencial creativo latente en cada persona desde
          la conciencia para alcanzar la felicidad auténtica; siendo su
          auténtica práctica una herramienta para alcanzar la iluminación.
        </p>
      </div>
      <div className="div">
        <h1 className="titles">Beneficios de practicar kundalini yoga</h1>
        <p className="text">
          El Kundalini yoga ayuda a reducir la ansiedad al promover la
          relajación y la calma mental a través de técnicas de respiración y
          meditación. Aumenta la autoestima. Esta práctica fomenta la confianza
          en uno mismo al fortalecer la conexión con el propio ser y promover
          sentimientos de autoaceptación y empoderamiento. Además, Ayuda a
          reducir el estrés y la ansiedad. Mejora la concentración. Fortalece
          los abdominales y el sistema inmunitario. Flexibiliza la columna.
          Revitaliza mente y cuerpo. Aumenta el autocontrol de tus emociones. Te
          ayuda a ver las cosas positivamente.
        </p>
      </div>

      <div className="div">
        <h1 className="titles">Características de practicar kundalini yoga</h1>
        <p className="text">
          La práctica se basa en Kriyas, la palabra Kriya significa acción
          (aunque también son técnicas de limpieza del cuerpo). Se trata de una
          secuencia de posturas de yoga y ejercicios dinámicos, en las que se
          realizan movimientos repetitivos acompañados de sonidos, mantras y
          respiraciones específicas para diferentes objetivos. Es un estilo de
          yoga cercano para todo tipo de personas y adaptable al físico de cada
          cual, ya que los tiempos de las kriyas se pueden reducir. Se
          recomienda usar ropa de fibra natural, cómoda, flexible y
          preferiblemente de color blanco, como en diversos estilos de yoga
          tradicionales. Los practicantes más ortodoxos suelen cubrirse la
          cabeza con un turbante. Se suele comenzar la práctica entonando el Adi
          Mantra: Ong Namo Guru Dev Namo. Las kriyas se suelen cerrar cantando
          el mantra “SAT NAM”. “Sat” significa verdad y “Nam” identidad.
          Literalmente se traduce como “mi identidad es la verdad” o “yo soy mi
          verdadera identidad”. Se trata de un mantra afirmativo que empodera y
          que te puedes repetir interiormente bajo esta traducción simplificada:
          “YO SOY YO”. El mantra es como una fórmula mágica positiva para atraer
          lo que quieres hacia ti. Kundalini Yoga es el yoga de la conciencia.
          Escucha a tu cuerpo, tu mente y tu energía; haz lo que funciona para
          ti siempre respetando tus límites.
        </p>
      </div>
      <div className="div-father">
        <h1 className="titles">
          Descubre las mejores posturas del kundalini yoga
        </h1>
        <div className="div-postures">
          <img
            className="img-gallery"
            src={adhoMukha}
            alt="postura adho mukha"
          ></img>
          <h3 className="postures">Adho Mukha Svanasana</h3>
          <p className="text">
            <ul className="list-postures">
              <li>
                Fortalece la musculatura de la espalda, los brazos y las
                piernas.
              </li>
              <li>Mejora los dolores de cuello y hombros.</li>
              <li>Estira isquiotibiales y gemelos.</li>
              <li>
                Ayuda a mejorar la circulación sanguínea y mejora la digestión.
              </li>
              <li>Alivia la tensión y el estrés.</li>
            </ul>
          </p>
        </div>
        <div className="div-postures">
          <img
            className="img-gallery"
            src={savasana}
            alt="postura savasana"
          ></img>
          <h3 className="postures">Savasana</h3>
          <p className="text">
            <ul className="list-postures">
              <li>Activa el sistema nervioso parasimpático.</li>
              <li>Ayuda a calmar el cuerpo y la mente.</li>
              <li>Promueve la relajación.</li>
              <li>
                Reduce los niveles de hormonas del estrés y alivia la ansiedad.
              </li>
            </ul>
          </p>
        </div>
        <div className="div-postures">
          <img
            className="img-gallery"
            src={gatoVaca}
            alt="postura gato vaca"
          ></img>
          <h3 className="postures">Bitilasana Marjaryasana</h3>
          <p className="text">
            <ul className="list-postures">
              <li>Fortalece los músculos de las manos y muñecas.</li>
              <li>Induce al estado meditativo.</li>
              <li>
                El movimiento de esta pose estira los músculos de la cadera.
              </li>
              <li>
                Se activa el coxis y se libera la tensión del cuello y la parte
                superior de la espalda.
              </li>
            </ul>
          </p>
        </div>
        <div className="div-postures">
          <img
            className="img-gallery"
            src={balasana}
            alt="postura balasana"
          ></img>
          <h3 className="postures">Balasana</h3>
          <p className="text">
            <ul className="list-postures">
              <li>
                Ayuda a estirar la espalda y los músculos alrededor de las
                caderas.
              </li>
              <li>
                Es una de las posturas de yoga más relajantes y
                reconstituyentes.
              </li>
              <li>Es una pose de reposo practicada en posición fetal.</li>
              <li>Su principal enfoque es trabajar la parte de los muslos.</li>
            </ul>
          </p>
        </div>
        <div className="div-postures">
          <img
            className="img-gallery"
            src={ustrasana}
            alt="postura ustrasana"
          ></img>
          <h3 className="postures">Ustrasana</h3>
          <p className="text">
            <ul className="list-postures">
              <li>
                Fortalece los músculos de la espalda, el abdomen, los muslos,
                las ingles y la cadera.
              </li>
              <li>Masajea los órganos internos y el cuello.</li>
              <li>Sirve para flexibilizar la espalda.</li>
              <li>Ayuda a corregir una mala postura de la columna.</li>
            </ul>
          </p>
        </div>
        <div className="div-postures">
          <img
            className="img-gallery"
            src={anantasana}
            alt="postura anantasana"
          ></img>
          <h3 className="postures">Anantasana</h3>
          <p className="text">
            <ul className="list-postures">
              <li>Estira los músculos de la pierna y la cadera.</li>
              <li>Fortalece la parte del muslo.</li>
              <li>Sirve para alargar y flexibilizar el músculo.</li>
              <li>
                Ejercita las caderas, los isquiotibiales, los músculos del suelo
                pélvico, los músculos de la ingle, el glúteo mayor, el psoas, el
                bíceps y el tríceps, y los músculos centrales.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
