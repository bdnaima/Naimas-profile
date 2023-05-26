import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import pattern from "../assets/images/pattern.png";

const Contact = () => {
  return (
    <>
      <div className="container contact-container">
        <h1 className="contact-text">Contact</h1>

        <div className="contact-icons">
          <div>
            <a href="mailto: naima.maria.malik@gmail.com">
              <MdEmail id="email" />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/naima-maria-malik-6471ba82/">
              <SiLinkedin id="linkedIn" />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/bdnaima?tab=repositories"
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
