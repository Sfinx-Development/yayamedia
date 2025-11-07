import { Box, styled, Typography, TypographyProps } from "@mui/material";
import { useEffect } from "react";
import {  isBigScreen, isTablet } from "./GreyComponent";

export default function PinkComponent() {
  const Texting = styled(Typography)<TypographyProps>`
    font-family: "H3", sans-serif;
    font-variation-settings: "wght" 300;
  `;

  const TextingATYP = styled(Typography)<TypographyProps>`
    font-family: "atyp-bl-variable", sans-serif;
    font-variation-settings: "ital" 0, "opsz" 6, "wght" 280;
  `;

  useEffect(() => {
    console.log("Width:", window.innerWidth);
    console.log("Height:", window.innerHeight);
  }, []);
  return (
    <Box
         component="header"
      aria-label="Hero-sektion med huvudbudskap"
      sx={{
        width: "100%",
        background: "linear-gradient(to top, #EDC1D0, #F3D9DF)",
        display: "flex",
        justifyContent: "start",
        // paddingY: isTablet ? 30 : { xs: 1, md: 4, xl: 0 },
        paddingX: { xs: 1 },
        alignItems: { xs: "center", xl: "start" },
        position: "fixed",
        zIndex: 2,
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          // width: "100%",
          height: { xs: "70%", md: "65%" },
          // backgroundColor: "yellow",
          // alignItems: "flex-start", // Align items to the start (left)
          justifyContent: "flex-start", // Optional, adjust based on your layout needs
          width: "100%",
          alignItems: isBigScreen ? "end" : { xs: "start", xl: "center" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "column" },
            marginLeft: { xs: 2, md: "12%", xl: "10%" },
            maxWidth: { xs: "92%", md: "70%" },
            // backgroundColor: "red",
          }}
        >
          <Texting
            component="h1"
            sx={{
              paddingTop: {xs:10, xl:15},
              fontSize: isTablet
                ? 80
                : isBigScreen
                ? 90
                : { xs: 40, md: 80, xl: 100 },
              margin: 0,
              color: "#363434",
              lineHeight: 1,
            }}
          >
            Yttepytteliten.
          </Texting>
          <Texting
            component="h1"
            sx={{
              fontSize: isTablet
                ? 50
                : isBigScreen
                ? 60
                : { xs: 30, md: 50, xl: 70 },
              color: "#363434",
            }}
          >
            Vår byrå - inte vår vision.
          </Texting>
          <TextingATYP
            component="h2"
            sx={{
              fontSize: isTablet
                ? 20
                : isBigScreen
                ? 25
                : { xs: 16, md: 20, xl: 30 },
              fontWeight: "lighter",
              color: "#363434",
              flexWrap: "wrap",
              maxWidth: { xs: "95%", xl: "60%" },
              marginTop: 1,
            }}
          >
            Vi är en mindre reklambyrå på två som brinner för kreativt skapande.
            Värdesätter du en personlig och nära kontakt, är Yaya media rätt för
            dig. Vi ses över en kaffe, snackar gött och utvecklar strategier som
            förverkligar dina visioner.
          </TextingATYP>
        </Box>
      </Box>
    </Box>
  );
}
