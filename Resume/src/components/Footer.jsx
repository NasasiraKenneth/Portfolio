import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container footer-container-md footer-container-lg">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="footer-header">Kenn</h3>
            <p className="footer-text">
              Full-Stack Developer based in the Uganda, specializing in web and
              software development.
            </p>
          </div>
        </div>

        <div className="footer-bottom footer-bottom-md">
          <p className="footer-bottom-text">
            &copy; {new Date().getFullYear()} Kenn. All rights reserved.
          </p>
          <div className="footer-social-links">
            <a href="#" className="footer-social-link">
              <FaFacebook />
            </a>
            <a href="#" className="footer-social-link">
              <FaTwitter />
            </a>
            <a href="#" className="footer-social-link">
              <FaLinkedin />
            </a>
            <a href="#" className="footer-social-link">
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="footer-link">
              Privacy
            </a>
            <a href="#" className="footer-link">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
