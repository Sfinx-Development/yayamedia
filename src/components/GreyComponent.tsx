import { Box, styled, Typography } from "@mui/material";

// export const isTablet = window.outerWidth >= 600 && window.innerHeight <= 1366;
export const isTablet =
  window.innerWidth >= 768 &&
  window.innerWidth <= 1366 &&
  window.innerHeight >= 600 &&
  window.outerHeight <= 1024;

export const isMobile = window.innerWidth <= 820;
export default function GreyComponent() {
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
        backgroundColor: "#363434",
        display: "flex",
        justifyContent: "center",
        paddingY: isTablet ? 30 : { xs: 2, md: 4, xl: 20 },
        paddingX: { xs: 1, md: 0 },
        marginTop: "100px", // Justera detta värde till höjden på din header
        marginBottom: 200,
        alignItems: "center",
        position: "fixed", // Gör den fast
        zIndex: 2, // Viktigt att ha högre än ParallaxWave
        height: "400px", // Sätt en fast höjd
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
            color: "#F7F7F7",
          }}
        >
          Inget som kliar,
        </Texting>
        <Texting
          sx={{
            fontSize: isTablet ? 50 : { xs: 30, md: 50, xl: 60 },
            color: "#F7F7F7",
          }}
        >
          inget som sticks.
        </Texting>
        <TextingATYP
          sx={{
            fontSize: isTablet ? 18 : { xs: 16, md: 18, xl: 25 },
            color: "#F7F7F7",
            flexWrap: "wrap",
            maxWidth: 900,
            marginTop: 1,
          }}
        >
          Mjuka klappar. Ett fenomen som kan få vilket barn som helst att på en
          millisekund gå från pirrigt förväntansfull till besviken. Vi minimerar
          helt enkelt risken för besvikelse, och erbjuder bara hårda paket på
          Yaya. Innehållet då? Det bestämmer du själv.
        </TextingATYP>
      </Box>
    </Box>
  );
}
