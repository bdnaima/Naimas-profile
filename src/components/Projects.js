import { Carousel, Card } from "react-bootstrap";
import gallery from "../assets/images/blackWhite.jpg";
import tree from "../assets/images/tree.jpg";
import dance from "../assets/images/dancer.jpg";
import coding from "../assets/images/coding.jpg";

const Projects = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h1 className="text-center">Projects</h1>
            <p className="card-text" style={{ textAlign: "center" }}>
              Below are the web applications I created using HTML, CSS, React
              and Bootstrap.
            </p>
          </div>
        </div>
      </div>

      <Carousel interval={3000}>
        <Carousel.Item>
          <div className="row p-5">
            <div className="col-md-4">
              <Card className="card projects">
                <Card.Img variant="top" src={tree} alt="..." />
                <Card.Body>
                  <Card.Title>Bring To Light</Card.Title>
                  <Card.Text>
                    This was a project for a family member who needed a
                    counselling website. I designed and coded the website using
                    HTML, CSS and Bootstrap.
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

            <div className="col-md-4">
              <Card className="card projects">
                <Card.Img variant="top" src={dance} alt="..." />
                <Card.Body>
                  <Card.Title>Dance Ballet Academy</Card.Title>
                  <Card.Text>
                    A friend of mine is a dance teacher, so I decided to create
                    a website for her. I coded and designed the website with
                    React, Bootstrap and Firebase.
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
            <div className="col-md-4">
              <Card className="card projects">
                <Card.Img variant="top" src={gallery} alt="..." />
                <Card.Body>
                  <Card.Title>Gallery</Card.Title>
                  <Card.Text>
                    This was a small project that is a gallery website where you
                    sign in and can create your own albums and add photos. You
                    can also copy, share and edit albums.
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
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="row p-5">
            <div className="col-md-4">
              <Card className="card projects">
                <Card.Img variant="top" src={coding} alt="..." />
                <Card.Body>
                  <Card.Title>Code Testing</Card.Title>
                  <Card.Text>
                    This was a small project where I created a landing page for
                    code testing. I created the page using only HTML and CSS.
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
          </div>
        </Carousel.Item>

        {/* <Carousel.Item>
          <div className="d-flex justify-content-around"></div>
        </Carousel.Item> */}
      </Carousel>
    </>
  );
};
export default Projects;
