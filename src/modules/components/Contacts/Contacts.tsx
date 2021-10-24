import React from 'react';
import './Contacts.scss';
import Fade from 'react-reveal/Fade';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import emailjs from 'emailjs-com';

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      'service_z7sl6nf',
      '2af34afe209fd61ac7b60d9151661666',
      e.target,
      'user_efAO3x66K0003HG4fPJUy'
    )
    .then(
      result => {
        window.location.reload();
      },
      error => {
        console.log(error.text);
      }
    );
}

export default function Contacts() {
  return (
    <div className="contacts">
      <div className="container contacts__container">
        <Fade>
          <SectionTitle title={'CONTACTS'} />
          <div className="contacts__form__wrapper">
            <form className="contacts__form" onSubmit={sendEmail}>
              <input type="name" placeholder="Name" className="contacts__form__name" />
              <input type="email" placeholder="Email" className="contacts__form__email" />
              <textarea placeholder="Messages" className="contacts__form__text"></textarea>
              <button type="submit" className="contacts__form__button">
                Send
              </button>
            </form>
          </div>
        </Fade>
      </div>
    </div>
  );
}
