import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Naima Malik Portfolio</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about.js">About</Link>
                <Link className="nav-link" to="/project.js">Projects</Link>
                <Link className="nav-link" to="/contact.js">Contact</Link>
              </div>
            </div>
          </div>
      </nav>
      </>
    );
  }
  
  export default Navigation;