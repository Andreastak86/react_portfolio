import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Dette har jeg jobbet med den siste tiden</h5>
      <h2>Min Portefølje</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <h3>Proskjekt-navn</h3>
            <a
              href='https://github.com/Andreastak86/Drum-kit.2.0'
              className='btn'
              alt='Drum-kit project'
            >
              Drum-Kit 2.0
            </a>
            <a
              href='https://andreastak86.github.io/Drum-kit.2.0/'
              className='btn btn-primary'
            >
              Live Demo
            </a>
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
            >
              Live Demo
            </a>
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
