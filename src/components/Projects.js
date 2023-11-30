import { motion } from "framer-motion";
import "../styles/Projects.css";

//Components
import MusicApp from "./projects/MusicApp";
import WeatherApp from "./projects/WeatherApp";
import LibraryApp from "./projects/LibraryApp";
import BringToLight from "./projects/BringToLight";
import DanceApp from "./projects/DanceApp";
import GalleryApp from "./projects/GalleryApp";
import CoffeeLandingPage from "./projects/CoffeeLandingPage";
import CodeTesting from "./projects/CodeTesting";

//Pictures
import branch from "../assets/images/branch-swirl.png";
import Survey from "./projects/Survey";
import MoviesApp from "./projects/MoviesApp";

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
        <MoviesApp />
        <MusicApp />
        <Survey />
        <WeatherApp />
        <LibraryApp />
        <BringToLight />
        <DanceApp />
        <GalleryApp />
        <CoffeeLandingPage />
        <CodeTesting />
      </div>
    </>
  );
};
export default Projects;
