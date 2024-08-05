import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-inner-container contact-inner-container-md contact-inner-container-lg">
        <h2 className="contact-title">Contact Me</h2>
        <div className="contact-flex contact-flex-md">
          <div className="contact-text">
            <h3 className="contact-heading">Let's Talk</h3>
            <p className="contact-paragraph">
              I'm open to discussing web development projects or partnership
              opportunities.
            </p>
            <div className="contact-info">
              <FaEnvelope className="contact-icon" />
              <a href="mailto:nasasirakenn@gmail.com" className="contact-link">
                nasasirakenn@gmail.com
              </a>
            </div>
            <div className="contact-info">
              <FaPhone className="contact-icon" />
              <span>+256771626007</span>
            </div>
            <div className="contact-info">
              <FaMapMarkedAlt className="contact-icon" />
              <span> Kampala, Central, Uganda</span>
            </div>
          </div>
          <div className="contact-form">
            <form className="space-y-4">
              <div className="contact-form-group">
                <label htmlFor="name" className="contact-form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="contact-form-input"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="contact-form-group">
                <label htmlFor="email" className="contact-form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="contact-form-input"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="contact-form-group">
                <label htmlFor="message" className="contact-form-label">
                  Message
                </label>
                <textarea
                  type="text"
                  className="contact-form-textarea"
                  rows="5"
                  placeholder="Enter Your Message"
                />
              </div>
              <button className="contact-button">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
