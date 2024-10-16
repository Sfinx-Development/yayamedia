import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export default function Webdesign() {
  const Texting = styled(Typography)`
    font-family: "H3", sans-serif;
    font-variation-settings: "wght" 300;
  `;

  const TextingATYP = styled(Typography)`
    font-family: "atyp-bl-variable", sans-serif;
    font-variation-settings: "ital" 0, "opsz" 6, "wght" 280;
  `;
  return (
    <Box
      id="webbdesign"
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
          margin: { xs: 0, md: 0 },
          height: "100%",
          width: "100%",
        }}
      >
        <Texting
          sx={{
            fontSize: { xs: 30, md: 40, xl: 45 },
            color: "#363434",
            marginBottom: { xs: -1, md: 0 },
          }}
        >
          Webbdesign
        </Texting>
        <TextingATYP
          sx={{
            fontSize: { xs: 20, md: 20, xl: 25 },
            color: "#363434",
            margin: 0,
            padding: 0,
            marginBottom: { xs: -9, md: 0 },
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
          paddingBottom: { xs: 8, md: 10 },
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
            width: 310,
            color: "#363434",
            padding: 4,
            marginTop: 4,
          }}
        >
          <Texting
            sx={{
              color: "#2D6555",
              fontSize: { xs: 25, xl: 30 },
              paddingTop: 1,
            }}
          >
            Klick
          </Texting>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 16 } }}>
            Du behöver en hemsida som presenterar ditt varumärke på ett snyggt
            sätt.
          </TextingATYP>
          <Texting sx={{ color: "#2D6555", fontSize: 25, paddingTop: 2 }}>
            20 000:-
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
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 }, paddingTop: 1 }}>
            -Uppstartsmöte
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Startsida
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Upp till fem undersidor
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Cookie policy
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Enklare sökordsanalys
          </TextingATYP>

          <TextingATYP
            sx={{
              fontSize: { xs: 12, xl: 13 },
              textAlign: "start",
              paddingTop: 2,
            }}
          >
            Hemsidan är responsiv och anpassas till desktop, platta eller mobil
            beroende på besökarens referenser.
          </TextingATYP>
        </Box>
        {/* andra klack */}
        <Box
          sx={{
            borderRadius: 2,
            backgroundColor: "#F3D9DF",
            width: 310,
            padding: 4,
            marginTop: 0,
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
            Du behöver en hemsida som presenterar ditt varumärke på ett snyggt
            sätt, men det kräver lite fler undersidor än vad klick-paketet
            erbjuder..
          </TextingATYP>
          <Texting sx={{ color: "#EF3434", fontSize: 25, paddingTop: 2 }}>
            35 000:-
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
            -Upp till åtta undersidor
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Cookie policy
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Enklare sökordsanalys
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -SEO-anpassad copy
          </TextingATYP>
          <TextingATYP
            sx={{
              fontSize: { xs: 12, xl: 13 },
              textAlign: "start",
              paddingTop: 2,
            }}
          >
            Hemsidan är responsiv och anpassas till desktop, platta eller mobil
            beroende på besökarens referenser.
          </TextingATYP>
        </Box>

        <Box
          sx={{
            borderRadius: 2,
            backgroundColor: "#363434",
            width: 310,
            color: "#F7F7F7",
            padding: 4,
            marginTop: -5,
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
            För dig är det viktigt med en unik design. Här specialdesignar vi på
            detaljnivå för att ditt varumärke ska sticka ut, precis så som det
            förtjänar att göra.
          </TextingATYP>
          <Texting sx={{ color: "#B8DCD2", fontSize: 25, paddingTop: 2 }}>
            Från 60 000:-
          </Texting>
          <TextingATYP sx={{ color: "#F7F7F7", fontSize: { xs: 13, xl: 15 } }}>
            Ex. moms
          </TextingATYP>
          <Texting
            sx={{
              color: "#B8DCD2",
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
            -Analys av befintlig hemsida
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Startsida
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Upp till 20 specialdesignade undersidor
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Cookie policy
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Enklare sökordsanalys
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Bildmanér för stillbild och video till hemsidan
          </TextingATYP>

          <TextingATYP
            sx={{
              fontSize: { xs: 12, xl: 13 },
              textAlign: "start",
              paddingTop: 2,
            }}
          >
            Hela hemsidan är responsiv och anpassas till desktop, platta eller
            mobil beroende på besökarens referenser.
          </TextingATYP>
        </Box>
      </Box>
    </Box>
  );
}
