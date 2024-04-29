import "../styles/Home.css";
import "../styles/Projects.css";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import imageOfMe from "../assets/images/Naima_at_work03.jpg";
import sunflower from "../assets/images/sunflower.png";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import MoviesApp from "./projects/MoviesApp";
import MusicApp from "./projects/MusicApp";
import Survey from "./projects/Survey";
import WeatherApp from "./projects/WeatherApp";
import LibraryApp from "./projects/LibraryApp";
import BringToLight from "./projects/BringToLight";
import GalleryApp from "./projects/GalleryApp";
import DanceApp from "./projects/DanceApp";
import CoffeeLandingPage from "./projects/CoffeeLandingPage";
import CodeTesting from "./projects/CodeTesting";
import FoodQuiz from "./projects/FoodQuiz";
import TodoApp from "./projects/TodoApp";

const Home = () => {
  const { ref } = useInView({
    threshold: 0.3,
  });

  return (
    <>
      <div className="row-box">
        <motion.div
          className="heading-me"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 2 }}
        >
          <h2>Hello, I'm Naima</h2>
          <h3>Frontend developer with UX/UI design experience</h3>
        </motion.div>
        <motion.div
          className="stack"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 2 }}
        >
          <svg
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            id="blobSvg"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: "rgb(181, 146, 109)" }}
                ></stop>
                <stop
                  offset="100%"
                  style={{ stopColor: "rgb(255,255,255)" }}
                ></stop>
              </linearGradient>
            </defs>
            <path fill="url(#gradient)">
              <animate
                attributeName="d"
                dur="15000ms"
                repeatCount="indefinite"
                values="M409,310Q393,370,339.5,411.5Q286,453,217.5,439.5Q149,426,96,375.5Q43,325,83.5,264.5Q124,204,143,151Q162,98,221.5,85Q281,72,317.5,117.5Q354,163,389.5,206.5Q425,250,409,310Z;

                M414,295Q357,340,317,372Q277,404,208,423Q139,442,80.5,387.5Q22,333,47,259Q72,185,117.5,142.5Q163,100,221.5,90Q280,80,341.5,101Q403,122,437,186Q471,250,414,295Z;
                
                M406.5,325.5Q430,401,358,429Q286,457,234,413Q182,369,123,343.5Q64,318,93,260.5Q122,203,139,145Q156,87,215,101.5Q274,116,317.5,136.5Q361,157,372,203.5Q383,250,406.5,325.5Z;
                
                M449,327.5Q435,405,364,450Q293,495,219,463.5Q145,432,116,370.5Q87,309,85,249Q83,189,123,144.5Q163,100,221.5,90Q280,80,343.5,99Q407,118,435,184Q463,250,449,327.5Z;
                
                M401.5,311.5Q397,373,344.5,431Q292,489,211,473Q130,457,122.5,378Q115,299,122,252.5Q129,206,131,126.5Q133,47,208.5,51Q284,55,334,96Q384,137,395,193.5Q406,250,401.5,311.5Z;
                
                M409,310Q393,370,339.5,411.5Q286,453,217.5,439.5Q149,426,96,375.5Q43,325,83.5,264.5Q124,204,143,151Q162,98,221.5,85Q281,72,317.5,117.5Q354,163,389.5,206.5Q425,250,409,310Z;"
              ></animate>
            </path>
          </svg>
          <img id="img-move" src={imageOfMe} alt="Naima" />
        </motion.div>
      </div>
      <div id="aboutme-section" className="about-heading">
        <h1>About me</h1>
      </div>
      <div ref={ref} className="about-section">
        <div className="about-me">
          <p>
            I have become very interested in designing and developing responsive
            websites and continuously enjoy learning new technologies within web
            development.
          </p>
          <p>
            I have graduated from a two-year program called Frontend Development
            and have worked as a Frontend Developer at Ikea. I have also
            graduated from Technigo, where I upskilled my knowledge in
            JavaScript and React. During the course, we were assigned weekly
            projects and had the opportunity to work in a team-oriented
            structure, replicating the collaborative nature of real-world
            development teams. I have learned to write clean code and am able to
            create dynamic websites using HTML, CSS, JavaScript, React and
            Redux. I also have experience as a UX/UI designer and love to
            conduct user research, as well as creating wireframes and prototypes
            using Figma and Adobe XD.
          </p>
        </div>
        <div className="flower-image">
          <motion.img
            src={sunflower}
            alt="orange sunflower"
            animate={{
              rotate: [0, 200, 200, 0],
            }}
            transition={{ repeat: Infinity, delay: 0.1, duration: 10 }}
          ></motion.img>
        </div>
      </div>

      <div id="experience-section" className="skills_heading">
        <h1>Experience</h1>
      </div>
      <div>
        <div className="skills_heading_position">
          <div className="skills-box1">
            <ul className="list-group list-group-flush">
              <h3>Frontend</h3>
              <li className="list-group-item">HTML5</li>
              <li className="list-group-item">CSS/Sass</li>
              <li className="list-group-item">CSS Animations</li>
              <li className="list-group-item">Styled Components</li>
              <li className="list-group-item">Bootstrap</li>
              <li className="list-group-item">JavaScript</li>
              <li className="list-group-item">React</li>
              <li className="list-group-item">React Redux</li>
              <li className="list-group-item">Webflow</li>
              <li className="list-group-item">Lottie Animations</li>
              <li className="list-group-item">Framer Motion</li>
            </ul>

            <ul className="list-group list-group-flush">
              <h3>Backend</h3>
              <li className="list-group-item">Node.js</li>
              <li className="list-group-item">Express</li>
              <li className="list-group-item">Firebase</li>
              <li className="list-group-item">MongoDB</li>
              <li className="list-group-item">GraphQL</li>
            </ul>
          </div>

          <div className="skills-box2">
            <ul className="list-group list-group-flush">
              <h3>Design</h3>
              <li className="list-group-item">UX/UI Design</li>
              <li className="list-group-item">Responsive Web Design</li>
              <li className="list-group-item">Adobe Creative Cloud</li>
              <li className="list-group-item">Figma</li>
            </ul>

            <ul className="list-group list-group-flush">
              <h3>Other skills</h3>
              <li className="list-group-item">GitHub</li>
              <li className="list-group-item">Agile Methodology</li>
              <li className="list-group-item">Scrum</li>
              <li className="list-group-item">Organizational Skills</li>
              <li className="list-group-item">Time Management</li>
            </ul>
          </div>
        </div>
      </div>
      <h1 id="projects-section" className="projects-title">
        My work
      </h1>
      <div className="projects-container">
        <MoviesApp />
        <MusicApp />
        <TodoApp />
        <FoodQuiz />
        <Survey />
        <WeatherApp />
        <LibraryApp />
        <BringToLight />
        <DanceApp />
        <GalleryApp />
        <CoffeeLandingPage />
        <CodeTesting />
      </div>

      <div className="contact" id="contact-section">
        <h1>Reach me here</h1>
        <motion.div
          className="icons"
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 8px rgb(169,169,169)",
          }}
        >
          <a href="mailto: naima.maria.malik@gmail.com">
            <MdEmail id="email" />
          </a>

          <a
            href="https://www.linkedin.com/in/naima-maria-malik-6471ba82/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLinkedin id="linkedIn" />
          </a>
          <a
            href="https://github.com/bdnaima?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub id="gitHub" />
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
