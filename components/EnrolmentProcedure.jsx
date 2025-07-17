import React from 'react';


function EnrolmentProcedure() {
  return (
    <section className="enrolment-procedure" id="procedure">
      <h2 className="enrolment-title">How to Enrol</h2>
      <div className="enrolment-container">
        <div className="step-container">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-description left">
              <p>Contact us <a href="#contact" className="enrol-link">here</a> or on WhatsApp</p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">2</div>
            <div className="step-description right">
              <p>Learning Program Established</p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">3</div>
            <div className="step-description left">
              <p>Confirm Payment</p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">4</div>
            <div className="step-description right">
              <p>Tutor(s) Assigned</p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">5</div>
            <div className="step-description left">
              <p>Congratulations, you're a step to success</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EnrolmentProcedure;