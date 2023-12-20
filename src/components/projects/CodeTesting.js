import { Card } from "react-bootstrap";
import coding from "../../assets/images/coding.jpg";
import "../../styles/Projects.css";

const CodeTesting = () => {
  return (
    <>
      {/** Code Testing */}
      <div className="individual-card">
        <Card className="projects">
          <Card.Img variant="top" src={coding} alt="Code" />
          <Card.Body>
            <Card.Title style={{ fontWeight: "300" }}>Code Testing</Card.Title>
            <Card.Text>
              This was a small project that I did on my own where I created a
              landing page for code testing. I created the page using HTML and
              CSS.
            </Card.Text>
            <div className="website-view-buttons">
              {" "}
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
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default CodeTesting;
