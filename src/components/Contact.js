import { MdEmail } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';


const Contact = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center">Contact</h1>
        <div className="contact-icons">
          <div>
            <a href="mailto: naima.maria.malik@gmai.com"><MdEmail id="email" /></a>
            <p className="text-center">naima.maria.malik@gmai.com</p>
          </div>
          <div>
            <a href="https://github.com/bdnaima?tab=repositories"><FaGithub id="gitHub" /></a>
            <p>https://github.com/bdnaima</p>
          </div>
        </div>
      </div>

    </>
  );
}

export default Contact;