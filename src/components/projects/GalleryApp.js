import { Card } from "react-bootstrap";
import gallery from "../../assets/images/blackWhite.jpg";
import "../../styles/Projects.css";

const GalleryApp = () => {
  return (
    <>
      {" "}
      {/** Gallery website */}
      <div className="individual-card">
        <Card className="projects">
          <Card.Img variant="top" src={gallery} alt="Trunk with flowers" />
          <Card.Body>
            <Card.Title>Gallery</Card.Title>
            <Card.Text>
              This application is a gallery where you sign in and create your
              own albums. You can also add photos, copy, share and edit albums.
            </Card.Text>
            <div className="website-view-buttons">
              <a
                href="https://gallery-b0bc4.web.app"
                className="btn btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                View Site
              </a>
              <a
                href="https://github.com/bdnaima/photo-gallery-app/commits/master"
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

export default GalleryApp;
