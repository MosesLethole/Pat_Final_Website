import React, { useState, useEffect } from 'react';


function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      text: "Math Scholar tutoring service has been a game-changer for my grades! The instructors are very knowledgeable and patient.",
      author: "N. Chauke",
    },
    {
      text: "I was struggling with my math assignments, but after a few sessions here, I feel much more confident. Highly recommended!",
      author: "Z. Naidoo",
    },
    {
      text: "The sessions are well-structured and very engaging. I've made so much progress in a short time.",
      author: "D. Fourie",
    },
    {
      text: "My grades have improved drastically since I started engaging Math Scholar tutors. The instructors really know their material.",
      author: "S. Molefe",
    },
    {
      text: "A supportive and engaging environment. I highly recommend Math Scholar to anyone needing extra help!",
      author: "E. Makhanya",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section className="reviews">
      <h2 id="reviews">Recommendations</h2>
      <div className="reviews-carousel">
        <div className="slides">
          {/* Only show the active slide */}
          <div className="review-slide active-slide">
            <p>{reviews[currentSlide].text}</p>
            <div className="author">- {reviews[currentSlide].author}</div>
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <span 
          className="prev" 
          onClick={() => setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length)}
        >
          &#10094;
        </span>
        <span 
          className="next" 
          onClick={() => setCurrentSlide((prev) => (prev + 1) % reviews.length)}
        >
          &#10095;
        </span>
        
        {/* Dots for navigation */}
        <div className="dots">
          {reviews.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active-dot' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
