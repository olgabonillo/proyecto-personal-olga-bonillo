function Footer() {
  return (
    <>
      <main>
        <div id="contact">
          <h1 className="contact">Contacto</h1>
        </div>
        <div className="footer">
            <p className="text-footer">Yoga con Jessica González © 2024</p>
          <a href="https://wa.me/34619393123" target="_black">
            <i className="fa-brands fa-whatsapp" style={{ color: '#000' }}></i>
          </a>
          <a href="https://www.instagram.com/" target="_black">
            <i className="fa-brands fa-instagram" style={{ color: '#000' }}></i>
          </a>
          <a href="mailto:olgaalaquas@gmail.com" target="_black">
            <i className="fa-regular fa-envelope" style={{ color: '#000' }}></i>
          </a>
        </div>
      </main>
    </>
  );
}

export default Footer;
