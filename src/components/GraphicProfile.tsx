import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export default function GraphicProfile() {
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
      id="grafisk-profil"
      sx={{
        paddingLeft: 0,
        marginLeft: -8,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#F7F7F7",
          display: "flex",
          flexDirection: "column",
          margin: { xs: 2, md: 0 },
          height: "100%",
          width: "100%",
          paddingRight: 5,
        }}
      >
        <Texting
          sx={{
            fontSize: { xs: 30, md: 40, xl: 45 },
            color: "#363434",
            marginBottom: { xs: -1, md: 0 },
          }}
        >
          Grafisk profil
        </Texting>
        <TextingATYP
          sx={{
            fontSize: { xs: 20, md: 20, xl: 25 },
            color: "#363434",
            margin: 0,
            padding: 0,
            marginBottom: { xs: -8, md: 0 },
            zIndex:999,
          }}
        >
          Paketlösningar
        </TextingATYP>
      </Box>
      <Box
        sx={{
          backgroundColor: "#F7F7F7",
          display: "flex",
          flexDirection: { xs: "row", md: "row" },
          paddingBottom: { xs: 6, md: 10 },
          margin: { xs: 0, md: 0 },
          //   height: "100%",
          justifyContent: "start",
          width: "90%",
          gap: 2,
        }}
      >
        {/* första klick */}
        <Box
          sx={{
            borderRadius: 2,
            backgroundColor: "#B9DCD2",
            width: { xs: 310, md: 310, xl: 330 },
            color: "#363434",
            padding: { xs: 2, md: 4, xl: 4 },
            marginTop: 15,
          }}
        >
          <Texting
            sx={{
              color: "#2D6555",
              fontSize: { xs: 20, xl: 30 },
              paddingTop: 2,
            }}
          >
            Klick
          </Texting>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            Tröttnat på loggan? Vi gör om befintlig logotyp, eller levererar en
            helt ny om så önskas.
          </TextingATYP>
          <Texting sx={{ color: "#2D6555", fontSize: 20, paddingTop: 2 }}>
            10 000:-
          </Texting>
          <TextingATYP sx={{ color: "#2D6555", fontSize: { xs: 13, xl: 15 } }}>
            Ex. moms
          </TextingATYP>

          <Texting
            sx={{
              color: "#2D6555",
              fontSize: { xs: 14, xl: 17 },
              paddingTop: 2,
            }}
          >
            Vad får du?
          </Texting>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 }, paddingTop: 2 }}>
            -Uppstartsmöte
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Startsida
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Logotyp i leverans av png, jpg och eps
          </TextingATYP>
        </Box>
        {/* andra klack */}
        <Box
          sx={{
            borderRadius: 2,
            backgroundColor: "#F3D9DF",
            width: { xs: 310, md: 310, xl: 330 },
            padding: 4,
            marginTop: 5,
            color: "#363434",
          }}
        >
          <Texting
            sx={{
              fontSize: { xs: 30, xl: 35 },
              paddingTop: 2,
              color: "#EF3434",
            }}
          >
            Klack
          </Texting>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            Du inser att du behöver mer än bara en logga. Du vill ha grafiska
            riktlinjer att följa, så att ditt företag känns igen på alla
            platser.
          </TextingATYP>
          <Texting sx={{ color: "#EF3434", fontSize: 25, paddingTop: 2 }}>
            25 000:-
          </Texting>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            Ex. moms
          </TextingATYP>
          <Texting
            sx={{
              fontSize: { xs: 14, xl: 17 },
              paddingTop: 2,
              color: "#EF3434",
            }}
          >
            Vad får du?
          </Texting>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 }, paddingTop: 2 }}>
            -Uppstartsmöte
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Startsida
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Logotyp (leverans i png, jpg och eps)
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Favicon
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Typografi och riktlinjer för hur det ska användas
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Färger i RGB och Hex-kod
          </TextingATYP>
        </Box>

        <Box
          sx={{
            borderRadius: 2,
            backgroundColor: "#363434",
            width: { xs: 310, md: 310, xl: 330 },
            color: "#F7F7F7",
            padding: 4,
            marginTop: 0,
          }}
        >
          <Texting
            sx={{
              color: "#B8DCD2",
              fontSize: { xs: 35, xl: 40 },
              paddingTop: 2,
            }}
          >
            Boom!
          </Texting>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            Du går all in direkt och ger ditt bolag de bästa förutsättningarna
            för att ta sin plats på marknaden.
          </TextingATYP>
          <Texting
            sx={{
              color: "#B8DCD2",
              fontSize: 25,
              paddingTop: { xs: 2, xl: 4 },
            }}
          >
            60.000:-
          </Texting>
          <TextingATYP sx={{ color: "#F7F7F7", fontSize: { xs: 13, xl: 15 } }}>
            Ex. moms
          </TextingATYP>
          <Texting
            sx={{
              color: "#B8DCD2",
              fontSize: { xs: 14, xl: 17 },
              paddingTop: { xs: 2, md: 3 },
            }}
          >
            Vad får du?
          </Texting>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 }, paddingTop: 2 }}>
            -Allt som ingår i Klack
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Färger i Pantone
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Visualisering av logotyp på 6 tillämpningar
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 12, xl: 13 } }}>
            -Visitkort
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Bildmáner
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Formgivning av två enheter, tex roll-up/flagga, skylt,
            profilprodukt
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Allt levererat i en brandbook
          </TextingATYP>
        </Box>
      </Box>
    </Box>
  );
}
