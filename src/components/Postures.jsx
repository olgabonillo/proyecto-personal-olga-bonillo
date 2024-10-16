import balasana from "../images/balasana.png";
import ustrasana from "../images/ustrasana.png";
import adhoMukha from "../images/adho-mukha.jpg";
import savasana from "../images/savasana.jpg";
import gatoVaca from "../images/cat-cow-pose.jpg";
import anantasana from "../images/anantasana.webp";

function Postures() {
  return (
    <div className="div-father" id="postures">
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
              Fortalece la musculatura de la espalda, los brazos y las piernas.
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
              Es una de las posturas de yoga más relajantes y reconstituyentes.
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
              Fortalece los músculos de la espalda, el abdomen, los muslos, las
              ingles y la cadera.
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
  );
}

export default Postures;
