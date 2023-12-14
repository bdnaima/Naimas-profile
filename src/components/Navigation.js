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
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
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
                <motion.h4 whileHover={{ scale: 1.3 }}>About</motion.h4>
              </Link>
              <Link
                className="nav-link"
                to="#"
                onClick={() => handleLinkClick("experience-section")}
              >
                <motion.h4 whileHover={{ scale: 1.3 }}>Experience</motion.h4>
              </Link>
              <Link
                className="nav-link"
                to="#"
                onClick={() => handleLinkClick("projects-section")}
              >
                <motion.h4 whileHover={{ scale: 1.3 }}>My work</motion.h4>
              </Link>
              <Link
                className="nav-link"
                to="#"
                onClick={() => handleLinkClick("contact-section")}
              >
                <motion.h4 whileHover={{ scale: 1.3 }}>Contact</motion.h4>
              </Link>
            </div>
          </div>
        </motion.div>
      </nav>
    </>
  );
};

export default Navigation;
