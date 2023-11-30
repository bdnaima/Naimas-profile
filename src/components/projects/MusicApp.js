import { Card } from "react-bootstrap";
import music from "../../assets/images/music.png";
import "../../styles/Projects.css";

const MusicApp = () => {
  return (
    <>
      {/** Music App */}
      <div className="individual-card">
        <Card className="projects">
          <Card.Img variant="top" src={music} alt="Albums" />
          <Card.Body className="cards">
            <Card.Title>Music app</Card.Title>
            <Card.Text>
              This was a group project that I created for the JavaScript & React
              course at Technigo. It was built with React and CSS.
            </Card.Text>
            <a
              href="https://music-app-by-naima-and-priya.netlify.app/"
              className="btn btn-secondary"
              target="_blank"
              rel="noreferrer"
            >
              View Site
            </a>
            <a
              href="https://github.com/bdnaima/project-music-releases-vite"
              className="btn btn-secondary"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default MusicApp;
