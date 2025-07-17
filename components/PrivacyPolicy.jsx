import React, { useState } from 'react';

const PrivacyPolicy = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <span className="link" onClick={() => setShow(true)}>Privacy Policy</span>

      {show && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={() => setShow(false)}>&times;</span>
            <h2>Privacy Policy</h2>

              <h3>About Us</h3>
               <p>
               "Mahlangus Alpha Tutor Holdings" ("we", "us", or "our") refers collectively to the company, its staff, shareholders, and affiliated service providers. We are dedicated to providing high-quality academic support and educational services. Our operations are guided by a commitment to professionalism, learner-focused development, and the responsible handling of all user interactions, data, and educational content.
               </p>
               <br/>
            <h3>IMPORTANT!!!</h3>   
            <p>
              We  value your privacy. This policy explains how your data is collected, used, and protected.
              <br />
              We are committed to protecting the privacy and confidentiality of our students, parents, and staff. This Privacy Clause outlines how we collect, use, store, and protect personal information provided to us in the course of our educational services.

<h3  >1. Collection of Personal Information </h3>
We may collect personal information including, but not limited to:

Student and parent/guardian names 

Contact details (cellphone, email or mailing/billing address)

Academic records, tutoring goals, and progress reports

Billing and payment information

<h3 >2. Use of Information</h3>
Personal information collected is used solely for the purpose of:

Delivering and improving our tutoring services

Communicating with students and guardians

Scheduling sessions and tracking progress

Processing payments and managing accounts

<h3>3. Disclosure of Information</h3>
We do not sell, trade, or rent personal information to third parties. We may share information only:

With authorized staff and tutors who are directly involved in delivering tutoring services

When required by law or legal process

With third-party service providers (e.g., payment processors) who are bound by confidentiality agreements

<h3>4. Data Protection</h3>
We implement appropriate technical and organizational measures to safeguard personal information against unauthorized access, loss, misuse, or alteration. These measures include secure data storage systems and access controls.

<h3>5. Retention of Data</h3>
Personal information is retained only for as long as necessary to fulfill the purposes for which it was collected or as required by law.

<h3>6. Consent</h3>
By enrolling in our tutoring programmes or using our website, you consent to the collection and use of your personal information in accordance with this Privacy Clause.

<h3>7. Access and Updates</h3>
You have the right to access, correct, or request deletion of your personal information by contacting us at +27 61 648 4773 or mathscholars07@gmail.com.

<h3>8. Updates to This Clause</h3>
MATH-SCHOLARS ACADEMY reserves the right to update this Privacy Clause from time to time. Any changes will be posted on our website and will take effect upon publication.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default PrivacyPolicy;
