import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export default function ConceptDevelopment() {
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
        alignItems: "center",
        position: "relative",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Texting
          sx={{
            fontSize: { xs: 30, md: 40 },
            color: "#363434",
            paddingLeft: 8,
          }}
        >
          En extra push
        </Texting>
        <TextingATYP
          sx={{
            fontSize: { xs: 15, md: 20 },
            color: "#363434",
            marginBottom: 5,
            paddingLeft: 8,
          }}
        >
          Konceptutveckling
        </TextingATYP>
      </Box>

      <Box
        sx={{
          backgroundColor: "#F3D9DF", // Rosa bakgrund
          borderRadius: "50%", // Gör boxen rund
          width: 70, // Justera bredden för cirkeln
          height: 70, // Justera höjden för cirkeln
          display: "flex", // Använd flexbox
          alignItems: "center", // Centrera vertikalt
          justifyContent: "center", // Centrera horisontellt
          position: "absolute",
          zIndex: 2,
          right: 200, // Justera till vänster från kanten
          top: 90, // Justera till toppen från botten
        }}
      >
        <img
          src="https://i.imgur.com/6aWnJLD.png"
          alt="guy dancing on hands"
          style={{
            borderRadius: "50%", // Gör bilden rund (om det behövs)
            width: "70%", // Gör bilden proportionell till cirkeln
            height: "70%", // Gör bilden proportionell till cirkeln
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#363434",
          padding: 4,
          position: "relative",
          //   marginX: 10,
          borderRadius: 2,
          width: "90%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            color: "#B9DCD2",
            display: "flex",
            flex: 1 / 2,
            flexDirection: "column",
            padding: 2,
          }}
        >
          <Texting sx={{ fontSize: 20 }}>Konceptutveckling</Texting>
          <TextingATYP sx={{ color: "#F7F7F7", fontSize: 13, marginTop: 2 }}>
            Du tänker att du har allt klappat och klart. En trevlig och
            informativ hemsida, levande sociala medier och ett värdefullt
            kontaktnät. Ändå är det som att du inte når riktigt hela vägen fram.
            Då kan konceptutveckling vara något som ger ditt varumärke den extra
            push som krävs.
          </TextingATYP>
          <Texting sx={{ fontSize: 20, marginTop: 2 }}>Från 80 000:-</Texting>
          <TextingATYP sx={{ fontSize: 13 }}>Ex. moms</TextingATYP>
          <Texting sx={{ fontSize: 14, marginTop: 4 }}>
            Vad betalar jag för?
          </Texting>
          <TextingATYP sx={{ color: "#F7F7F7", fontSize: 13, marginTop: 1 }}>
            Exakt vad du betalar för vet vi först när vi förstår varumärkets
            förutsättningar och drömmar. Det skulle kunna landa i ett beslut om
            att det som behövs är en tydlig grafisk manual, eller en
            intresseväckande kampanj. Eller varför inte en fullständig digital
            strategi?
          </TextingATYP>
        </Box>
        <Box
          sx={{
            color: "#B9DCD2",
            display: "flex",
            flex: 1 / 3,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "end",
            padding: 2,
          }}
        >
          <Texting sx={{ fontSize: 40, textAlign: "end" }}>
            Hur och vad vill du att din målgrupp ska känna?
          </Texting>
          <TextingATYP sx={{ textAlign: "end", marginTop: 2 }}>
            Vi hjälper dig att skapa en starkare koppling mellan ditt varumärke
            och din målgrupp.
          </TextingATYP>
        </Box>
      </Box>
    </Box>
  );
}
