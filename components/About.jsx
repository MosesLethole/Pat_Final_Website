import React from 'react';

function About() {
  return (
    <section className="about-choose-us">
      <div className="container">
        <div className="image-section"></div>
        <div className="content-section">
          <div className="about-us">
            <h2 id="about">About Us</h2>
            <p>Math Scholars, established at Hammanskraaal in 2021, provides personalized academic support to help students excel in subjects like Mathematics, Science, and English. 
                        We focus on bridging educational gaps and fostering a love for learning in a supportive environment. 
                        With a dedicated team of experienced tutors, we aim to improve both academic performance and students' confidence. 
                        Our mission is to uplift communities through education, nurturing skills for lifelong success. Join us to unlock your potential and achieve academic excellence!.
            </p>
          </div>
          <div className="why-us">
            <h2>Why Choose Us</h2>
            <div className="why-us-boxes">
              <div className="why-us-box">
                <i className="fas fa-check-circle"></i>
                96.5% Pass Rate in 2024
              </div>
              <div className="why-us-box">
                <i className="fas fa-star"></i>
                +75% in Distinctions
              </div>
              <div className="why-us-box">
                <i className="fas fa-user-cog"></i>
                Personalized tutoring
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;