import { MdEmail } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';


const Contact = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center">Contact</h1>
        <div className="contact-icons">
          <div>
            <a href="mailto: naima.maria.malik@gmail.com"><MdEmail id="email" /></a>
            <p className="text-center">naima.maria.malik@gmail.com</p>
          </div>
          <div>
            <a href="https://github.com/bdnaima?tab=repositories" target="_blank" rel="noreferrer"><FaGithub id="gitHub" /></a>
            <p>https://github.com/bdnaima</p>
          </div>
        </div>
      </div>

    </>
  );
}

export default Contact;