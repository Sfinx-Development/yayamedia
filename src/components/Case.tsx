import { Box, styled, Typography } from "@mui/material";

export default function Case() {
  const isMobile = window.innerWidth <= 820;

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
        background: "#F7F7F7",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Texting
        sx={{
          fontSize: { xs: 30, md: 40 },
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
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          gap: 0.1,
        }}
      >
        <img
          src="https://i.imgur.com/LsyTFZT.png"
          alt="picture of teip"
          height={isMobile ? "90%" : "500px"}
        />
        <img
          src="https://i.imgur.com/nRLImCB.png"
          alt="picture of teip"
          height={isMobile ? "90%" : "500px"}
        />
      </Box>
    </Box>
  );
}