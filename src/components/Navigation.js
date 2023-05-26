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
            Naima Malik Portfolio
          </Link>

          <div id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/projects.js">
                My Projects
              </Link>
              <Link className="nav-link" to="/contact.js">
                Contact
              </Link>
            </div>
          </div>
        </motion.div>
      </nav>
    </>
  );
};

export default Navigation;
