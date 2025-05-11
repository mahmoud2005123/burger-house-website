import React from 'react';
import '../styles/ContactUs.css';
import logoWhite from '../assets/logo-white.png';

const ContactUs = () => {
  return (
    <section id="contact">
      <footer className="footer">
        <div className="section__container footer__container">
          <div className="footer__logo">
            <img src={logoWhite} alt="logo" />
          </div>
          <div className="footer__content">
            <p>
              Welcome to Burger House, where passion for exceptional food and
              genuine hospitality come together. Our story is one of dedication to
              crafting the perfect burger experience, from sourcing the finest
              ingredients to delivering unparalleled taste in every bite.
            </p>
            <div>
              <ul className="footer__links">
                <li>
                  Cairo Festival City Mall 
                </li>
                <li>
                  <a href="mailto:info@burgerhouse.com">info@burgerhouse.com</a>
                </li>
              </ul>
              <div className="footer__socials">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <i>Facebook</i>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <i>Instagram</i>
                </a>
                <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                  <i>Whatsapp</i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactUs; 