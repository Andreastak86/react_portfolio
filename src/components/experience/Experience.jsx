import React from "react";
import "./experience.css";
import { SiHtml5 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { FaReact } from "react-icons/fa";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Hvilke Erfaringer Jeg Har</h5>
      <h2>Min Erfaring</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <SiHtml5 />
              <h4>HTML</h4>
              <small className='text-light'>Middels Erfaring</small>
            </article>
            <article className='experience__details'>
              <SiJavascript />
              <h4>JavaScript</h4>
              <small className='text-light'>Kommer seg for hver dag</small>
            </article>
            <article className='experience__details'>
              <SiCss3 />
              <h4>CSS</h4>
              <small className='text-light'>Middels Erfaring</small>
            </article>
            <article className='experience__details'>
              <FiFigma />
              <h4>Figma</h4>
              <small className='text-light'>God Erfaring</small>
            </article>
            <article className='experience__details'>
              <FaReact />
              <h4>React</h4>
              <small className='text-light'>Lærer stadig mer</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
