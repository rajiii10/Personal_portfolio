import {
  FaJava,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt
} from "react-icons/fa";

function Skills() {
  return (
    <section className="skills" id="skills">

      <div className="skills-heading">
        <p>MY EXPERTISE</p>

        <h2>
          Technical <span>Skills</span>
        </h2>

        <div className="skills-line"></div>

        <span>
          Technologies and tools I use to build modern web applications.
        </span>
      </div>

      <div className="skills-list">

        <span>
          <FaJava />
          Java
        </span>

        <span>
          Spring Boot
        </span>

        <span>
          <FaReact />
          React.js
        </span>

        <span>
          <FaJs />
          JavaScript
        </span>

        <span>
          MySQL
        </span>

        <span>
          <FaHtml5 />
          HTML
        </span>

        <span>
          <FaCss3Alt />
          CSS
        </span>

        <span>
          Hibernate / JPA
        </span>

        <span>
          REST API
        </span>

        <span>
          <FaGitAlt />
          Git & GitHub
        </span>

        <span>
          Postman
        </span>

      </div>

    </section>
  );
}

export default Skills;