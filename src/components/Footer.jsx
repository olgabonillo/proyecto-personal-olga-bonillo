function Footer() {
  return (
    <>
      <main>
        <div id="contact">
          <h1 className="contact">Contacto</h1>
        </div>
        <div className="footer">
        <p className="text-footer">Contacta con nosotros por redes sociales, pulsando el icono del que prefieras:</p>
          <a href="https://wa.me/34619393123" target="_blanck">
            <i className="fa-brands fa-whatsapp" style={{ color: "#000" }}></i>
          </a>
          <a href="https://www.instagram.com/" target="_blanck">
            <i className="fa-brands fa-instagram" style={{ color: "#000" }}></i>
          </a>
          <a href="mailto:olgaalaquas@gmail.com" target="_blanck">
            <i className="fa-regular fa-envelope" style={{ color: "#000" }}></i>
          </a>
          <p className="text-form">
            Si lo deseas, podemos ponernos en contacto contigo&nbsp;
            <a href="#formulario" target="_blanck">
              pulsando aquí
            </a>
            .
          </p>
        </div>
        <div>
          <p className="copyright">Yoga con Jessica González © 2024</p>
        </div>
      </main>
    </>
  );
}

export default Footer;
