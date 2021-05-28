import virus from '../assets/images/coronavirus.jpg';
import gallery from '../assets/images/blackWhite.jpg';
import tree from '../assets/images/tree.jpg';
import dance from '../assets/images/dancer.jpg';

const Projects = () => {
    return (
        <>
            <h1 className="text-center projects-title">Recent Work</h1>
            <div className="container projects-alignment">
                <div className="card projects">
                    <img src={ tree } className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Bring To Light</h5>
                        <p className="card-text">This was my most recent project for a family member who needed a counselling website. I designed and coded the website using HTML, CSS and Bootstrap.</p>
                        <a href="https://bringtolight.ca/" className="btn btn-secondary">View Site</a>
                        <a href="https://github.com/bdnaima/Bring-to-light/commits/master" className="btn btn-secondary">Code</a>
                    </div>
                </div>

                <div className="card projects">
                    <img src={ dance } className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Pooja's Bollywood Dance Academy</h5>
                        <p className="card-text">This website was created for my final school project. I coded and designed the website with React, Bootstrap and Firebase. </p>
                        <a href="https://bollywood-dance.herokuapp.com/" className="btn btn-secondary">View Site</a>
                        <a href="https://github.com/bdnaima/Bollywood-dance-app/commits/main" className="btn btn-secondary">Code</a>
                    </div>
                </div>

                <div className="card projects">
                    <img src={ gallery } className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Gallery</h5>
                        <p className="card-text">Another school project, this is a gallery website where you sign in and can create your own albums and add photos. You can also copy, share and edit albums.</p>
                        <a href="https://fed19-naimas-gallery-app.herokuapp.com/signup" className="btn btn-secondary">View Site</a>
                        <a href="https://github.com/bdnaima/photo-gallery-app/commits/master" className="btn btn-secondary">Code</a>
                    </div>
                </div>

                <div className="card projects">
                    <img src={ virus } className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Virus Game</h5>
                        <p className="card-text">I created this small application using Node.js and WebSockets. In order to play the game, enter the names through different devices or browser tabs.</p>
                        <a href="https://naimas-virus-game-app.herokuapp.com/" className="btn btn-secondary">View Site</a>
                        <a href="https://github.com/bdnaima/virus-game-app/commits/master" className="btn btn-secondary">Code</a>
                    </div>
                </div>
            </div>
        </>
    );
  }
  
  export default Projects;