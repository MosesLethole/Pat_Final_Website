import React from 'react';

// Generate image paths for the carousel
const carouselImages = Array.from({ length: 15 }, (_, i) => `../src/Assets/Gallery${i + 1}.jpg`);

// Cube image path
const cubeImage = "../src/Assets/logo_body.jpg";

// Physics equations
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

const Carousel = () => {
  return (
    <div className="gallery-container flex justify-center items-center h-screen bg-gray-900">
      {/* Physics Equations (behind the carousel) */}
      
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

      {/* Carousel */}
      <div className="carousel-container">
        {carouselImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery Image ${index + 1}`}
            className="carousel-image"
            style={{
              transform: `rotateY(${(360 / carouselImages.length) * index}deg) translateZ(500px)`,
            }}
          />
        ))}
      </div>

      {/* Cube */}
      <Cube />
    </div>
  );
};

const Cube = () => {
  return (
    <div className="cube">
      {/* Cube Faces */}
      {[1, 2, 3, 4, 5, 6].map((num) => (
        <div
          key={num}
          className="cube-face"
          style={{
            backgroundImage: `url(${cubeImage})`,
            transform: getCubeFaceTransform(num),
          }}
        />
      ))}
    </div>
  );
};

const getCubeFaceTransform = (num) => {
  const transforms = [
    "rotateX(-54.7356deg) rotateY(45deg) translateZ(50px)", // Face 1
    "rotateX(-54.7356deg) rotateY(135deg) translateZ(50px)", // Face 2
    "rotateX(-54.7356deg) rotateY(225deg) translateZ(50px)", // Face 3
    "rotateX(-54.7356deg) rotateY(315deg) translateZ(50px)", // Face 4
    "rotateX(35.2644deg) rotateZ(-45deg) translateZ(50px)", // Face 5
    "rotateX(35.2644deg) rotateY(180deg) rotateZ(-45deg) translateZ(50px)", // Face 6
  ];
  return transforms[num - 1];
};

export default Carousel;
