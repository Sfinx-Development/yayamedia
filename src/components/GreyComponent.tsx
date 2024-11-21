import { Box, styled, Typography, TypographyProps } from "@mui/material";

// export const isTablet = window.outerWidth >= 600 && window.innerHeight <= 1366;
export const isTablet =
  window.innerWidth >= 768 &&
  window.innerWidth <= 1366 &&
  window.innerHeight >= 600 &&
  window.outerHeight <= 1180;

export const isMobile = window.innerWidth <= 820;

export const isBigScreen =
  window.innerWidth >= 1920 &&
  window.innerHeight >= 900 &&
  window.innerWidth < 2560;

export const isBiggerScreen =
  window.innerWidth >= 2560 && window.innerHeight >= 1440;

export const isBiggestScreen =
  window.innerWidth >= 3024 && window.innerHeight >= 1964;

// export const isBiggestScreen = window.innerWidth >= 3024;

export default function GreyComponent() {
  const Texting = styled(Typography)<TypographyProps>`
    font-family: "H3", sans-serif;
    font-variation-settings: "wght" 300;
  `;

  const TextingATYP = styled(Typography)<TypographyProps>`
    font-family: "atyp-bl-variable", sans-serif;
    font-variation-settings: "ital" 0, "opsz" 6, "wght" 280;
  `;

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#363434",
        display: "flex",
        justifyContent: "start",
        // paddingY: isTablet ? 30 : { xs: 1, md: 4, xl: 0 },
        paddingX: { xs: 1 },
        alignItems: { xs: "center", xl: "start" },
        position: "fixed",
        zIndex: 2,
        height: "100%",
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
            maxWidth: { xs: "90%", md: "70%" },
            // backgroundColor: "red",
          }}
        >
          <Texting
            sx={{
              paddingTop: isBiggerScreen ? 15 : 10,
              fontSize: isTablet
                ? 80
                : isBigScreen
                ? 90
                : { xs: 40, md: 80, xl: 100 },
              color: "#F7F7F7",
              lineHeight: 1,
            }}
            component="h1"
          >
            Inget som kliar,
          </Texting>
          <Texting
            sx={{
              fontSize: isTablet
                ? 50
                : isBigScreen
                ? 60
                : { xs: 30, md: 50, xl: 70 },
              color: "#F7F7F7",
            }}
            component="h1"
          >
            inget som sticks.
          </Texting>
          <TextingATYP
            sx={{
              fontSize: isTablet
                ? 18
                : isBigScreen
                ? 25
                : { xs: 16, md: 18, xl: 30 },
              color: "#F7F7F7",
              flexWrap: "wrap",
              maxWidth: { xs: 900, xl: "50%" },
              // marginTop: 1,
              marginBottom: 2,
            }}
            component="h3"
          >
            Mjuka klappar. Ett fenomen som kan få vilket barn som helst att på
            en millisekund gå från pirrigt förväntansfull till besviken. Vi
            minimerar helt enkelt risken för besvikelse, och erbjuder bara hårda
            paket på Yaya. Innehållet då? Det bestämmer du själv.
          </TextingATYP>
        </Box>
      </Box>
    </Box>
  );
}
