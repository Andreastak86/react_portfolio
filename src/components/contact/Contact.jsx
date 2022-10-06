import React from "react";
import "./contact.css";
import { SiMaildotru } from "react-icons/si";
import { SiMessenger } from "react-icons/si";
import { SiDiscord } from "react-icons/si";

const Contact = () => {
  return (
    <section id='contact'>
      <h5>La Oss Snakke</h5>
      <h2>Kontakt Meg</h2>

      <div className='container contact__container'>
        <div className='contact__potions'>
          <article className='contact__option'>
            <SiMaildotru />
            <h4>Epost</h4>
            <h5>andreas.takvam@gmail.com</h5>
            <a
              href='mailto:andreas.takvam@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              Send meg en mail
            </a>
          </article>

          <article className='contact__option'>
            <SiMessenger />
            <h4>Messenger</h4>
            <h5>Andreas</h5>
            <a
              href='https://m.me/andreas.takvam'
              target='_blank'
              rel='noreferrer'
            >
              Nå meg på Messenger
            </a>
          </article>

          <article className='contact__option'>
            <SiMaildotru />
            <h4>Telefon</h4>
            <h5>Andreas Takvam</h5>
            <a href='tel:004741627916' target='_blank' rel='noreferrer'>
              Ring Meg
            </a>
          </article>
        </div>
        <form action=''></form>
      </div>
    </section>
  );
};

export default Contact;
