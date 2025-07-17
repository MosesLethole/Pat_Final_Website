import React from 'react';
import HomePic from '../src/Assets/HomePic.png'
import WhatsApp from '../src/Assets/WhatsApp.svg'

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home__content">
         <h1 class="slogan" >
            <span class="small_slogan">We do not fire and hope,but<br/></span>
            <span class="large_slogan">AIM AND <span class="shoot">SHOOT</span> FOR <span class="success">SUCCESS</span><span class="full_stop">.</span></span>
          </h1>

        <h2 className="availability_text">Tutors available online and in-person.</h2>
        <a href="#contact" className="btn">Enquire</a>
        <a href="https://gbcqy0hw.forms.app/math-scholars-registration-form" className="btn_apply" target="_blank">Enrol</a>
      </div>
      <div className="home__img">
        <img src={HomePic} alt='home' className="home__blob-img" />
      </div>
      <a href="https://wa.me/27616484773" className="whatsapp-icon" target="_blank">
        <img src={WhatsApp} alt="WhatsApp" />
      </a>
    </section>
  );
}

export default Home;