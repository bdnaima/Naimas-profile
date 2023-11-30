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
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
        <motion.div
          className="container-fluid"
          initial={{ y: -250 }}
          animate={{ y: -10 }}
          style={{ justifyContent: "space-around" }}
          transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
        >
          <motion.h2>Naima Malik</motion.h2>

          <div id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                className="nav-link"
                to="#"
                onClick={() => handleLinkClick("aboutme-section")}
              >
                <motion.h3 whileHover={{ scale: 1.3 }}>About</motion.h3>
              </Link>
              <Link
                className="nav-link"
                to="#"
                onClick={() => handleLinkClick("experience-section")}
              >
                <motion.h3 whileHover={{ scale: 1.3 }}>Experience</motion.h3>
              </Link>
              <Link
                className="nav-link"
                to="#"
                onClick={() => handleLinkClick("projects-section")}
              >
                <motion.h3 whileHover={{ scale: 1.3 }}>Projects</motion.h3>
              </Link>
              <Link
                className="nav-link"
                to="#"
                onClick={() => handleLinkClick("contact-section")}
              >
                <motion.h3 whileHover={{ scale: 1.3 }}>Contact</motion.h3>
              </Link>
            </div>
          </div>
        </motion.div>
      </nav>
    </>
  );
};

export default Navigation;
