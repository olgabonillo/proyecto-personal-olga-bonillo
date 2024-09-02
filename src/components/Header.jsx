function Header() {
  return (
    <>
      <h1 className="title">
        <img className="img" src="src/images/logo.jpeg" alt="logo"></img>
      </h1>
      <h2 className="slogan">
        Cuida tu cuerpo, es el único lugar que tienes para vivir.
      </h2>
      <nav className="list-nav">
        <li><a href="#">¿Qué es el kundalini yoga?</a></li>
        <li>|</li>
        <li><a href="#">Beneficios de practicar kundalini yoga</a></li>
        <li>|</li>
        <li><a href="#">Características del kundalini</a></li>
        <li>|</li>
        <li><a href="#">Descubre las mejores posturas del kundalini yoga</a></li>
        <li>|</li>
        <li><a href="#">Contacto</a></li>
      </nav>
    </>
  );
}

export default Header;
