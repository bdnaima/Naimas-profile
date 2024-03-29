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
            <Card.Title style={{ fontWeight: "300" }}>Music app</Card.Title>
            <Card.Text>
              This was a group project that we created together for the
              JavaScript & React course at Technigo. We built this application
              with React and CSS.
            </Card.Text>
            <div className="website-view-buttons">
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
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default MusicApp;
