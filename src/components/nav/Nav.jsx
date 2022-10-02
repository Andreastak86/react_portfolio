import React from "react";
import "./nav.css";
import { ImHome } from "react-icons/im";
import { GoPerson } from "react-icons/go";
import { MdWork } from "react-icons/md";
import { MdContactPage } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#top");
  return (
    <nav>
      <a href='#top' className={activeNav === "#top" ? "active" : ""}>
        <ImHome />
      </a>
      <a
        href='#about'
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#" ? "active" : ""}
      >
        <GoPerson />
      </a>
      <a href='#experience'>
        <MdWork />
      </a>
      <a href='#services'>
        <MdContactPage />
      </a>
      <a href='#contact'>
        <MdDesignServices />
      </a>
    </nav>
  );
};

export default Nav;
