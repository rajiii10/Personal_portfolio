import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaBriefcase,
  FaGraduationCap
} from "react-icons/fa";

function Experience() {

  const experiences = [
    {
      number: "01",
      title: "Web Development Intern",
      company: "Nanomyte Productions",
      type: "Internship",
      icon: <FaLaptopCode />,
      description:
        "Worked on web development and digital marketing tasks, including company website content and basic website development."
    },
    {
      number: "02",
      title: "Software Development Intern",
      company: "InternPe",
      type: "Online Internship",
      icon: <FaBriefcase />,
      description:
        "Gained practical experience through online development tasks and strengthened programming and problem-solving skills."
    },
    {
      number: "03",
      title: "Java Full Stack Training",
      company: "QSpiders",
      type: "Professional Training",
      icon: <FaGraduationCap />,
      description:
        "Completed practical Java Full Stack training covering Java, Spring Boot, React.js, MySQL and web application development."
    }
  ];

  return (
    <section className="experience" id="experience">

      <div className="experience-bg"></div>

      <motion.div
        className="experience-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p>MY JOURNEY</p>

        <h2>
          Experience <span>&</span> Training
        </h2>

        <div className="heading-line"></div>

        <span>
          My professional experience and continuous learning journey.
        </span>
      </motion.div>


      <div className="experience-cards">

        {experiences.map((item, index) => (

          <motion.div
            className="experience-card"
            key={item.title}
            initial={{
              opacity: 0,
              y: 45
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              amount: 0.2
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.15
            }}
            whileHover={{
              y: -10
            }}
          >

            <div className="experience-card-header">

              <span className="experience-number">
                {item.number}
              </span>

              <div className="experience-icon">
                {item.icon}
              </div>

            </div>


            <span className="experience-type">
              {item.type}
            </span>


            <h3>
              {item.title}
            </h3>


            <h4>
              {item.company}
            </h4>


            <div className="experience-divider"></div>


            <p>
              {item.description}
            </p>


            <div className="experience-card-footer">
              <span>EXPERIENCE</span>
              <span>0{index + 1}</span>
            </div>

          </motion.div>

        ))}

      </div>


      <motion.div
        className="experience-footer"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <span>
          BUILDING • LEARNING • GROWING
        </span>
      </motion.div>

    </section>
  );
}

export default Experience;