import orangeLaptop from '../assets/images/orange-laptop.png';
import { MdEmail } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';


const Home = () => {
  return (
    <>
      <div className="App">
        <h1>Hi I'm Naima, Junior front-end developer.</h1>
        <img src={orangeLaptop} alt="Laptop"/>
      </div>
      <div className="icons">
        <a href="mailto: naima.maria.malik@gmai.com"><MdEmail id="email"/></a>
        <a href="https://github.com/bdnaima?tab=repositories"><FaGithub id="gitHub"/></a>
      </div>
    </>
  );
}

export default Home;