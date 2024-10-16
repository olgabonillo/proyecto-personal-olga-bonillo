import phototitle from "../images/logo-yoga-jessi.jpeg";

function Header() {
  return (
    <>
      <h1 className="title">
        <img 
        className="img" 
        src={phototitle} 
        alt="logo"></img>
      </h1>
      <div className="sticky">
      <h2 className="slogan">
        Cuida tu cuerpo, es el único lugar que tienes para vivir.
      </h2>
      <nav className="list-nav">
        <li><a href="#kundalini">¿Qué es el kundalini yoga?</a></li>
        <li>|</li>
        <li><a href="#benefits">Beneficios de practicar kundalini yoga</a></li>
        <li>|</li>
        <li><a href="#characteristics">Características del kundalini</a></li>
        <li>|</li>
        <li><a href="#postures">Descubre las mejores posturas del kundalini yoga</a></li>
        <li>|</li>
        <li><a href="#contact">Contacto</a></li>
      </nav>
      </div>
    </>
  );
}

export default Header;
