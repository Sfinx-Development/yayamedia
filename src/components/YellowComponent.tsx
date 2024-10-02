import { Box, styled, Typography } from "@mui/material";
import { isMobile, isTablet } from "./GreyComponent";

export default function YellowComponent() {
  const Texting = styled(Typography)`
    font-family: "H3", sans-serif;
    font-variation-settings: "wght" 300;
  `;

  return (
    <Box
      sx={{
        width: "100%",
        background: "linear-gradient(to top, #FAF7E4, #FAECD0)",
        display: "flex",
        justifyContent: "center",
        paddingY: isTablet ? 30 : { xs: 2, md: 4 },
        paddingX: { xs: 1, md: 0 },
        marginTop: "60px", // Justera detta värde till höjden på din header
        marginBottom: 100,
        alignItems: "center",
        paddingBottom: { xl: 20 },
        position: "fixed", // Gör den fast
        zIndex: 2, // Viktigt att ha högre än ParallaxWave
        height: { xs: "500px", md: "500px", xl: 650 }, // Sätt en fast höjd
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
          paddingX: isTablet ? 2 : isMobile ? 1 : 0,
        }}
      >
        <Texting
          sx={{
            fontSize: isTablet ? 80 : { xs: 40, md: 80, xl: 90 },
            color: "#363434",
          }}
        >
          Vilka är vi?
        </Texting>
        <Texting
          sx={{
            fontSize: isTablet ? 50 : { xs: 30, md: 50, xl: 60 },
            color: "#363434",
          }}
        >
          Allt du behöver veta.
        </Texting>
      </Box>
    </Box>
  );
}
