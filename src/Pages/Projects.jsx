import { motion } from "framer-motion";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import cravecart from "../assets/project1.png";

import smartHire from "../assets/project2.jpg";

import library from "../assets/projects2.jpeg";

import ecommerce from "../assets/Project4.png";

function Projects() {
  const projects = [
    {
      title: "CraveCart",
      image: cravecart,
      description:
        "Food ordering web application for browsing restaurants, viewing food items, managing cart and placing orders.",
      tech: "Java • Spring Boot • React • MySQL",
      github: true,
    },

    {
      title: "Smart Hire",
      image: smartHire,
      description:
        "Job recruitment platform connecting candidates, HR and administrators with role-based features and application management.",
      tech: "Java • Spring Boot • React • MySQL",
      github: true,
    },

    {
      title: "Library Management System",
      image: library,
      description:
        "Library web application for managing books, members, borrowing and returning operations.",
      tech: "Java • Spring Boot • React • MySQL",
      github: true,
    },

    {
      title: "E-Commerce",
      image: ecommerce,
      description:
        "Online shopping application with product management and customer-focused shopping features.",
      tech: "Java • Spring Boot • React • MySQL",
      github: true,
    },
  ];

  return (
    <section className="projects" id="projects">

      <div className="section-heading">

        <p>MY WORK</p>

        <h2>
          Featured <span>Projects</span>
        </h2>

        <div className="projects-heading-line"></div>

        <small>
          A collection of projects built with modern web technologies.
        </small>

      </div>

      <div className="project-container">

        {projects.map((project, index) => (

          <motion.div
            className="project-card"
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
          >

            <div className="project-image">

              <img
                src={project.image}
                alt={project.title}
              />

              <div className="project-number">
                0{index + 1}
              </div>

            </div>

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span className="project-tech">
                {project.tech}
              </span>

              {project.github && (
                <a
                  href="https://github.com/rajiii10"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  <FaGithub />
                  GitHub
                  <FaExternalLinkAlt />
                </a>
              )}

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Projects;