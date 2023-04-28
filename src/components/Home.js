import orangeLaptop from "../assets/images/orange-laptop.png";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="picture-orange">
        <div className="heading">
          <h1>Hi I'm Naima, Front-end developer & UX/UI Designer</h1>
          <img src={orangeLaptop} alt="Laptop" />
        </div>
      </div>

      <div className="icons">
        <a href="mailto: naima.maria.malik@gmail.com">
          <MdEmail id="email" />
        </a>
        <a
          href="https://github.com/bdnaima?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub id="gitHub" />
        </a>
      </div>
    </>
  );
};

export default Home;
