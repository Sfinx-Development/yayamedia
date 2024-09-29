import { Box, styled, Typography } from "@mui/material";

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
        <Texting sx={{ fontSize: { xs: 40, md: 80 }, color: "#F7F7F7" }}>
          Inget som kliar,
        </Texting>
        <Texting sx={{ fontSize: { xs: 30, md: 50 }, color: "#F7F7F7" }}>
          inget som sticks.
        </Texting>
        <TextingATYP
          sx={{
            fontSize: { xs: 16, md: 18 },
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
