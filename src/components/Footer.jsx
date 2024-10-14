import whatsapp from "../images/whatsapp-icon.avif";
import instagram from "../images/instagram.png";
import email from "../images/email.png";
import logo from "../images/logo-yoga-jessi.jpeg";

function Footer() {
  return (
    <>
      <main>
        <div>
          <h1 className="contact">Contacto</h1>
        </div>
        <div className="footer">
          <a aria-label="Chat on WhatsApp" href="https://wa.me/34619393123">
            <img className="img-icons" alt="WhatsApp" src={whatsapp} />
          </a>
          <a aria-label="Chat on instagram" href="https://www.instagram.com/">
            <img className="img-icons" alt="instagram" src={instagram} />
          </a>
          <a aria-label="Chat on email" href="#">
            <img className="img-icons" alt="email" src={email} />
          </a>
          <div className="logo-footer">
            <a aria-label="logo" href="#">
              <img className="logo-footer" alt="logo" src={logo} />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default Footer;
