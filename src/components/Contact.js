import { motion } from "framer-motion";
import "../styles/Contact.css";

import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact-container">
        <h1 className="contact-text">Contact</h1>

        <motion.div
          className="contact-icons"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 1, bounce: 0.3 }}
        >
          <motion.div whileHover={{ scale: 2 }}>
            <a href="mailto: naima.maria.malik@gmail.com">
              <MdEmail id="email" />
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 2 }}>
            <a href="https://www.linkedin.com/in/naima-maria-malik-6471ba82/">
              <SiLinkedin id="linkedIn" />
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 2 }}>
            <a
              href="https://github.com/bdnaima?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub id="gitHub" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Contact;
