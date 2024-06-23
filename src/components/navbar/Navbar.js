import React, { useRef, useState } from "react";
import "./Navbar.css";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <h2>
        <a href="#home" className="name">
          Rahul Gumgaonkar
        </a>
        <AiOutlineMenu className="menu-open" onClick={openMenu} />
      </h2>
      <ul ref={menuRef} className="nav-menu">
        <RxCross2 className="menu-close" onClick={closeMenu} />

        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skill">Skills</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a className="nav-connect" href="#contact">
            Connect With Me
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
