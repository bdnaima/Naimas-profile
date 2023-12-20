import { Card } from "react-bootstrap";
import weatherApp from "../../assets/images/weather-app.png";
import "../../styles/Projects.css";

const WeatherApp = () => {
  return (
    <>
      {/** Weather App */}
      <div className="individual-card">
        <Card className="projects">
          <Card.Img variant="top" src={weatherApp} alt="Weather" />
          <Card.Body className="cards">
            <Card.Title style={{ fontWeight: "300" }}>Weather App</Card.Title>
            <Card.Text>
              This was a group project that I created for the JavaScript & React
              course at Technigo. It was built with HTML, CSS, CSS animations
              and vanilla JavaScript.
            </Card.Text>
            <div className="website-view-buttons">
              <a
                href="https://weather-app-by-priya-and-naima.netlify.app/"
                className="btn btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                View Site
              </a>
              <a
                href="https://github.com/bdnaima/project-weather-app"
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

export default WeatherApp;
