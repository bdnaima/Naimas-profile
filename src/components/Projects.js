
import gallery from '../assets/images/blackWhite.jpg';
import tree from '../assets/images/tree.jpg';
import dance from '../assets/images/dancer.jpg';

const Projects = () => {
    return (
        <>
            <div className="container">
                <div className="card about-section">
                    <div className="card-body">
                        <h1 className="text-center">Recent Work</h1>
                        <p className="card-text">Below are four web applications I created using HTML, CSS, React and Node.js. NOTE: The Virus Game App, is deployed through Heroku, so when you click on "View Site" the first time it may take a few seconds to upload.</p>
                    </div>
                </div>
            </div>
            <div className="container projects-alignment">
                <div className="card projects">
                    <img src={tree} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Bring To Light</h5>
                        <p className="card-text">This was my most recent project for a family member who needed a counselling website. I designed and coded the website using HTML, CSS and Bootstrap.</p>
                        <a href="https://bringtolight.ca/" className="btn btn-secondary" target="_blank" rel="noreferrer">View Site</a>
                        <a href="https://github.com/bdnaima/Bring-to-light/commits/master" className="btn btn-secondary" target="_blank" rel="noreferrer">Code</a>
                    </div>
                </div>

                <div className="card projects">
                    <img src={dance} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Pooja's Bollywood Dance Academy</h5>
                        <p className="card-text">This website was created for my final school project. I coded and designed the website with React, Bootstrap and Firebase. </p>
                        <a href="https://dance-app-9c409.web.app" className="btn btn-secondary" target="_blank" rel="noreferrer">View Site</a>
                        <a href="https://github.com/bdnaima/Bollywood-dance-app/commits/main" className="btn btn-secondary" target="_blank" rel="noreferrer">Code</a>
                    </div>
                </div>

                <div className="card projects">
                    <img src={gallery} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Gallery</h5>
                        <p className="card-text">Another school project, this is a gallery website where you sign in and can create your own albums and add photos. You can also copy, share and edit albums.</p>
                        <a href="https://gallery-b0bc4.web.app" className="btn btn-secondary" target="_blank" rel="noreferrer">View Site</a>
                        <a href="https://github.com/bdnaima/photo-gallery-app/commits/master" className="btn btn-secondary" target="_blank" rel="noreferrer">Code</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;