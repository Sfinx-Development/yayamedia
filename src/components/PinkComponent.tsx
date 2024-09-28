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
        paddingY: { xs: 6, md: 14 }, // Responsiv padding
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
          Yttepytteliten.
        </Texting>
        <Texting sx={{ fontSize: { xs: 30, md: 50 }, color: "#363434" }}>
          Vår byrå - inte vår vision.
        </Texting>
        <TextingATYP
          sx={{
            fontSize: { xs: 16, md: 20 },
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
