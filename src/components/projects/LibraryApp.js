import { Card } from "react-bootstrap";
import book from "../../assets/images/pride-and-prejudice.jpg";

const LibraryApp = () => {
  return (
    <>
      {/** Book App */}
      <div className="col-md-3 mb-3">
        <Card className="card projects">
          <Card.Img variant="top" src={book} alt="Book" />
          <Card.Body className="cards">
            <Card.Title>Library App</Card.Title>
            <Card.Text>
              Another project created for the JavaScript & React course at
              Technigo. I created this app using HTML, CSS and vanilla
              JavaScript.
            </Card.Text>
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
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default LibraryApp;
