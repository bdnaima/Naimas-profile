import { Card } from "react-bootstrap";
import todo from "../../assets/images/todo.png";
import "../../styles/Projects.css";

const TodoApp = () => {
  return (
    <>
      {/** Todo App */}
      <div className="individual-card">
        <Card className="projects">
          <Card.Img variant="top" src={todo} alt="todo" />
          <Card.Body className="cards">
            <Card.Title style={{ fontWeight: "300" }}>Todo App</Card.Title>
            <Card.Text>
              A team project created for the JavaScript & React course at
              Technigo. We created this app using React, React Router, Redux
              Toolkit and Styled components.
            </Card.Text>
            <div className="website-view-buttons">
              <a
                href="https://todo-app-by-naima-sarah-priya.netlify.app"
                className="btn btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                View Site
              </a>
              <a
                href="https://github.com/bdnaima/project-todos-redux"
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

export default TodoApp;
