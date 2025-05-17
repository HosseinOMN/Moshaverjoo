import React from 'react';
import './Footer.css'; 
import { Instagrambutton, TelegramButton, TwitterButton, YoutubeButton } from '../pages/Icons.js';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__left">
          <p>&copy; 2024 تمامی حقوق این سایت متعلق به شرکت ما است.</p>
        </div>
        <div className="footer__center">
          <ul className="footer__links">
            <li><a href="/about">درباره ما</a></li>
            <li><a href="/contact">تماس با ما</a></li>
            <li><a href="/privacy-policy">سیاست حفظ حریم خصوصی</a></li>
          </ul>
        </div>
        <div className="footer__right">
          <p>ما را در شبکه های اجتماعی دنبال کنید</p>
          <div className="container">
          <button className='Btn instagram'>
            <Instagrambutton/>
            <span class="footer__text"> Instagram</span>
          </button>

          <button className='Btn youtube'>
            <YoutubeButton/>
            <span class="footer__text"> Youtube</span>
          </button>

          <button className='Btn twitter'>
            <TwitterButton/>
            <span class="footer__text"> Twitter</span>
          </button>
          <button className='Btn twitter'>
            <TelegramButton/>
            <span class="footer__text"> Telegram</span>
          </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
