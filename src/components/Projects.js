
import gallery from '../assets/images/blackWhite.jpg';
import tree from '../assets/images/tree.jpg';
import dance from '../assets/images/dancer.jpg';
import coding from '../assets/images/coding.jpg';


const Projects = () => {
    return (
        <>
            <div className="container">
                <div className="card about-section">
                    <div className="card-body">
                        <h1 className="text-center">Recent Work</h1>
                        <p className="card-text" style={{ textAlign: "center" }}>Below are four web applications I created using HTML, CSS, React and Bootstrap. </p>
                    </div>
                </div>
            </div>
            <div className="container projects-alignment">

                <div className="card projects">
                    <div className="img-settings">
                        <img src={tree} className="card-img-top" alt="..." /></div>
                    <div className="card-body">
                        <h5 className="card-title">Bring To Light</h5>
                        <p className="card-text">This was a project for a family member who needed a counselling website. I designed and coded the website using HTML, CSS and Bootstrap.</p>
                        <a href="https://bringtolight.ca/" className="btn btn-secondary" target="_blank" rel="noreferrer">View Site</a>
                        <a href="https://github.com/bdnaima/Bring-to-light/commits/master" className="btn btn-secondary" target="_blank" rel="noreferrer">Code</a>
                    </div>
                </div>

                <div className="card projects">
                    <div className="img-settings">
                        <img src={dance} className="card-img-top" alt="..." /></div>
                    <div className="card-body">
                        <h5 className="card-title">Dance Ballet Academy</h5>
                        <p className="card-text">A friend of mine is a dance teacher, so I decided to create a website for her. I coded and designed the website with React, Bootstrap and Firebase. </p>
                        <a href="https://dance-app-9c409.web.app" className="btn btn-secondary" target="_blank" rel="noreferrer">View Site</a>
                        <a href="https://github.com/bdnaima/Bollywood-dance-app/commits/main" className="btn btn-secondary" target="_blank" rel="noreferrer">Code</a>
                    </div>
                </div>

                <div className="card projects">
                    <div className="img-settings">
                        <img src={gallery} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Gallery</h5>
                        <p className="card-text">This was a small project that is a gallery website where you sign in and can create your own albums and add photos. You can also copy, share and edit albums.</p>
                        <a href="https://gallery-b0bc4.web.app" className="btn btn-secondary" target="_blank" rel="noreferrer">View Site</a>
                        <a href="https://github.com/bdnaima/photo-gallery-app/commits/master" className="btn btn-secondary" target="_blank" rel="noreferrer">Code</a>
                    </div>
                </div>
                <div className="card projects">
                    <div className="img-settings">
                        <img src={coding} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Code Testing</h5>
                        <p className="card-text">This was a recent small project where I created an example landing page for code testing. I created the page using only HTML and CSS.</p>
                        <a href="https://code-testing-landing-page.web.app/" className="btn btn-secondary" target="_blank" rel="noreferrer">View Site</a>
                        <a href="https://github.com/bdnaima/photo-gallery-app/commits/master" className="btn btn-secondary" target="_blank" rel="noreferrer">Code</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;