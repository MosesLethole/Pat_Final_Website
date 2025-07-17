import React from 'react';

function Services() {
  return (
    <section className="services" id="services">
      <div className="services__container">
        <div className="services__column">
          <h3>Tutoring</h3>
          <i className="fas fa-chalkboard-teacher"></i>
          <p>Personalized tutoring in Mathematics and Science, to advanced engineering, tailored to each student's needs.</p>
        </div>
        <div className="services__column">
          <h3>Homework Support</h3>
          <i className="fas fa-book-open"></i>
          <p>Hands-on assistance to help students complete assignments confidently while strengthening their understanding.</p>
        </div>
        <div className="services__column">
          <h3>Exam Prep</h3>
          <i className="fas fa-pencil-alt"></i>
          <p>Focused exam prep sessions that cover key topics, study strategies, and techniques for confident, successful test-taking.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;