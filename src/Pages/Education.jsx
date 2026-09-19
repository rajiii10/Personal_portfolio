import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBookOpen,
  FaSchool,
  FaLaptopCode,
} from "react-icons/fa";

function Education() {
  const education = [
    {
      year: "2025",
      title: "B.E. Computer Science & Engineering",
      institution: "Francis Xavier Engineering College",
      percentage: 82,
      icon: <FaGraduationCap />,
    },
    {
      year: "HSC",
      title: "Higher Secondary Certificate",
      institution: "Rose Mary School",
      percentage: 70,
      icon: <FaBookOpen />,
    },
    {
      year: "SSLC",
      title: "Secondary School Leaving Certificate",
      institution: "Rose Mary School",
      percentage: 79,
      icon: <FaSchool />,
    },
  ];

  return (
    <section className="education" id="education">

      {/* BACKGROUND DECORATION */}
      <div className="education-grid-bg"></div>

     

      {/* HEADING */}
      <motion.div
        className="education-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p>MY JOURNEY</p>

        <h2>
          Education <span>&</span> Achievements
        </h2>

        <div className="heading-line"></div>

        <span>
          The academic foundation behind my journey into software development.
        </span>
      </motion.div>

      {/* TIMELINE */}
      <div className="education-timeline">

        <motion.div
          className="timeline-line"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.8 }}
        />

        {education.map((item, index) => (

          <motion.div
            className={`education-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
            key={item.title}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -70 : 70,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
            }}
          >

            {/* TIMELINE ICON */}
            <motion.div
              className="education-dot"
              whileHover={{
                scale: 1.15,
                rotate: 8,
              }}
            >
              {item.icon}
            </motion.div>

            {/* CARD */}
            <motion.div
              className="education-box"
              whileHover={{
                y: -8,
              }}
            >

              <div className="education-top">

                <span className="education-year">
                  {item.year}
                </span>

                <span className="education-percentage">
                  {item.percentage}%
                </span>

              </div>

              <h3>{item.title}</h3>

              <p>{item.institution}</p>

              <div className="percentage-bar">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${item.percentage}%`,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                    delay: index * 0.15 + 0.3,
                  }}
                />
              </div>

              <div className="education-bottom">
                <small>Academic Achievement</small>
                <span>{item.percentage}%</span>
              </div>

            </motion.div>

          </motion.div>
        ))}
      </div>

      {/* BOTTOM STAT */}
      <motion.div
        className="education-footer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <FaGraduationCap />
        <span>Computer Science • Software Development • Continuous Learning</span>
      </motion.div>

    </section>
  );
}

export default Education;