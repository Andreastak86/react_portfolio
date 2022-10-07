import React from "react";
import Pitch from "./Pitch";
import "./about.css";

import { FaCode } from "react-icons/fa";
import { FaFileContract } from "react-icons/fa";
import { ImFolderOpen } from "react-icons/im";

const About = () => {
  return (
    <section id='about'>
      <h2>Om Meg</h2>
      <h5>La Oss Bli Kjent</h5>
      <div className='container about__container'>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaCode className='about__icon' />
              <h5>Erfaring med kode:</h5>
              <small>Snart 1 år med front-end</small>
            </article>

            <article className='about__card'>
              <FaFileContract className='clients__icon' />
              <h5>Tidligere Erfaring:</h5>
              <small>15 år med salg</small>
            </article>

            <article className='about__card'>
              <ImFolderOpen className='projects__icon' />
              <h5>Prosjekter:</h5>
              <small>5 +</small>
            </article>
          </div>
          <Pitch />
          <div className='contact-btn'>
            <a href='#contact' className='btn btn-contact'>
              Kom I Kontakt
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
