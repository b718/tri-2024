import React from "react";
import "./MeshGradientOrb.css";

const MeshGradientOrb: React.FC = () => {
  const svgMarkup = `
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" width="100%">
      <defs>
        <linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="hsla(0, 100%, 50%, 1)" />
          <stop offset="100%" stop-color="hsla(60, 100%, 50%, 1)" />
        </linearGradient>
      </defs>
      <circle cx="200" cy="200" r="150" fill="url(#gradient)"></circle>
    </svg>
  `;

  return (
    <div
      className="orb-container"
      dangerouslySetInnerHTML={{ __html: svgMarkup }}
    />
  );
};

export default MeshGradientOrb;
