import { Card } from "react-bootstrap";
import movies from "../../assets/images/movies.jpeg";
import "../../styles/Projects.css";

const MoviesApp = () => {
  return (
    <>
      {/** Movie app */}
      <div className="individual-card">
        <Card className="projects">
          <Card.Img variant="top" src={movies} alt="Coffee cup and table" />
          <Card.Body>
            <Card.Title>Movies Site</Card.Title>
            <Card.Text>
              This was a project completed at Technigo where I created a movies
              site, using themoviedb.org API. Here I used React, React Router
              and CSS.
            </Card.Text>
            <div className="website-view-buttons">
              <a
                href="https://movie-app-by-priya-naima-sarah.netlify.app/"
                className="btn btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                View Site
              </a>
              <a
                href="https://github.com/bdnaima/project-movies-vite"
                className="btn btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default MoviesApp;
