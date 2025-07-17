import React from 'react';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Reach Us</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="first-name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="15" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;