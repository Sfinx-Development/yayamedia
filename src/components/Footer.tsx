import { Box, styled, Typography } from "@mui/material";

export default function Footer() {
  const isMobile = window.innerWidth <= 820;
  const isBigScreen = window.innerHeight >= 1080;
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
        bottom: 0,
        height: { xs: "auto", xl: 320 },
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        paddingY: 2,
        zIndex: 3,
        // position: "relative",
      }}
      component={"footer"}
    >
      {/* Logotyp */}
      <Box
        sx={{
          paddingX: 6,
          flex: 1,
          display: "flex",
          justifyContent: { xs: "center", md: "start" },
        }}
      >
        <img
          src={"https://i.imgur.com/1MzhvyL.png"}
          alt="Yaya Logo"
          style={{ height: isMobile ? 70 : isBigScreen ? 130 : 90 }}
        />
      </Box>

      <Box
        sx={{
          paddingX: 2,
          flex: 1,
          display: "flex",
          justifyContent: "flex-end",
          marginRight: { xs: 0, md: 5 },
          marginTop: { xs: 4, md: 0 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "row", md: "column" },
            alignItems: "flex-start",
            gap: { xs: 2, md: 2, xl: 5 },
          }}
        >
          {/* Emelie Kontaktuppgifter */}
          <Box sx={{ textAlign: "left" }}>
            <Texting
              sx={{
                color: "#F7F7F7",
                fontSize: { xs: 16, md: 20, xl: 25 },
                fontWeight: 500,
                marginBottom: 1.5,
              }}
            >
              Emelie Svernhed
            </Texting>
            <TextingATYP
              sx={{
                color: "#F7F7F7",
                marginBottom: 0.5,
                fontSize: { xs: 16, md: 20, xl: 25 },
              }}
            >
              emelie@yayamedia.se
            </TextingATYP>
            <TextingATYP
              sx={{
                color: "#F7F7F7",
                marginBottom: 1,
                fontSize: { xs: 16, md: 20, xl: 25 },
              }}
            >
              070-7 46 06 69
            </TextingATYP>
          </Box>

          {/* Åsa Kontaktuppgifter */}
          <Box sx={{ textAlign: "left" }}>
            <Texting
              sx={{
                color: "#F7F7F7",
                fontSize: { xs: 16, md: 20, xl: 25 },
                fontWeight: 500,
                marginBottom: 1.5,
              }}
            >
              Åsa Kjellberg
            </Texting>
            <TextingATYP
              sx={{
                color: "#F7F7F7",
                marginBottom: 0.5,
                fontSize: { xs: 16, md: 20, xl: 25 },
              }}
            >
              asa@yayamedia.se
            </TextingATYP>
            <TextingATYP
              sx={{
                color: "#F7F7F7",
                marginBottom: 0.5,
                fontSize: { xs: 16, md: 20, xl: 25 },
              }}
            >
              073-8 20 14 29
            </TextingATYP>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
