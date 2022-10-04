import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/drum-kit.jpg";
import IMG2 from "../../assets/collatz.jpg";
import IMG3 from "../../assets/to-do.jpg";
import IMG4 from "../../assets/Cta-oppgave.jpg";

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Dette har jeg jobbet med den siste tiden</h5>
      <h2>Min Portefølje</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='project-pictures' />
            <h3>Drum-Kit</h3>
          </div>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/Andreastak86/Drum-kit.2.0'
              className='btn'
              alt='Drum-kit project'
            >
              Drum-Kit
            </a>
            <a
              href='https://andreastak86.github.io/Drum-kit.2.0/'
              className='btn btn-primary'
              target='_blank'
              rel='noreferrer'
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt='project-pictures' />
            <h3>Collatz Formel</h3>
          </div>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/Andreastak86/Collatz-Oppgave'
              className='btn'
              alt='Collatz-task'
            >
              Collatz Formel
            </a>
            <a
              href='https://andreastak86.github.io/Collatz-Oppgave'
              className='btn btn-primary'
              target='_blank'
              rel='noreferrer'
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt='project-pictures' />
            <h3>To-Do List</h3>
          </div>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/Andreastak86/To-Do-List-2808'
              className='btn'
              alt='To-do-List'
            >
              To-Do List
            </a>
            <a
              href='https://andreastak86.github.io/To-Do-List-2808/'
              className='btn btn-primary'
              target='_blank'
              rel='noreferrer'
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt='project-pictures' />
            <h3>Click to Action</h3>
          </div>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/Andreastak86/Oppgave-planleggingsuke'
              className='btn'
              alt='CTA-Oppgave'
            >
              ClickToAction
            </a>
            <a
              href='https://andreastak86.github.io/Oppgave-planleggingsuke/'
              className='btn btn-primary'
              target='_blank'
              rel='noreferrer'
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
