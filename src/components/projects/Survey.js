import { Card } from "react-bootstrap";
import drinks from "../../assets/images/drinks.jpeg";
import "../../styles/Projects.css";

const Survey = () => {
  return (
    <>
      {/** Survey */}
      <div className="individual-card">
        <Card className="projects">
          <Card.Img variant="top" src={drinks} alt="Coffee cup and table" />
          <Card.Body>
            <Card.Title>Drinks Survey</Card.Title>
            <Card.Text>
              This was a project completed at Technigo where I created a survey
              about drinks. I created the page using React and CSS.
            </Card.Text>
            <a
              href="https://survey-app-by-priya-and-naima.netlify.app/"
              className="btn btn-secondary"
              target="_blank"
              rel="noreferrer"
            >
              View Site
            </a>
            <a
              href="https://github.com/bdnaima/project-survey-vite"
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

export default Survey;
