import purpleMe from "../assets/images/profile-pic.png";
import { GiSkills } from "react-icons/gi";

import Frontend from "./Frontend";
import Backend from "../components/Backend";
import Design from "../components/Design";
import Other from "../components/Other";

const frontendSkills = [
  {
    id: 1,
    name: "HTML5",
    percentage: 80,
  },
  {
    id: 2,
    name: "CSS",
    percentage: 80,
  },
  {
    id: 2,
    name: "CSS Animations",
    percentage: 70,
  },
  {
    id: 3,
    name: "Bootstrap",
    percentage: 80,
  },
  {
    id: 4,
    name: "Saas",
    percentage: 70,
  },
  {
    id: 5,
    name: "JavaScript",
    percentage: 60,
  },
  {
    id: 6,
    name: "React",
    percentage: 70,
  },
];

const backendSkills = [
  {
    id: 1,
    name: "Node.js",
    percentage: 40,
  },
  {
    id: 2,
    name: "Firebase",
    percentage: 70,
  },
  {
    id: 3,
    name: "MongoDB",
    percentage: 50,
  },
];

const designSkills = [
  {
    id: 1,
    name: "Responsive Web Design",
    percentage: 80,
  },
  {
    id: 2,
    name: "Adobe Creative Cloud",
    percentage: 80,
  },
  {
    id: 3,
    name: "Figma",
    percentage: 80,
  },
];

const otherSkills = [
  {
    id: 1,
    name: "GitHub",
  },
  {
    id: 2,
    name: "UX/UI Design",
  },
  {
    id: 3,
    name: "Agile Methodology",
  },
  {
    id: 4,
    name: "Scrum",
  },
  {
    id: 5,
    name: "Organizational Skills",
  },
  {
    id: 6,
    name: "Time Management",
  },
];
const About = () => {
  return (
    <>
      <div className="container p-3 mb-5" style={{ maxWidth: "45rem" }}>
        <div className="row justify-content-center flex-row-reverse">
          <div className="col-md-2 d-flex about-me">
            <div className="me">
              <img src={purpleMe} alt="naima" />
            </div>
          </div>
          <div className=" card-body col-md-4 align-self-center">
            <h1 className="text-center">ABOUT ME</h1>
            <p className="card-text ">
              I have become passionate in designing and developing responsive
              websites for the past five years and continuously enjoy learning
              new technologies within web development.
            </p>
            <p className="card-text ">
              I have also graduated from a two-year program called Front-end
              Developer and have learned to write clean code and am able to
              create dynamic websites using HTML, CSS and React. I also have
              experience as a UX/UI designer and love to conduct user research,
              as well as creating wireframes and prototypes using Figma and
              Adobe XD.
            </p>
          </div>
        </div>
      </div>

      <div className=" container card-alignment">
        <div className="skills_heading">
          <GiSkills className="skills_icon_person" />
          <h5 className="text-center">Technical skills</h5>
        </div>
      </div>

      <div className="container skills" style={{ maxWidth: "50rem" }}>
        <Frontend skills={frontendSkills} />
        <Backend skills={backendSkills} />
      </div>
      <div className="container skills" style={{ maxWidth: "50rem" }}>
        <Design skills={designSkills} />
        <Other skills={otherSkills} />
      </div>
    </>
  );
};

export default About;
