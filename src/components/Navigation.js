import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navigation = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <motion.div
          className="container-fluid"
          initial={{ y: -250 }}
          animate={{ y: -10 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
        >
          <Link className="navbar-brand" to="/">
            <motion.h5 whileHover={{ scale: 1.1 }}>
              Naima Malik Portfolio
            </motion.h5>
          </Link>

          <div id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" to="/">
                <motion.p whileHover={{ scale: 1.3 }}>Home</motion.p>
              </Link>
              <Link className="nav-link" to="/projects.js">
                <motion.p whileHover={{ scale: 1.3 }}>Projects</motion.p>
              </Link>
              <Link className="nav-link" to="/contact.js">
                <motion.p whileHover={{ scale: 1.3 }}>Contact</motion.p>
              </Link>
            </div>
          </div>
        </motion.div>
      </nav>
    </>
  );
};

export default Navigation;
