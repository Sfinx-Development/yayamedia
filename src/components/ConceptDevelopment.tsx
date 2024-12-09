import styled from "@emotion/styled";
import { Box, Typography, TypographyProps } from "@mui/material";
import { isBiggerScreen } from "./GreyComponent";

export default function ConceptDevelopment() {
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
      id="konceptutveckling"
      sx={{
        width:
          window.innerWidth > 2500
            ? "80%"
            : {
                xs: "100%",
              },
        backgroundColor: "#F7F7F7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        flexDirection: "column",
        height: "100%",
        padding: { xs: 0 },
        marginTop: 4,
        marginX: { xl: 4 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          padding: { xs: 2, md: 0 },
          backgroundColor: "#F7F7F7",
        }}
      >
        <Texting
          sx={{
            fontSize: { xs: 30, md: 40, xl: 50 },
            color: "#363434",
            paddingLeft: { xs: 4, md: 8, xl: 10 },
            marginBottom: 0.5,
          }}
          component="h2"
        >
          En extra push
        </Texting>
      </Box>

      <Box
        sx={{
          backgroundColor: "#F3D9DF",
          borderRadius: "50%",
          width: isBiggerScreen ? 200 : { xs: 70, md: 100 },
          height: isBiggerScreen ? 200 : { xs: 70, md: 100 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          zIndex: 2,
          right: isBiggerScreen ? 300 : { xs: 50, md: 180, xl: 300 },
          top: isBiggerScreen ? -40 : { xs: 40, md: 10, xl: 10 },
        }}
      >
        <img
          src="https://i.imgur.com/6aWnJLD.png"
          alt="guy dancing on hands"
          style={{
            borderRadius: "50%",
            width: "80%",
            height: "80%",
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          backgroundColor: "#363434",
          padding: { xs: 2, md: 4, xl: 5 },
          position: "relative",
          borderRadius: 2,
          width: isBiggerScreen ? "92%" : "88%",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          gap: { xl: 10 },
        }}
      >
        <Box
          sx={{
            color: "#B9DCD2",
            display: "flex",
            flex: 1,
            flexDirection: "column",
            padding: 2,
            paddingLeft: { xl: 10 },
          }}
        >
          <Texting component="h2" sx={{ fontSize: { xs: 18, md: 20, xl: 30 } }}>
            Konceptutveckling
          </Texting>
          <TextingATYP
            sx={{
              width: window.innerWidth > 2500 ? "80%" : "100%",
              color: "#F7F7F7",
              fontSize: { xs: 12, md: 13, xl: 20 },
              marginTop: 2,
            }}
            component="h3"
          >
            Du tänker att du har allt klappat och klart. En trevlig och
            informativ hemsida, levande sociala medier och ett värdefullt
            kontaktnät. Ändå är det som att du inte når riktigt hela vägen fram.
            Då kan konceptutveckling vara något som ger ditt varumärke den extra
            push som krävs.
          </TextingATYP>
          <Texting sx={{ fontSize: { xs: 18, md: 20, xl: 30 }, marginTop: 2 }}>
            Från 80 000:-
          </Texting>
          <TextingATYP sx={{ fontSize: { xs: 12, md: 13, xl: 18 } }}>
            Ex. moms
          </TextingATYP>
          <Texting sx={{ fontSize: { xs: 14, md: 20 }, marginTop: 4 }}>
            Vad betalar jag för?
          </Texting>
          <TextingATYP
            sx={{
              color: "#F7F7F7",
              fontSize: { xs: 12, md: 13, xl: 20 },
              marginTop: 1,

              width: isBiggerScreen ? "80%" : "100%",
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
            alignItems: { xs: "start", md: "end" },
            padding: 2,
            paddingRight: { xl: 10 },
            width: "100%",
          }}
        >
          <Texting
            sx={{
              fontSize: isBiggerScreen ? 56 : { xs: 25, md: 40, xl: 52 },
              textAlign: { xs: "start", md: "end" },
              width: isBiggerScreen ? "65%" : "70%",
            }}
          >
            Hur och vad vill du att din målgrupp ska känna?
          </Texting>
          <TextingATYP
            sx={{
              textAlign: { xs: "start", md: "end" },
              marginTop: 2,
              fontSize: { xs: 20, xl: 25 },
              marginLeft: { xl: 22 },
              width: isBiggerScreen ? "55%" : "65%",
            }}
          >
            Vi hjälper dig att skapa en starkare koppling mellan ditt varumärke
            och din målgrupp.
          </TextingATYP>
        </Box>
      </Box>
    </Box>
  );
}
