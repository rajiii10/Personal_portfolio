import { motion } from "framer-motion";

function About() {

  return (

    <section className="about" id="about">

      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <div className="about-code">

          <div className="code-header">
            <span className="code-dot red"></span>
            <span className="code-dot yellow"></span>
            <span className="code-dot green"></span>
            <span className="code-file">about.js</span>
          </div>

          <div className="code-body">
            <p><span>const</span> developer = {"{"}</p>

            <p>
              &nbsp;&nbsp;name: <b>"Rajeshwari"</b>,
            </p>

            <p>
              &nbsp;&nbsp;role: <b>"Java Full Stack Developer"</b>,
            </p>

            <p>
              &nbsp;&nbsp;education: <b>"B.E. Computer Science"</b>,
            </p>

            <p>
              &nbsp;&nbsp;passion: <b>"Building Web Applications"</b>,
            </p>

            <p>
              &nbsp;&nbsp;skills: [
            </p>

            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;<b>"Java"</b>, <b>"Spring Boot"</b>,
            </p>

            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;<b>"React.js"</b>, <b>"MySQL"</b>
            </p>

            <p>&nbsp;&nbsp;]</p>

            <p>{"};"}</p>
          </div>

        </div>


        <div className="about-info">

          <p className="about-label">ABOUT ME</p>

          <h2>
            About <span>Me</span>
          </h2>

          <div className="about-line"></div>

          <p className="about-text">
            I am a passionate Java Full Stack Developer and Computer Science
            graduate with a strong interest in building modern web applications.
            I have hands-on experience with Java, Spring Boot, React.js, MySQL,
            and REST APIs through projects, internships, and practical training.
            I enjoy creating clean, user-friendly applications and turning ideas
            into practical solutions. I am a quick learner with a strong interest
            in exploring new technologies and improving my problem-solving skills.
            I enjoy solving real-world challenges and continuously growing as a
            software developer.
          </p>

        </div>

      </motion.div>

    </section>
  );
}

export default About;