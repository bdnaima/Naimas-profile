import me from '../assets/images/Naima_at_work03.jpg';
import { GiSkills, GiTeamIdea } from 'react-icons/gi';


const About = () => {
    return (
        <>
            <div className="container">
                <div className="card about-section">
                    <div className="card-body">
                        <h1 className="text-center">ABOUT ME</h1>
                        <p className="card-text text-alignment">I have become passionate in designing and developing responsive websites for the past 5 years and continuously enjoy learning new technologies within web development.</p>

                        <p className="card-text text-alignment">I have also graduated from a two-year program called Front-end Developer and have learned to write clean code and I am able to create dynamic websites using HTML, CSS and React. I also have experience creating low fidelity and high fidelity prototypes using Figma and Adobe XD.</p>
                    </div>
                    <img className="me" src={me} alt="naima" />
                </div>
            </div>

            <div className=" container card-alignment">
                <div className="card skills-alignment" style={{ width: "30rem", paddingTop: "2rem" }}>
                    <GiSkills className="skills" />
                    <div className="card-body">
                        <h5 className="card-title text-center">Technical skills</h5>
                        <ul className="list-group">
                            <li className="list-group-item">HTML5</li>
                            <li className="list-group-item">CSS3</li>
                            <li className="list-group-item">JavaScript</li>
                            <li className="list-group-item">SASS</li>
                            <li className="list-group-item">Bootstrap</li>
                            <li className="list-group-item">React</li>
                            <li className="list-group-item">Basic Node.js</li>
                            <li className="list-group-item">Responsive Web Design</li>
                            <li className="list-group-item">Adobe Creative Cloud</li>
                            <li className="list-group-item">Figma</li>
                            <li className="list-group-item">Firebase</li>
                            <li className="list-group-item">GitHub</li>
                        </ul>
                    </div>
                </div>

                <div className="card skills-alignment" style={{ width: "30rem", paddingTop: "2rem" }}>
                    <GiTeamIdea className="skills" />
                    <div className="card-body">
                        <h5 className="card-title text-center">Other skills</h5>
                        <ul className="list-group">
                            <li className="list-group-item">UX/UI Design</li>
                            <li className="list-group-item">Problem Solving</li>
                            <li className="list-group-item">Agile Methodology</li>
                            <li className="list-group-item">Scrum</li>
                            <li className="list-group-item">Organizational Skills</li>
                            <li className="list-group-item">Time Management</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;