import React from "react";

const Wave: React.FC = () => {
  const waveColor = "#F7F7F7"; // Färgen på vågorna
  const isMobile = window.innerWidth <= 820;
  return (
    <svg
      width="100%"
      height={isMobile ? "50vh" : "105vh"} // Bestäm en höjd så att vågen blir synlig
      viewBox="0 0 100 100" // Använd en vy för att passa SVG-innehållet
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", margin: 0 }}
    >
      {/* Enkel path för tre toppar */}
      <path
        d={`
    M 0 80           
    Q 30 60, 60 70   
    Q 90 80, 120 50   
    Q 150 60, 180 40
    Q 210 60, 240 30   
    Q 270 50, 300 20 
    L 320 0
    L 320 100       
    L 0 100          
    Z                
  `}
        fill={waveColor}
      />
    </svg>
  );
};

export default Wave;
