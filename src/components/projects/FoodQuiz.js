import { Card } from "react-bootstrap";
import food from "../../assets/images/food.png";
import "../../styles/Projects.css";

const FoodQuiz = () => {
  return (
    <>
      {/** Food app */}
      <div className="individual-card">
        <Card className="projects">
          <Card.Img
            variant="top"
            src={food}
            alt="Food"
            style={{ width: "17.3rem" }}
          />
          <Card.Body>
            <Card.Title style={{ fontWeight: "300" }}>Food Quiz</Card.Title>
            <Card.Text>
              This was a project completed in a team where we created a food
              quiz that includes a timer and the score. Here we used React,
              React Router, Redux and CSS.
            </Card.Text>
            <div className="website-view-buttons">
              <a
                href="https://movie-app-by-priya-naima-sarah.netlify.app/"
                className="btn btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                View Site
              </a>
              <a
                href="https://github.com/bdnaima/project-movies-vite"
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

export default FoodQuiz;
