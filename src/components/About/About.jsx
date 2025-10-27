import React, { useEffect, useState, useRef } from "react";
import "./About.css";
import Theme_Pattern from "../../assets/theme.svg";
import Profile_img from "../../assets/Prem.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const skillsData = [
  { name: "Frontend", percentage: 90 },
  { name: "Backend", percentage: 80 },
  { name: "Database", percentage: 70 },
  { name: "Tools & DevOps", percentage: 60 },
  { name: "Other", percentage: 75 },
];

const About = () => {
  const skillsRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Detect if skills section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 } // trigger when 30% of the section is visible
    );

    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => {
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  return (
    <div id="about" className="about">
      {/* About Title */}
      <div className="about-title">
        <h1>About me</h1>
        <img src={Theme_Pattern} alt="theme" />
      </div>

      {/* About Sections */}
      <div className="about-sections">
        <div className="about-left">
          <img src={Profile_img} alt="profile" />
        </div>

        <div className="about-right">
          {/* About Paragraph */}
          <div className="about-para">
            <p>
              Hi, I’m Prem Kumar, a passionate Full-Stack Web Developer with a
              strong interest in building dynamic, user-focused web
              applications. I enjoy transforming ideas into interactive digital
              experiences using modern technologies like React, Node.js,
              Express, and MongoDB.
            </p>
            <p>
              I recently built a full-stack project inspired by Airbnb, where I
              implemented user authentication, responsive UI design, and
              database-driven property listings — giving me a solid hands-on
              understanding of both frontend and backend development.
            </p>
            <p>
              Currently, I’m focused on improving my skills in JavaScript, APIs,
              and cloud deployment, while exploring best practices in scalable
              web architecture. I’m also seeking paid virtual internships or web
              development roles where I can apply my skills to real-world
              projects, learn from professionals, and grow as a developer.
            </p>
            <p>
              When I’m not coding, I enjoy learning about new technologies,
              improving UI/UX designs, and exploring creative ideas that make
              products more user-friendly.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="about-skills" ref={skillsRef}>
        {skillsData.map((skill, index) => (
          <div className="about-skill" key={index}>
            <p>{skill.name}</p>
            <div className="skill-circle">
              <CircularProgressbar
                value={visible ? skill.percentage : 0} // animate from 0 to percentage
                text={`${visible ? skill.percentage : 0}%`}
                styles={buildStyles({
                  pathColor: "#DF8908",
                  textColor: "#B415FF",
                  trailColor: "#eee",
                  textSize: "24px",
                })}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Achievements Section */}
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>Deployment</h1>
          <p>
            Developed a Full-Stack Airbnb Clone using React, Node.js, and
            MongoDB — featuring authentication, dynamic routing, and responsive
            UI.
          </p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>Rest API</h1>
          <p>Created REST APIs for secure data handling and user management.</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>Knowledge</h1>
          <p>Completed online courses in Java, DSA, and Computer Networks.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
