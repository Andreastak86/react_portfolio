import React from "react";
import "./about.css";
import Me from "../../assets/Andreas-profile.jpg";
import { ImUserTie } from "react-icons/im";
import { MdEmojiPeople } from "react-icons/md";
import { GiOpenFolder } from "react-icons/gi";

const About = () => {
  return (
    <section id='about'>
      <h5>La oss bli kjent</h5>
      <h2>Om Meg</h2>
      <div className='container about_container'>
        <div className='about__me'>
          <div className='about__me-img'>
            <img src={Me} alt='pic of me' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <ImUserTie className='about__icon' />
              <h5>Erfaring:</h5>
              <small>15 år med salg og snart 1 år med front-end</small>
            </article>

            <article className='about__card'>
              <MdEmojiPeople className='clients__icon' />
              <h5>Klienter:</h5>
              <small>0</small>
            </article>

            <article className='about__card'>
              <GiOpenFolder className='projects__icon' />
              <h5>Prosjekter:</h5>
              <small>10 ++</small>
            </article>
          </div>
          <p>
            brhvvvvvvvvvvvvvvvvvvvvvvvviervbk
            <br />
            djvbkbfvhbearvbbdfjkvbfdhavbebaeaehdfavyudbavbhdbfvfv
          </p>
          <a href='#contact' className='btn btn-primary'>
            La oss snakke
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
