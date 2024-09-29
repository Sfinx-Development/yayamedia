import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export default function ConceptDevelopment() {
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
        padding: { xs: 2, md: 0 }, // Justera padding för mobil
      }}
    >
      <Box sx={{ width: "100%", padding: { xs: 2, md: 0 } }}>
        <Texting
          sx={{
            fontSize: { xs: 30, md: 40 }, // Responsiv fontstorlek
            color: "#363434",
            paddingLeft: { xs: 0, md: 8 }, // Justera padding för mobil
          }}
        >
          En extra push
        </Texting>
        <TextingATYP
          sx={{
            fontSize: { xs: 15, md: 20 }, // Responsiv fontstorlek
            color: "#363434",
            marginBottom: 5,
            paddingLeft: { xs: 0, md: 8 }, // Justera padding för mobil
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
          right: { xs: 50, md: 200 }, // Justera till vänster från kanten för mobil
          top: { xs: 110, md: 90 }, // Justera till toppen från botten för mobil
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
          padding: { xs: 2, md: 4 }, // Justera padding för mobil
          position: "relative",
          borderRadius: 2,
          width: "90%",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" }, // Ställ in kolumnlayout för mobil
        }}
      >
        <Box
          sx={{
            color: "#B9DCD2",
            display: "flex",
            flex: 1,
            flexDirection: "column",
            padding: 2,
          }}
        >
          <Texting sx={{ fontSize: { xs: 18, md: 20 } }}>
            Konceptutveckling
          </Texting>
          <TextingATYP
            sx={{
              color: "#F7F7F7",
              fontSize: { xs: 12, md: 13 },
              marginTop: 2,
            }}
          >
            Du tänker att du har allt klappat och klart. En trevlig och
            informativ hemsida, levande sociala medier och ett värdefullt
            kontaktnät. Ändå är det som att du inte når riktigt hela vägen fram.
            Då kan konceptutveckling vara något som ger ditt varumärke den extra
            push som krävs.
          </TextingATYP>
          <Texting sx={{ fontSize: { xs: 18, md: 20 }, marginTop: 2 }}>
            Från 80 000:-
          </Texting>
          <TextingATYP sx={{ fontSize: { xs: 12, md: 13 } }}>
            Ex. moms
          </TextingATYP>
          <Texting sx={{ fontSize: 14, marginTop: 4 }}>
            Vad betalar jag för?
          </Texting>
          <TextingATYP
            sx={{
              color: "#F7F7F7",
              fontSize: { xs: 12, md: 13 },
              marginTop: 1,
            }}
          >
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
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { xs: "start", md: "end" }, // Justera för mobil
            padding: 2,
          }}
        >
          <Texting
            sx={{
              fontSize: { xs: 25, md: 40 },
              textAlign: { xs: "start", md: "end" },
            }}
          >
            Hur och vad vill du att din målgrupp ska känna?
          </Texting>
          <TextingATYP
            sx={{ textAlign: { xs: "start", md: "end" }, marginTop: 2 }}
          >
            Vi hjälper dig att skapa en starkare koppling mellan ditt varumärke
            och din målgrupp.
          </TextingATYP>
        </Box>
      </Box>
    </Box>
  );
}
