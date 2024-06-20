import React from "react";
import "./About.css";
import profile_img from "../../assests/Photo.png";

function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hello, I am Rahul Gumgaonkar, currently pursuing a B.Tech in
              Computer Technology at Yeshwantrao Chavan College of Engineering,
              Nagpur, Maharashtra. My aggregate CGPA is 8.49. My interests lie
              in Competitive Programming, DSA, and Full Stack Web Development. I
              have completed two Full-Stack projects: an E-Commerce site and a
              Social Media Application, along with various frontend projects. My
              web development tech stack includes HTML, CSS, JavaScript,
              React.js, MongoDB, and Node.js. I am proficient in programming
              with C and C++, and I also possess a foundational understanding of
              Python. I consider myself an enthusiastic learner and always
              strive to excel in any assigned task.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
