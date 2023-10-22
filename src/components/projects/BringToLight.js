import { Card } from "react-bootstrap";
import tree from "../../assets/images/tree.jpg";

const BringToLight = () => {
  return (
    <>
      {/** Bring to light */}
      <div className="col-md-3 ">
        <Card className="card projects">
          <Card.Img variant="top" src={tree} alt="Field with flowers" />
          <Card.Body className="cards">
            <Card.Title>Bring To Light</Card.Title>
            <Card.Text>
              This was a project for a family member who needed a counselling
              website. I designed and coded the website using HTML, CSS and
              Bootstrap.
            </Card.Text>
            <a
              href="https://bringtolight.ca/"
              className="btn btn-secondary"
              target="_blank"
              rel="noreferrer"
            >
              View Site
            </a>
            <a
              href="https://github.com/bdnaima/Bring-to-light/commits/master"
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

export default BringToLight;
