import { Box, styled, Typography } from "@mui/material";

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
        paddingY: { xs: 2, md: 4, lg: 20 },
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
          maxWidth: { md: 900, lg: 1300 },
          width: "100%",
        }}
      >
        <Texting
          sx={{ fontSize: { xs: 40, md: 80, lg: 90 }, color: "#363434" }}
        >
          Yttepytteliten.
        </Texting>
        <Texting
          sx={{ fontSize: { xs: 30, md: 50, lg: 60 }, color: "#363434" }}
        >
          Vår byrå - inte vår vision.
        </Texting>
        <TextingATYP
          sx={{
            fontSize: { xs: 16, md: 20, lg: 25 },
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
