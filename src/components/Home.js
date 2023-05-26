import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import orangeLaptop from "../assets/images/orange-laptop.png";
import imageOfMe from "../assets/images/Naima_at_work03.jpg";
import flower from "../assets/images/flower.png";
import sunflower from "../assets/images/sunflower.png";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { SiLinkedin } from "react-icons/si";

const Home = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }

    if (!inView) {
      animation.start({ x: "100vw" });
    }
  }, [inView]);

  return (
    <>
      <div className="row-box">
        <motion.div
          className="laptop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 2 }}
        >
          <h1>I'm Naima, Frontend developer & UX/UI Designer</h1>
          <img src={orangeLaptop} alt="orange laptop" />
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
                  style={{ stopColor: "rgb(255, 95, 109)" }}
                ></stop>
                <stop
                  offset="100%"
                  style={{ stopColor: "rgb(255, 165, 0)" }}
                ></stop>
              </linearGradient>
            </defs>
            <path fill="url(#gradient)">
              <animate
                attributeName="d"
                dur="10000ms"
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
          <img id="img-move" src={imageOfMe} alt="picture of Naima" />
        </motion.div>
      </div>
      <div ref={ref} className="about-section">
        <div className="flower-image">
          <img src={flower} alt="purple flower" />
        </div>
        <motion.div className="about-me" animate={animation}>
          <h1>ABOUT ME</h1>
          <p>
            I have become passionate in designing and developing responsive
            websites for the past five years and continuously enjoy learning new
            technologies within web development.
          </p>
          <p>
            I have also graduated from a two-year program called Frontend
            Development and have worked as a junior frontend developer at Ikea.
            I have learned to write clean code and am able to create dynamic
            websites using HTML, CSS, JavaScript and React. I also have
            experience as a UX/UI designer and love to conduct user research, as
            well as creating wireframes and prototypes using Figma and Adobe XD.
          </p>
        </motion.div>
      </div>

      <div>
        <div className="skills_heading_position">
          <div className="skills_heading">
            <GiSkills className="skills_icon_person" />
            <h1>Skills</h1>
          </div>
          <div className="skills-box1">
            <ul className="list-group list-group-flush">
              <h3>Frontend</h3>
              <li className="list-group-item">HTML5</li>
              <li className="list-group-item">CSS</li>
              <li className="list-group-item">CSS Animations</li>
              <li className="list-group-item">Bootstrap</li>
              <li className="list-group-item">JavaScript</li>
              <li className="list-group-item">React</li>
              <li className="list-group-item">React Native</li>
              <li className="list-group-item">Framer Motion</li>
            </ul>

            <ul className="list-group list-group-flush">
              <h3>Backend</h3>
              <li className="list-group-item">Node.js</li>
              <li className="list-group-item">Express</li>
              <li className="list-group-item">Firebase</li>
              <li className="list-group-item">MongoDB</li>
            </ul>
          </div>
        </div>

        <div className="about-section">
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
          <div className="skills-box2">
            <ul className="list-group list-group-flush">
              <h3>Design</h3>
              <li className="list-group-item">Responsive Web Design</li>
              <li className="list-group-item">Adobe Creative Cloud</li>
              <li className="list-group-item">Figma</li>
            </ul>

            <ul className="list-group list-group-flush">
              <h3>Other skills</h3>
              <li className="list-group-item">GitHub</li>
              <li className="list-group-item">UX/UI Design</li>
              <li className="list-group-item">Agile Methodology</li>
              <li className="list-group-item">Scrum</li>
              <li className="list-group-item">Organizational Skills</li>
              <li className="list-group-item">Time Management</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="contact">
        <h1>Reach me here</h1>
        <motion.div
          className="icons"
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 8px rgb(255, 255, 255)",
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
