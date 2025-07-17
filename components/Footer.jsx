import React from 'react';
import TermsOfUse from './TermsOfUse';
import PrivacyPolicy from './PrivacyPolicy';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__column">
          <h3>Our Work</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#gallery">Gallery</a></li>
          </ul>
        </div>
        <div className="footer__column">
          <h3>Enrolment</h3>
          <ul>
            <li><a href="#procedure">Procedures</a></li>
            <li><a href="https://gbcqy0hw.forms.app/math-scholars-registration-form" target="_blank" rel="noopener noreferrer">Enrol</a></li>
          </ul>
        </div>
        <div className="footer__column">
            <h3 id="footer_contacts">Contacts</h3>
            <ul>
                <li><i className="fa fa-phone"> :  </i>  +27 61 648 4773 </li>
                <li><i className="fa fa-phone"> :  </i>  +27 78 239 8897</li>
                <li><i className="fa fa-envelope"> :  </i>  mathscholars07@gmail.com</li>
                <li><i className="fa fa-map-marker"> :  </i> 4366 Ext 2,Kanana, Hammanskraal</li>
                <li><i className="fa fa-globe"> :  </i> Remote</li>
            </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__social">
          <a href="https://www.facebook.com/profile.php?id=61566878471639" className="footer__icon" target="_blank"><i className="fa fa-facebook"></i></a>
          <a href="https://www.instagram.com/mathscholars21?utm_source=qr&igsh=MzNlNGNkZWQ4Mg==" className="footer__icon" target="_blank"><i className="fa fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/math-scholars-mahlangu-718294334/" className="footer__icon" target="_blank"><i className="fa fa-linkedin"></i></a>
        </div>
        <p className="footer__rights">&#169; 2025 Mahlangus Alpha Tutoring Holdings - All rights reserved</p>
        <div className="center-container">
           <PrivacyPolicy/>
           <TermsOfUse/>
        </div>
      </div>      
    </footer>
  );
}

export default Footer;