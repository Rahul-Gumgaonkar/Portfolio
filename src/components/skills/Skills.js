import React from "react";
import skillsData from "./SkillsData";
import "./Skills.css";

const Skills = () => {
  return (
    <div id="skill" className="skills-container">
      <h2 className="skills-heading">My Skills</h2>
      <div className="skills-list">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-name">{skill.name}</h3>
            {/* <p className="skill-description">{skill.description}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
