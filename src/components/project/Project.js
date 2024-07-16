import React from "react";
import { IoLogoGithub, IoIosLink } from "react-icons/io";
import Ecommerce from "../../assests/Ecommerce.png";
import Notes from "../../assests/Notes.png";
import SocialMedia from "../../assests/socialmedia.png";
import Weather from "../../assests/Weather.png";
import TicTacToe from "../../assests/Tic_Tac_Toe.png";
import Todo from "../../assests/Todo.png";

import "./Project.css";

const projects = [
  {
    title: "Posterz – Ecommerce Website",
    description:
      "Built an e-commerce website using React with a Strapi backend for robust content management, enabling seamless product updates, user management, and secure transactions via a scalable API-driven architecture.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "Strapi",
      "Redux",
    ],
    img: Ecommerce,
    liveDeployment: "https://github.com/Rahul-Gumgaonkar/ECOMMERCE-Client",
    githubRepo: "https://github.com/Rahul-Gumgaonkar/ECOMMERCE-Strapi-Server",
  },
  {
    title: "Social Media Application",
    description:
      "Developed a social media application using the MERN stack with MongoDB for data storage and bcrypt for secure password encryption. Implemented Token based Authentication and Authorization using Simple JWT.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux",
    ],
    img: SocialMedia,
    liveDeployment: "https://github.com/Rahul-Gumgaonkar/social-media-client",
    githubRepo: "https://github.com/Rahul-Gumgaonkar/social-media-server",
  },
  {
    title: "Todo Application",
    description:
      "Developed a versatile notes application in React with CRUD operations for efficient note management, ensuring seamless user interaction through intuitive interfaces and robust organization capabilities.",
    techStack: ["HTML", "CSS", "JavaScript", "React.js", "Redux"],
    img: Todo,
    liveDeployment: "https://todo-application-gamma.vercel.app/",
    githubRepo: "https://github.com/Rahul-Gumgaonkar/Todo-Application",
  },
  {
    title: "Notes Application",
    description:
      "Sleek and intuitive notes app designed for organizing thoughts, tasks, and ideas with a user-friendly interface, promoting seamless productivity through its sleek design and efficient functionality.",
    techStack: ["HTML", "CSS", "JavaScript", "React.js", "Redux"],
    img: Notes,
    liveDeployment: "https://notes-application-1.netlify.app/",
    githubRepo: "https://github.com/Rahul-Gumgaonkar/notes-application",
  },
  {
    title: "Weather Application",
    description:
      "Developed a weather app using HTML, CSS, and JavaScript, integrating a weather API for real-time updates on weather conditions, forecasts, and location-based information with user-friendly design.",
    techStack: ["HTML", "CSS", "JavaScript"],
    img: Weather,
    liveDeployment: "https://weather-application-gamma-sable.vercel.app/",
    githubRepo: "https://github.com/Rahul-Gumgaonkar/Weather-Application",
  },
  {
    title: "Tic Tac Toe Game",
    description:
      "Created a Tic Tac Toe game using HTML, CSS, and JavaScript, offering interactive gameplay with responsive design, intuitive user interface, and logic for two-player functionality, enhancing user engagement and enjoyment.",
    techStack: ["HTML", "CSS", "JavaScript"],
    img: TicTacToe,
    liveDeployment: "https://tic-tac-toe-beta-beige.vercel.app/",
    githubRepo: "https://github.com/Rahul-Gumgaonkar/Tic-Tac-Toe",
  },
];

const Project = () => {
  return (
    <div id="project" className="project-container">
      {projects.map((project, index) => (
        <div key={index} className="project">
          <div className="project-img">
            <img src={project.img} alt={`${project.title} Preview`} />
          </div>
          <div className="project-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech-stack">
              <b>Tech Stack: </b>
              {project.techStack.map((tech, index) => (
                <span key={index}>
                  {tech}
                  {index < project.techStack.length - 1 ? "," : ""}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a
                href={project.liveDeployment}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoIosLink aria-label="Live Preview" />
                Live Preview
              </a>
              <a
                href={project.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoGithub aria-label="View Code" />
                View Code
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
