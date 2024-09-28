import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Wave from "./Wave";

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
        backgroundColor: "#F7F7F7", // Bakgrundsfärg under vågorna
      }}
    >
      {/* Innehåll */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          paddingY: 10,
          zIndex: 3, // Se till att innehållet ligger ovanför bakgrunden
        }}
      >
        <Wave />
        <h2>Parallax Wave Content</h2>
        <p>Här kan du lägga till mer innehåll som scrollar med vågen.</p>
      </Box>
    </Box>
  );
}
