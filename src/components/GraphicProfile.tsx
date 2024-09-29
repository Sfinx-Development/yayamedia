import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export default function GraphicProfile() {
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
    <Box sx={{ paddingLeft: 10, display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          backgroundColor: "#F7F7F7",
          display: "flex",
          flexDirection: "column",
          margin: { xs: 2, md: 0 },
          height: "100%",
          width: "100%",
          paddingRight: 10,
        }}
      >
        <Texting
          sx={{
            fontSize: { xs: 35, md: 40 },
            color: "#363434",
          }}
        >
          Grafisk profil
        </Texting>
        <TextingATYP
          sx={{
            fontSize: 20,
            color: "#363434",
            margin: 0,
            padding: 0,
          }}
        >
          Paketlösningar
        </TextingATYP>
      </Box>
      <Box
        sx={{
          backgroundColor: "#F7F7F7",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          paddingBottom: { xs: 5, md: 10 },
          margin: { xs: 2, md: 0 },
          //   height: "100%",
          justifyContent: "start",
          width: "100%",
          gap: 2,
        }}
      >
        {/* första klick */}
        <Box
          sx={{
            borderRadius: 2,
            backgroundColor: "#363434",
            width: 310,
            color: "#F7F7F7",
            padding: 2,
            marginTop: 15,
          }}
        >
          <Texting sx={{ color: "#B8DCD2", fontSize: 25, paddingTop: 2 }}>
            Klick
          </Texting>
          <TextingATYP sx={{ fontSize: 14 }}>
            Tröttnat på loggan? Vi gör om befintlig logotyp, eller levererar en
            helt ny om så önskas.
          </TextingATYP>
          <Texting sx={{ color: "#B8DCD2", fontSize: 25, paddingTop: 2 }}>
            10 000:-
          </Texting>
          <TextingATYP sx={{ color: "#B8DCD2", fontSize: 14 }}>
            Ex. moms
          </TextingATYP>

          <Texting sx={{ color: "#B8DCD2", fontSize: 14, paddingTop: 2 }}>
            Vad får du?
          </Texting>
          <TextingATYP sx={{ fontSize: 14, paddingTop: 2 }}>
            -Uppstartsmöte
          </TextingATYP>
          <TextingATYP sx={{ fontSize: 14 }}>-Startsida</TextingATYP>
          <TextingATYP sx={{ fontSize: 14 }}>
            -Logotyp i leverans av png, jpg och eps
          </TextingATYP>
        </Box>
        {/* andra klack */}
        <Box
          sx={{
            borderRadius: 2,
            backgroundColor: "#B9DCD2",
            width: 310,
            padding: 2,
            marginTop: 5,
            color: "#363434",
          }}
        >
          <Texting sx={{ fontSize: 30, paddingTop: 2, color: "#2D6555" }}>
            Klack
          </Texting>
          <TextingATYP sx={{ fontSize: 14 }}>
            Du inser att du behöver mer än bara en logga. Du vill ha grafiska
            riktlinjer att följa, så att ditt företag känns igen på alla
            platser.
          </TextingATYP>
          <Texting sx={{ color: "#2D6555", fontSize: 25, paddingTop: 2 }}>
            25 000:-
          </Texting>
          <TextingATYP sx={{ fontSize: 14 }}>Ex. moms</TextingATYP>
          <Texting sx={{ fontSize: 14, paddingTop: 2, color: "#2D6555" }}>
            Vad får du?
          </Texting>
          <TextingATYP sx={{ fontSize: 14, paddingTop: 2 }}>
            -Uppstartsmöte
          </TextingATYP>
          <TextingATYP sx={{ fontSize: 14 }}>-Startsida</TextingATYP>
          <TextingATYP sx={{ fontSize: 14 }}>
            -Logotyp (leverans i png, jpg och eps)
          </TextingATYP>
          <TextingATYP sx={{ fontSize: 14 }}>-Favicon</TextingATYP>
          <TextingATYP sx={{ fontSize: 14 }}>
            -Typografi och riktlinjer för hur det ska användas
          </TextingATYP>
          <TextingATYP sx={{ fontSize: 14 }}>
            -Färger i RGB och Hex-kod
          </TextingATYP>
        </Box>

        <Box
          sx={{
            borderRadius: 2,
            backgroundColor: "#363434",
            width: 310,
            color: "#F7F7F7",
            padding: 2,
            marginTop: 0,
          }}
        >
          <Texting sx={{ color: "#B8DCD2", fontSize: 35, paddingTop: 2 }}>
            Boom!
          </Texting>
          <TextingATYP sx={{ fontSize: 13 }}>
            Du går all in direkt och ger ditt bolag de bästa förutsättningarna
            för att ta sin plats på marknaden.
          </TextingATYP>
          <Texting sx={{ color: "#B8DCD2", fontSize: 25, paddingTop: 2 }}>
            60.000:-
          </Texting>
          <TextingATYP sx={{ color: "#F7F7F7", fontSize: 13 }}>
            Ex. moms
          </TextingATYP>
          <Texting sx={{ color: "#B8DCD2", fontSize: 14, paddingTop: 2 }}>
            Vad får du?
          </Texting>
          <TextingATYP sx={{ fontSize: 13, paddingTop: 2 }}>
            -Allt som ingår i Klack
          </TextingATYP>
          <TextingATYP sx={{ fontSize: 13 }}>-Färger i Pantone</TextingATYP>
          <TextingATYP sx={{ fontSize: 13 }}>
            -Visualisering av logotyp på 6 tillämpningar
          </TextingATYP>
          <TextingATYP sx={{ fontSize: 12 }}>-Visitkort</TextingATYP>
          <TextingATYP sx={{ fontSize: 13 }}>-Bildmáner</TextingATYP>
          <TextingATYP sx={{ fontSize: 13 }}>
            -Formgivning av två enheter, tex roll-up/flagga, skylt,
            profilprodukt
          </TextingATYP>
          <TextingATYP sx={{ fontSize: 13 }}>
            -Allt levererat i en brandbook
          </TextingATYP>
        </Box>
      </Box>
    </Box>
  );
}
