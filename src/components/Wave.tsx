import React from "react";

const Wave: React.FC = () => {
  const waveColor = "#F7F7F7"; // Färgen på vågorna

  return (
    <svg
      width="100%"
      height="200px" // Bestäm en höjd så att vågen blir synlig
      viewBox="0 0 100 100" // Använd en vy för att passa SVG-innehållet
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      {/* Enkel path för tre toppar */}
      <path
        d={`
    M 0 60           
    Q 10 30, 20 60   
    T 40 40          
    T 60 50        
    T 80 30         
    L 100 20        
    L 100 100       
    L 0 100          
    Z                
  `}
        fill={waveColor} /* Fyller vågorna med färgen */
      />
    </svg>
  );
};

export default Wave;
