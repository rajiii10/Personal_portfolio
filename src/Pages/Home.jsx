import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaDownload,
  FaCode
} from "react-icons/fa";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import resume from "../assets/resume.pdf";
import profile from "../assets/Profile.jpg";
import profile1 from "../assets/Profile1.jpeg";

function Home() {
  const photos = [profile, profile1];

  const [currentPhoto, setCurrentPhoto] = useState(0);

  // Typing animation for name
  const fullName = "Rajeshwari";
  const [typedName, setTypedName] = useState("");

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < fullName.length) {
        setTypedName(fullName.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home" id="home">

      <div className="home-grid"></div>

      <div className="home-orb orb-one"></div>
      <div className="home-orb orb-two"></div>

      <div className="home-content">

        {/* LEFT */}
        <motion.div
          className="home-text"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >

          <p className="hello">HELLO, I'M</p>

          {/* TYPING ANIMATION - NAME */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut"
            }}
          >
            {typedName}
            <span className="typing-cursor">|</span>
          </motion.h1>

          {/* TITLE */}
          <motion.div
            className="title-line"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
              ease: "easeOut"
            }}
          >
            <FaCode />
            <h2>Java Full Stack Developer</h2>
          </motion.div>

          <p className="intro">
            I create scalable web applications with clean backend
            architecture, modern frontend experiences and a strong
            focus on solving real-world problems.
          </p>

          <div className="home-buttons">

            <motion.a
              href="#projects"
              className="primary-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              Explore My Work
              <FaArrowRight />
            </motion.a>

            <motion.a
              href={resume}
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              <FaDownload />
              Resume
            </motion.a>

          </div>

          <div className="home-socials">

            <a
              href="https://github.com/rajiii10"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/rajeshwari-p-861074295"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

          </div>

        </motion.div>


        {/* RIGHT */}
        <motion.div
          className="home-visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >

          {/* ADVANCED ORBIT RINGS */}
          <motion.div
            className="visual-ring ring-one"
            animate={{ rotate: 360 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          ></motion.div>

          <motion.div
            className="visual-ring ring-two"
            animate={{ rotate: -360 }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear"
            }}
          ></motion.div>


          {/* PHOTO */}
          <motion.div
            className="profile-container"
            animate={{
              y: [0, -8, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >

            {photos.map((photo, index) => (
              <motion.img
                key={photo}
                src={photo}
                alt="Rajeshwari P"
                className="profile-photo"
                animate={{
                  opacity: currentPhoto === index ? 1 : 0,
                  scale: currentPhoto === index ? 1 : 1.04
                }}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut"
                }}
              />
            ))}

            <div className="photo-corner corner-one"></div>
            <div className="photo-corner corner-two"></div>

          </motion.div>


          {/* PHOTO INDICATORS */}
          <div className="photo-indicators">

            {photos.map((_, index) => (
              <span
                key={index}
                className={currentPhoto === index ? "active" : ""}
              ></span>
            ))}

          </div>

        </motion.div>

      </div>


      {/* SCROLL */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 7, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity
        }}
      ></motion.div>

    </section>
  );
}

export default Home;