import { Box, styled, Typography } from "@mui/material";
import { isTablet } from "./GreyComponent";

export default function Case() {
  const isMobile = window.innerWidth <= 820;
  const isBigScreen = window.innerHeight >= 1080;

  const Texting = styled(Typography)`
    font-family: "H3", sans-serif;
    font-variation-settings: "wght" 300;
  `;

  return (
    <Box
      id="case"
      sx={{
        width: "100%",
        background: "#F7F7F7",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Texting
        sx={{
          fontSize: { xs: 30, md: 40, xl: 55 },
          color: "#363434",
          marginTop: 12,
          marginBottom: 5,
          textAlign: "center",
        }}
      >
        Case
      </Texting>
      <Box
        sx={{
          display: "flex",
          flexDirection: isTablet ? "column" : { xs: "column", md: "row" },
          justifyContent: "center",
          gap: 0.1,
        }}
      >
        <img
          src="https://i.imgur.com/LsyTFZT.png"
          alt="teip with logos"
          height={isMobile ? "100%" : isBigScreen ? "700px" : "545px"}
          width={isMobile ? "100%" : isBigScreen ? "1100px" : "645px"}
        />
        <img
          src="https://i.imgur.com/nRLImCB.png"
          alt="computer showing a website"
          height={isMobile ? "90%" : isBigScreen ? "700px" : "545px"}
          width={isMobile ? "100%" : isBigScreen ? "1100px" : "645px"}
        />
      </Box>
    </Box>
  );
}
