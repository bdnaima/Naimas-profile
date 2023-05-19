import orangeLaptop from "../assets/images/orange-laptop.png";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import imageOfMe from "../assets/images/Naima_at_work03.jpg";

const Home = () => {
  return (
    <>
      <div className="row-box">
        <div className="laptop">
          <h1>I'm Naima, Frontend developer & UX/UI Designer</h1>
          <img src={orangeLaptop} alt="orange laptop" />
        </div>
        <div className="stack">
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
        </div>
      </div>

      <div className="contact">
        <h1>Contact</h1>
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
      </div>
    </>
  );
};

export default Home;
