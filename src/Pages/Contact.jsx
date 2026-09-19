import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

function Contact() {
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hxgxmar",
        "template_tfezikf",
        e.target,
        "n1hGTRnl3boBohBMl"
      )
      .then(
        () => {
          setSuccess("Message has been sent successfully!");
          e.target.reset();
        },
        () => {
          setSuccess("");
        }
      );
  };

  return (
    <motion.section
      className="contact"
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="contact-heading">
        <p>GET IN TOUCH</p>

        <h2>
          Let's <span>Connect</span>
        </h2>

        <div className="contact-line"></div>

        <span>
          Have an opportunity or want to connect? Feel free to reach out.
        </span>
      </div>

      <div className="contact-container">

        <div className="contact-details">
          <h3>Let's talk</h3>

          <p>
            I'm open to Java Full Stack Developer opportunities,
            collaborations and professional connections.
          </p>

          <div className="contact-item">
            <FaEnvelope />

            <div>
              <small>Email</small>
              <span>rajibecse21@gmail.com</span>
            </div>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt />

            <div>
              <small>Location</small>
              <span>Chennai, India</span>
            </div>
          </div>

          <div className="social-links">

            <a
              href="https://github.com/rajiii10"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/rajeshwari-p-861074295"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
              LinkedIn
            </a>

          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={sendEmail}
        >
          <div className="form-group">
            <label>Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>

            <textarea
              name="message"
              rows="6"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          <input
            type="hidden"
            name="title"
            value="Portfolio Contact Message"
          />

          <button type="submit">
            <FaEnvelope />
            Send Message
          </button>

          {success && (
            <p className="success-message">
              {success}
            </p>
          )}

        </form>
      </div>
    </motion.section>
  );
}

export default Contact;