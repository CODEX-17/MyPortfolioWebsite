// Import React and Particles
import React from 'react';
import Particles from 'react-tsparticles';

const ParticleBackground = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "#0d47a1", // Change to the background color you prefer
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            bubble: { distance: 200, duration: 2, opacity: 0.8, size: 40 },
            push: { quantity: 4 },
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#ffffff" }, // Color of the particles
          links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.5, width: 1 },
          collisions: { enable: true },
          move: { direction: "none", enable: true, outMode: "bounce", random: false, speed: 2, straight: false },
          number: { density: { enable: true, area: 800 }, value: 80 },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { random: true, value: 5 },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;
