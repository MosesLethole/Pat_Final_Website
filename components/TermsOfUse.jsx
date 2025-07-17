import React, { useState } from 'react';

const TermsOfUse = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <span className="link" onClick={() => setShow(true)}>Terms of Use</span>

      {show && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={() => setShow(false)}>&times;</span>


            <h2>Terms of Use</h2>
            <h3>About Us</h3>
               <p>
               "Mahlangus Alpha Tutor Holdings" ("we", "us", or "our") refers collectively to the company, its staff, shareholders, and affiliated service providers. We are dedicated to providing high-quality academic support and educational services. Our operations are guided by a commitment to professionalism, learner-focused development, and the responsible handling of all user interactions, data, and educational content.
               </p>
               <br/>
            <h3>Indemnity</h3>
            <p>
              By accessing and using the services of Mahlangus Alpha Tutor Holdings, commonly known as Math-Scholars Academy, whether through our website, 
              in-person programs, or any other platform, you agree to be bound by the following Terms of Use. 
              Please read them carefully
              <br />

              <h3> 1. Acceptance of Terms </h3>
By enrolling in our tutoring services or accessing any content, resources, or communications from MATH-SCHOLARS ACADEMY, you acknowledge and accept these Terms of Use and agree to comply with all applicable laws and regulations.
              <br />
              <h3>2.Use of Services</h3>
Our services are intended solely for educational purposes. You agree to use our services in a manner that is lawful, respectful, and in accordance with these Terms. Unauthorized use, including but not limited to misuse of materials or information, may result in suspension or termination of access.
              <br/>
              <h3>3.Privacy and Data Use</h3>
Your use of our services is also governed by our Privacy Clause. By using our services, you consent to the collection and use of your personal information as described in our Privacy Clause. We are committed to protecting your data and using it solely to deliver and improve our educational services.
              <br/>
              <h3>4.User Responsibilities</h3>
You are responsible for ensuring that the information you provide is accurate and up to date. You agree not to impersonate others, share account access, or use our services for any fraudulent or harmful activity.
              <br/>
              <h3>5.Intellectual Property</h3>
All content provided by MATH-SCHOLARS ACADEMY—including lesson materials, website content, logos, and branding—is the intellectual property of the Academy and may not be copied, distributed, or reproduced without express written permission.
              <br/>
              <h3>6.Payment and Billing</h3>
Payment terms for tutoring services are communicated during registration. By enrolling, you agree to pay the applicable fees in full and on time. Non-payment may result in suspended access to services.
              <br/>
              <h3>7. Limitation of Liability</h3>
While we strive to provide accurate and high-quality educational services, MATH-SCHOLARS ACADEMY makes no guarantees regarding individual outcomes. We are not liable for any indirect, incidental, or consequential damages arising from your use of our services.
              <br/>
              <h3>8. Modifications to Terms</h3>
MATH-SCHOLARS ACADEMY reserves the right to update or modify these Terms of Use at any time. Any changes will be posted on our website and will take effect immediately upon posting. Continued use of our services after such updates constitutes acceptance of the revised terms.
              <br/>
              <h3>9.Termination of Access.</h3>
We reserve the right to suspend or terminate access to our services at our discretion, including for violation of these Terms of Use, without prior notice.
              <br/>
              <h3>10.Contact Information</h3>
If you have any questions about these Terms of Use, please contact us at  +27 61 648 4773 or mathscholars07@gmail.com .
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default TermsOfUse;
