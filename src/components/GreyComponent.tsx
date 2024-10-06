import { Box, styled, Typography } from "@mui/material";

// export const isTablet = window.outerWidth >= 600 && window.innerHeight <= 1366;
export const isTablet =
  window.innerWidth >= 768 &&
  window.innerWidth <= 1366 &&
  window.innerHeight >= 600 &&
  window.outerHeight <= 1180;

export const isMobile = window.innerWidth <= 820;

export const isBigScreen =
  window.innerWidth >= 1080 && window.innerHeight >= 1920;

export const isBiggerScreen =
  window.innerWidth >= 2560 && window.innerHeight >= 1440;

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
        paddingY: isTablet && !isMobile ? 30 : { xs: 2, md: 4 },
        paddingX: { xs: 2, md: 0 },
        marginTop: isBiggerScreen ? "60px" : isMobile ? "20px" : "-50px",
        marginBottom: 100,
        alignItems: "center",
        paddingBottom: { xs: 20, xl: 20 },
        position: "fixed",
        zIndex: 2,
        height: isTablet ? 800 : { xs: 600, md: "720px", xl: 800 },
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
