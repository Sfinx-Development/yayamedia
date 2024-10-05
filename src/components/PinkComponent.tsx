import { Box, styled, Typography } from "@mui/material";
import { isBiggerScreen, isMobile, isTablet } from "./GreyComponent";

export default function PinkComponent() {
  const Texting = styled(Typography)`
    font-family: "H3", sans-serif;
    font-variation-settings: "wght" 300;
  `;

  const TextingATYP = styled(Typography)`
    font-family: "AtypRegularVariable", sans-serif;
    font-variation-settings: "wght" 300;
  `;
  return (
    <Box
      sx={{
        width: "100%",
        background: "linear-gradient(to top, #EDC1D0, #F3D9DF)",
        display: "flex",
        justifyContent: "center",
        paddingY: isTablet ? 30 : { xs: 1, md: 4, xl: 20 },
        paddingX: { xs: 1, md: 0 },
        marginTop: "-50px", // Justera detta värde till höjden på din header, ÄNDRADE DENNA FRÅN 100 TILL -50
        marginBottom: 200,
        alignItems: "center",
        position: "fixed", // Gör den fast
        zIndex: 2, // Viktigt att ha högre än ParallaxWave
        // height: "700px", // Sätt en fast höjd ÄNDRADE DENNA FRÅN 4 TILL 700
        height: isTablet
          ? 700
          : isBiggerScreen
          ? 800
          : { xs: "750px", md: "740px", xl: "600px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "column" },
          justifyContent: "space-between",
          alignItems: "flex-start",
          maxWidth: { md: 900, xl: 1300 },
          width: "100%",
          paddingX: isTablet ? 2 : isMobile ? 2 : 0,
        }}
      >
        <Texting
          sx={{
            fontSize: isTablet ? 80 : { xs: 40, md: 80, xl: 90 },
            color: "#363434",
          }}
        >
          Yttepytteliten.
        </Texting>
        <Texting
          sx={{
            fontSize: isTablet ? 50 : { xs: 30, md: 50, xl: 60 },
            color: "#363434",
          }}
        >
          Vår byrå - inte vår vision.
        </Texting>
        <TextingATYP
          sx={{
            fontSize: isTablet ? 20 : { xs: 16, md: 20, xl: 25 },
            fontWeight: "lighter",
            color: "#363434",
            flexWrap: "wrap",
            maxWidth: 900,
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
  );
}
