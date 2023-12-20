import { Card } from "react-bootstrap";
import book from "../../assets/images/pride-and-prejudice.jpg";
import "../../styles/Projects.css";

const LibraryApp = () => {
  return (
    <>
      {/** Book App */}
      <div className="individual-card">
        <Card className="projects">
          <Card.Img variant="top" src={book} alt="Book" />
          <Card.Body className="cards">
            <Card.Title style={{ fontWeight: "300" }}>Library App</Card.Title>
            <Card.Text>
              This project was created for the JavaScript & React course at
              Technigo. I created this app from scratch using HTML, CSS and
              vanilla JavaScript.
            </Card.Text>
            <div className="website-view-buttons">
              <a
                href="https://book-app-by-naima.netlify.app/"
                className="btn btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                View Site
              </a>
              <a
                href="https://github.com/bdnaima/Naimas-project-library"
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

export default LibraryApp;
