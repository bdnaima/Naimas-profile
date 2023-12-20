import { Card } from "react-bootstrap";
import coffee from "../../assets/images/coffee.jpg";
import "../../styles/Projects.css";

const CoffeeLandingPage = () => {
  return (
    <>
      {/** Coffee shop landing page */}
      <div className="individual-card">
        <Card className="projects">
          <Card.Img variant="top" src={coffee} alt="Coffee cup and table" />
          <Card.Body>
            <Card.Title style={{ fontWeight: "300" }}>
              Coffeeshop landing page
            </Card.Title>
            <Card.Text>
              This was a small project where I created a landing page for a
              coffee shop. I created the page using only HTML, CSS and CSS
              Animations.
            </Card.Text>
            <div className="website-view-buttons">
              <a
                href="https://bdnaima.github.io/CoffeeShop/"
                className="btn btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                View Site
              </a>
              <a
                href="https://github.com/bdnaima/CoffeeShop"
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

export default CoffeeLandingPage;
