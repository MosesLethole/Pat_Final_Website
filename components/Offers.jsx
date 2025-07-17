import React from 'react';

const equations = [
  "F = ma",
  "E = mc²",
  "∇ ⋅ E = ρ/ε₀",
  "∇ × B = μ₀J + μ₀ε₀∂E/∂t",
  "H = -ħ²/2m ∇² + V(x)",
  "S = k log W",
  "ψ(x, t) = A e^(i(kx - ωt))",
  "Δx Δp ≥ ħ/2",
  "PV = nRT",
  "λ = h/p",
];

// Function to generate random positions for equations
const getRandomPosition = () => ({
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  transform: `translateZ(${Math.random() * -500}px)`, // Random depth
});


function Offers() {
  return (
    <section className="offers_section" id="offers">
      <h2 className="section-title offer_title">Our Offers</h2>
       
      <div className="equations-container">
        {equations.map((equation, index) => (
          <div
            key={index}
            className="equation"
            style={{
              ...getRandomPosition(),
              animationDuration: `${10 + index * 2}s`, // Vary animation speed
            }}
          >
            {equation}
          </div>
        ))}
      </div>

      <div className="offers__container bd-grid">
        {/* Tutoring */}
        <div className="offers__card">
          <h3 className="offers__title">Tutoring</h3>
          <ul className="offers__list">
            <li>Tutorials</li>
            <li>Homework Assistance</li>
            <li>Exam Preps</li>
            <li>Exam Prep. Counseling</li>
            <li>Mentorship</li>
          </ul>
          <h4 className="tut_text">1-on-1 & Group</h4>
        </div>

        {/* Chess Mentorship */}
        <div className="offers__card">
          <h3 className="offers__title">Chess</h3>
          <ul className="offers__list chess">
            <li>Embedded learning</li>
            <li>Chess tutorial</li>
            <li>Mentorship</li>
          </ul>
        </div>

        {/* Camps */}
        <div className="offers__card">
          <h3 className="offers__title">Camps</h3>
          <ul className="offers__list">
            <li>Exam Preps</li>
            <li>Fitness</li>
            <li>Morale Boosting Outing</li>
            <li>Career Day</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Offers;