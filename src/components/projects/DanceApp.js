import { Card } from "react-bootstrap";
import dance from "../../assets/images/dancer.jpg";
import "../../styles/Projects.css";

const DanceApp = () => {
  return (
    <>
      {/** Ballet dance website */}
      <div className="individual-card">
        <Card className="projects">
          <Card.Img variant="top" src={dance} alt="Dancer" />
          <Card.Body>
            <Card.Title>Dance Ballet Academy</Card.Title>
            <Card.Text>
              A friend of mine is a dance teacher, so I decided to create a
              website for her. I coded and designed the website with React,
              Bootstrap and Firebase.
            </Card.Text>
            <a
              href="https://dance-app-9c409.web.app"
              className="btn btn-secondary"
              target="_blank"
              rel="noreferrer"
            >
              View Site
            </a>
            <a
              href="https://github.com/bdnaima/Bollywood-dance-app/commits/main"
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

export default DanceApp;
