import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { SiLeetcode, SiCodeforces, SiGeeksforgeeks } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile_img from "../../assests/Photo.png";
import "./Profile.css";

function Profile() {
  const skills = [
    "Full Stack Web Developer",
    "MERN Stack Developer",
    "Front End Developer",
    "React Developer",
    "Back End Developer",
  ];
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: skills,
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, [skills]);

  return (
    <div id="home" className="profile">
      <div className="left">
        <h1>Hii, I'm Rahul</h1>
        <h1>Gumgaonkar</h1>
        <div className="skill-container">
          <span ref={typedRef} className="typed"></span>
        </div>
        <div className="profile-action">
          <div>
            <a className="profile-connect" href="#contact">
              Connect With Me
            </a>
          </div>
          <div className="profile-resume">My Resume</div>
        </div>

        <div className="social-icons">
          <a
            href="http://www.linkedin.com/in/rahul-gumgaonkar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Rahul-Gumgaonkar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://leetcode.com/u/Rahul_Gumgaonkar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode />
          </a>
          {/* <a href="http://" target="_blank" rel="noopener noreferrer">
            <SiCodeforces />
          </a> */}
          <a
            href="https://www.geeksforgeeks.org/user/rahulgumgaonkar4/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGeeksforgeeks />
          </a>
        </div>
      </div>
      <div className="right">
        <img src={profile_img} alt="Profile_Img" />
      </div>
    </div>
  );
}

export default Profile;
