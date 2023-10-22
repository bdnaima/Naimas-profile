import { motion } from "framer-motion";
import { Card } from "react-bootstrap";
import gallery from "../assets/images/blackWhite.jpg";
import tree from "../assets/images/tree.jpg";
import dance from "../assets/images/dancer.jpg";
import coding from "../assets/images/coding.jpg";
import coffee from "../assets/images/coffee.jpg";
import branch from "../assets/images/branch-swirl.png";
import weatherApp from "../assets/images/weather-app.png";
import book from "../assets/images/pride-and-prejudice.jpg";

const Projects = () => {
  return (
    <>
      <motion.div
        className="container projects-container"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", duration: 1, bounce: 0.3 }}
      >
        <div className="image-branch">
          <img src={branch} alt="brown branch" />
        </div>
        <div className="project-title">
          <h1>Frontend Projects</h1>
          <p className="card-text">
            Below are different projects I have completed using HTML, CSS,
            JavaScript, React and Bootstrap.
          </p>
        </div>
        <div className="project-title">
          <h1>UX/UI Projects</h1>
          <p className="card-text">
            I have also created UX/UI design case studies, which can be be
            viewed in my UX/UI Design portfolio .
          </p>
          <a
            href="https://bdnaima.github.io/UX-UI_projects/"
            className="btn btn-secondary"
            target="_blank"
            rel="noreferrer"
          >
            View Portfolio
          </a>
        </div>
      </motion.div>

      <div className="row p-5 mt-4">
        {/** Weather App */}
        <div className="col-md-3 mb-3">
          <Card className="card projects">
            <Card.Img variant="top" src={weatherApp} alt="Weather" />
            <Card.Body className="cards">
              <Card.Title>Weather App</Card.Title>
              <Card.Text>
                This was a group project that I created for the JavaScript &
                React course at Technigo. It was built with HTML, CSS, CSS
                animations and vanilla JavaScript.
              </Card.Text>
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
            </Card.Body>
          </Card>
        </div>
        {/** Book App */}
        <div className="col-md-3 mb-3">
          <Card className="card projects">
            <Card.Img variant="top" src={book} alt="Weather" />
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
        {/** Bring to light */}
        <div className="col-md-3 ">
          <Card className="card projects">
            <Card.Img variant="top" src={tree} alt="..." />
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

        {/** Ballet dance website */}
        <div className="col-md-3">
          <Card className="card projects">
            <Card.Img variant="top" src={dance} alt="..." />
            <Card.Body>
              <Card.Title>Dance Ballet Academy</Card.Title>
              <Card.Text>
                A friend of mine is a dance teacher, so I decided to create a
                website for her. I coded and designed the website with React,
                Bootstrap and Firebase.
              </Card.Text>
              <a
                href="https://dance-app-9c409.web.app"
                className="btn btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                View Site
              </a>
              <a
                href="https://github.com/bdnaima/Bollywood-dance-app/commits/main"
                className="btn btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
            </Card.Body>
          </Card>
        </div>

        {/** Gallery website */}
        <div className="col-md-3">
          <Card className="card projects">
            <Card.Img variant="top" src={gallery} alt="..." />
            <Card.Body>
              <Card.Title>Gallery</Card.Title>
              <Card.Text>
                This application is a gallery where you sign in and create your
                own albums. You can also add photos, copy, share and edit
                albums.
              </Card.Text>
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
            </Card.Body>
          </Card>
        </div>

        {/** Coffee shop landing page */}
        <div className="col-md-3">
          <Card className="card projects">
            <Card.Img variant="top" src={coffee} alt="..." />
            <Card.Body>
              <Card.Title>Coffeeshop landing page</Card.Title>
              <Card.Text>
                This was a small project where I created a landing page for a
                coffee shop. I created the page using only HTML, CSS and CSS
                Animations.
              </Card.Text>
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
            </Card.Body>
          </Card>
        </div>

        {/** Code Testing */}
        <div className="col-md-3">
          <Card className="card projects">
            <Card.Img variant="top" src={coding} alt="..." />
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
      </div>
    </>
  );
};
export default Projects;
