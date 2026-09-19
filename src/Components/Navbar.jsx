import {
  FaHome,
  FaUser,
  FaCode,
  FaFolderOpen,
  FaBriefcase,
  FaGraduationCap,
  FaEnvelope
} from "react-icons/fa";

import { useEffect, useState } from "react";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < window.innerHeight * 0.7) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${showNavbar ? "navbar-visible" : "navbar-hidden"}`}>

      {/* LOGO */}
      <a href="#home" className="nav-logo">
        <span>&lt;/&gt;</span>

        <div className="nav-logo-text">
          <strong>Rajeshwari</strong>
          <small>JAVA FULL STACK</small>
        </div>
      </a>

      {/* NAVIGATION */}
      <div className="nav-links">

        <a href="#home">
          <FaHome />
          <span>Home</span>
        </a>

        <a href="#about">
          <FaUser />
          <span>About</span>
        </a>

        <a href="#skills">
          <FaCode />
          <span>Skills</span>
        </a>

        <a href="#projects">
          <FaFolderOpen />
          <span>Projects</span>
        </a>

        <a href="#experience">
          <FaBriefcase />
          <span>Experience</span>
        </a>

        <a href="#education">
          <FaGraduationCap />
          <span>Education</span>
        </a>

        <a href="#contact">
          <FaEnvelope />
          <span>Contact</span>
        </a>

      </div>

    </nav>
  );
}

export default Navbar;