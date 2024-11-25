import React from "react";
import { isMobile } from "./GreyComponent";

const Wave: React.FC = () => {
  const waveColor = "#F7F7F7"; // Färgen på vågorna
  const isBigScreen = window.innerHeight >= 1020;
  return (
    <svg
      width="100%"
      height={
        isMobile && !isBigScreen ? "35vh" : isBigScreen ? "85vh" : "105vh"
      } // Bestäm en höjd så att vågen blir synlig
      viewBox="0 0 100 100" // Använd en vy för att passa SVG-innehållet
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", margin: 0 }}
    >
      <path
        d={`
    M 0 80           
    Q 15 70, 30 75   
    Q 45 80, 60 70    
    Q 70 65, 80 70    
    Q 90 75, 100 65   
    Q 110 90, 130 90  
    Q 150 85, 180 100 
    L 200 0           
    L 200 100         
    L 0 100           
    Z`}
        fill={waveColor}
      />
    </svg>
  );
};

export default Wave;
