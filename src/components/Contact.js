import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center">Contact</h1>
        <div className="contact-icons">
          <div>
            <a href="tel: 0707175439">
              <FaPhone id="phone" />
            </a>
          </div>
          <div>
            <a href="mailto: naima.maria.malik@gmail.com">
              <MdEmail id="email" />
            </a>
          </div>
          <div>
            <a href="tel: 0707175439">
              <SiLinkedin id="linkedIn" />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/naima-maria-malik-6471ba82/"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub id="gitHub" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
