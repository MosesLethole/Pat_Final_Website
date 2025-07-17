import React from 'react';

function TutoringServices() {
  return (
    <section className="tutoring-services">
      <h2 className="tutoring-title">Tutoring for Every Level</h2>
      <p className="tutoring-description">
        At Math Scholar Tutoring, we provide comprehensive tutoring for students at various levels of their academic journey, from high school to university.
      </p>

      <div className="tutoring-levels">
        {/* High School Card */}
        <div className="tutoring-card">
          <div className="card-icon">&#127979;</div>
          <h3>Basic Education</h3>
          <p>Focused guidance for grade improvement and exam preparation.</p>
        </div>

        {/* TVET College Card */}
        <div className="tutoring-card">
          <div className="card-icon">&#128218;</div>
          <h3>TVET College</h3>
          <p>Support for technical skills and academic subjects tailored to your field of study.</p>
        </div>

        {/* University Card */}
        <div className="tutoring-card">
          <div className="card-icon">&#127891;</div>
          <h3>University</h3>
          <p>Advanced tutoring for in-depth understanding and academic excellence in university-level courses.</p>
        </div>
      </div>
    </section>
  );
}

export default TutoringServices;