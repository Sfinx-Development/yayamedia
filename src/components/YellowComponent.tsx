import { Box, styled, Typography } from "@mui/material";

export default function YellowComponent() {
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
        background: "linear-gradient(to top, #FAF7E4, #FAECD0)",
        display: "flex",
        justifyContent: "center",
        paddingY: { xs: 2, md: 4 },
        paddingX: { xs: 1, md: 0 },
        marginTop: "60px", // Justera detta värde till höjden på din header
        marginBottom: 100,
        alignItems: "center",
        position: "fixed", // Gör den fast
        zIndex: 2, // Viktigt att ha högre än ParallaxWave
        height: "500px", // Sätt en fast höjd
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "column" },
          justifyContent: "space-between",
          alignItems: "flex-start",
          maxWidth: 900,
          width: "100%",
        }}
      >
        <Texting sx={{ fontSize: { xs: 40, md: 80 }, color: "#363434" }}>
          Vilka är vi?
        </Texting>
        <Texting sx={{ fontSize: { xs: 30, md: 50 }, color: "#363434" }}>
          Allt du behöver veta.
        </Texting>
      </Box>
    </Box>
  );
}
