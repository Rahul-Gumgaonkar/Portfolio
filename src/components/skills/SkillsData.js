import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaCuttlefish, // For C++
  FaCode, // For C
  FaSitemap, // For DSA
  FaPython, // Example icon for Python
} from "react-icons/fa";
import { DiMongodb, DiJava } from "react-icons/di";

const skillsData = [
  {
    name: "C++",
    icon: <FaCuttlefish size={40} />,
    description: "System programming with C++.",
  },
  {
    name: "DSA",
    icon: <FaSitemap size={40} />,
    description: "Data Structures and Algorithms.",
  },
  {
    name: "C",
    icon: <FaCode size={40} />,
    description: "Procedural programming with C.",
  },
  {
    name: "Git",
    icon: <FaGitAlt size={40} />,
    description: "Version control with Git and GitHub for collaboration.",
  },
  {
    name: "Python",
    icon: <FaPython size={40} />, // Icon for Python
    description:
      "General-purpose programming language known for its simplicity and versatility.",
  },
  {
    name: "HTML",
    icon: <FaHtml5 size={40} />,
    description: "Building structure with semantic HTML5.",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt size={40} />,
    description: "Styling with CSS3 and modern features like Flexbox and Grid.",
  },
  {
    name: "JavaScript",
    icon: <FaJs size={40} />,
    description: "Building dynamic and interactive web pages with JavaScript.",
  },
  {
    name: "React",
    icon: <FaReact size={40} />,
    description:
      "Creating reusable components and building Single Page Applications with React.",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size={40} />,
    description: "Server-side development with Node.js and Express.js.",
  },
  {
    name: "MongoDB",
    icon: <DiMongodb size={40} />,
    description: "NoSQL database for scalable data storage.",
  },
  {
    name: "Java",
    icon: <DiJava size={40} />,
    description: "Object-oriented programming with Java.",
  },

  {
    name: "SQL",
    icon: <FaDatabase size={40} />,
    description: "Database management and querying with SQL.",
  },
];

export default skillsData;
