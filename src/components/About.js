import me from '../assets/images/Naima_at_work03.jpg';
import { GiSkills } from 'react-icons/gi';


import Frontend from './Frontend'
import Backend from '../components/Backend'
import Design from '../components/Design'
import Other from '../components/Other'

const frontendSkills = [
    {
        id: 1,
        name: 'HTML5',
        percentage: 90
    },
    {
        id: 2,
        name: 'CSS',
        percentage: 80
    },
    {
        id: 3,
        name: 'Bootstrap',
        percentage: 85
    },
    {
        id: 4,
        name: 'Saas',
        percentage: 70
    },
    {
        id: 5,
        name: 'JavaScript',
        percentage: 60
    },
    {
        id: 6,
        name: 'React',
        percentage: 80
    },
]

const backendSkills = [
    {
        id: 1,
        name: 'Node.js',
        percentage: 40
    },
    {
        id: 2,
        name: 'Firebase',
        percentage: 80
    },
    {
        id: 3,
        name: 'MongoDB',
        percentage: 50
    },
]

const designSkills = [
    {
        id: 1,
        name: 'Responsive Web Design',
        percentage: 90
    },
    {
        id: 2,
        name: 'Adobe Creative Cloud',
        percentage: 80
    },
    {
        id: 3,
        name: 'Figma',
        percentage: 80
    },
]

const otherSkills = [
    {
        id: 1,
        name: 'GitHub',
    },
    {
        id: 2,
        name: 'UX/UI Design',
    },
    {
        id: 3,
        name: 'Agile Methodology',
    },
    {
        id: 4,
        name: 'Scrum',
    },
    {
        id: 5,
        name: 'Organizational Skills',
    },
    {
        id: 6,
        name: 'Time Management',
    },
]
const About = () => {
    return (
        <>
            <div className="container">
                <div className="about-section">
                    <div className='me'>
                        <img src={me} alt="naima" />
                    </div>
                    <div className="card-body">
                        <h1 className="text-center">ABOUT ME</h1>
                        <p className="card-text text-alignment">I have become passionate in designing and developing responsive websites for the past five years and continuously enjoy learning new technologies within web development.</p>
                        <p className="card-text text-alignment">I have also graduated from a two-year program called Front-end Developer and have learned to write clean code and am able to create dynamic websites using HTML, CSS and React. I also have experience creating low fidelity and high fidelity prototypes using Figma and Adobe XD.</p>
                    </div>

                </div>

            </div>

            <div className=" container card-alignment">
                <div className="skills_heading">
                    <GiSkills className="skills_icon_person" />
                    <h5 className="text-center">Technical skills</h5>
                </div>

            </div>

            <div className='container skills'>
                <Frontend skills={frontendSkills} />
                <Backend skills={backendSkills} />
            </div>
            <div className='container skills'>
                <Design skills={designSkills} />
                <Other skills={otherSkills} />
            </div>
        </>
    );
}

export default About;