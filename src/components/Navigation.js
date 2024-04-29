import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import "../styles/Navigation.css";

const Navigation = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLinkClick = (sectionId) => {
    if (sectionId) {
      // Scroll to the section before navigating to the route
      scrollToSection(sectionId);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <motion.div
          className="container-fluid"
          initial={{ y: -250 }}
          animate={{ y: -10 }}
          style={{ justifyContent: "space-around" }}
          transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
        >
          <motion.h3>Naima Malik</motion.h3>

          <div id="navbarNavAltMarkup">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <Link
                className="nav-link"
                to="#"
                onClick={() => handleLinkClick("aboutme-section")}
              >
                <motion.h4 whileHover={{ scale: 1.2 }}>About</motion.h4>
              </Link>
              <Link
                className="nav-link"
                to="#"
                onClick={() => handleLinkClick("experience-section")}
              >
                <motion.h4 whileHover={{ scale: 1.2 }}>Experience</motion.h4>
              </Link>
              <Link
                className="nav-link"
                to="#"
                onClick={() => handleLinkClick("projects-section")}
              >
                <motion.h4 whileHover={{ scale: 1.2 }}>My work</motion.h4>
              </Link>
              <a
                className="nav-link"
                target="_blank"
                rel="noreferrer"
                href="https://naimas-uxui-portfolio.netlify.app/"
              >
                <motion.h4 whileHover={{ scale: 1.2 }}>UX/UI</motion.h4>
              </a>
              <Link
                className="nav-link"
                to="#"
                onClick={() => handleLinkClick("contact-section")}
              >
                <motion.h4 whileHover={{ scale: 1.2 }}>Contact</motion.h4>
              </Link>
            </div>
          </div>
        </motion.div>
      </nav>
    </>
  );
};

export default Navigation;
