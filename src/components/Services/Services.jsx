import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from "./resume.pdf";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <p style={{ color: darkMode ? "white" : "", fontSize: 17 }}>
          I specialize in crafting appealing user interfaces and seamless user
          experiences as a frontend web developer and developing server-side
          applications, designing scalable APIs, and managing databases
          efficiently as a backend developer. Additionally, I create
          cross-platform mobile applications for iOS and Android, ensuring
          intuitive user interfaces and seamless integration with backend
          services, Throughout my work, I prioritize clean code, adherence to
          best practices, and effective communication, delivering exceptional
          results to meet client needs and exceed expectations.
        </p>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right   */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "1rem" }}
          whileInView={{ left: "5rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Responsive Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "25rem", top: "2rem" }}
          whileInView={{ left: "20rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Mobile App Development"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "20rem", left: "-5rem" }}
          whileInView={{ left: "5rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Frontend Web Development"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        {/* 4th */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "20rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Backend Web Development"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>

        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
