import "./skills.css";
import react from "../../img/skills/react.png";
import firebase from "../../img/skills/firebase.png";
import node from "../../img/skills/node.png";
import mongo from "../../img/skills/mongo.png";
import tailwind from "../../img/skills/tailwind.jpg";

import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="container">
      <div className="s-desc-cont">
        <h1>My skills</h1>
        <p className="s-desc">
          With over three years of experience, I have owned my expertise in
          full-stack development, skillfully employing React.js for front-end
          development and Node.js for server-side logic. My proficiency extends
          to mySQL MongoDB for efficient data storage and Firebase/Supabase for
          real-time data synchronization and authentication, Moreover, I have
          excelled in mobile app development using React Native. I prioritize
          intuitive user experiences through responsive designs crafted with
          Tailwind CSS, CSS3 and Styled-Components.
        </p>
      </div>
      <div className="skills">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="s-mainCircle"
        >
          <div className="s-secCircle">
            <img src={react} alt="" />
          </div>
          <div className="s-secCircle">
            <img src={firebase} alt="" />
          </div>
          <div className="s-secCircle">
            <img src={node} alt="" />
          </div>{" "}
          <div className="s-secCircle">
            <img src={mongo} alt="" />
          </div>
          <div className="s-secCircle">
            <img src={tailwind} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="s-backCircle blueCircle"></div>
        <div className="s-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Skills;
