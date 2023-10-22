import { Card } from "react-bootstrap";
import coding from "../../assets/images/coding.jpg";

const CodeTesting = () => {
  return (
    <>
      {/** Code Testing */}
      <div className="col-md-3">
        <Card className="card projects">
          <Card.Img variant="top" src={coding} alt="Code" />
          <Card.Body>
            <Card.Title>Code Testing</Card.Title>
            <Card.Text>
              This was a small project where I created a landing page for code
              testing. I created the page using HTML and CSS.
            </Card.Text>
            <a
              href="https://code-testing-landing-page.web.app/"
              className="btn btn-secondary"
              target="_blank"
              rel="noreferrer"
            >
              View Site
            </a>
            <a
              href="https://github.com/bdnaima/Testing-code-landing-page"
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

export default CodeTesting;
