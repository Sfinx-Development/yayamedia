import { Box } from "@mui/material";
import { useEffect, useState } from "react";

export default function ParallaxWave() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh", // Höjd för att täcka hela skärmen
        overflow: "hidden",
        background:
          "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)",
      }}
    >
      {/* Bakgrundsvåg */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "50%", // Justera höjd på vågen
          background: `url('/path/to/your/wave/image.svg') no-repeat center`,
          backgroundSize: "cover",
          transform: `translateY(${scrollPosition * 0.5}px)`, // Parallax-effekt
          transition: "transform 0.1s ease-out", // Gör scrollningen mjukare
        }}
      />
      {/* Innehåll */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          padding: 2,
          color: "#363434",
          zIndex: 2, // Se till att innehållet ligger ovanför bakgrunden
        }}
      >
        <h2>Parallax Wave Content</h2>
        <p>Här kan du lägga till mer innehåll som scrollar med vågen.</p>
      </Box>
    </Box>
  );
}
