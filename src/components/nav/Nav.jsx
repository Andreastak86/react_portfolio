import React from "react";
import "./nav.css";
import { ImHome } from "react-icons/im";
import { GoPerson } from "react-icons/go";
import { MdWork } from "react-icons/md";
import { MdContactPage } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href='#top'
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <ImHome />
      </a>
      <a
        href='#about'
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        {" "}
        <GoPerson />
      </a>
      <a
        href='#experience'
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <MdWork />
      </a>
      <a
        href='#services'
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <MdContactPage />
      </a>
      <a
        href='#contact'
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdDesignServices />
      </a>
    </nav>
  );
};

export default Nav;
