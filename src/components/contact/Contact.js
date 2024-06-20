import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";

import "./Contact.css";

function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Connect</h1>
          <div className="contact-details">
            <div className="contact-detail">
              <MdEmail className="contact-icon" />
              <p>rahulgumgaonkar2@gmail.com</p>
            </div>
            <div className="contact-detail">
              <FaPhone className="contact-icon" />
              <p>+91-9529442647</p>
            </div>
            <div className="contact-detail">
              <FaMapMarkerAlt className="contact-icon" />
              <p>Nagpur, Maharashtra</p>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Enter your message"
          ></textarea>
          <div type="submit" className="contact-submit">
            Submit now
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
