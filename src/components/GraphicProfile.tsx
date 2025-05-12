import styled from "@emotion/styled";
import { Box, Button, Typography, TypographyProps } from "@mui/material";
import { isMobile, isTablet } from "./GreyComponent";

export default function GraphicProfile() {
  const Texting = styled(Typography)<TypographyProps>`
    font-family: "H3", sans-serif;
    font-variation-settings: "wght" 300;
  `;

  const TextingATYP = styled(Typography)<TypographyProps>`
    font-family: "atyp-bl-variable", sans-serif;
    font-variation-settings: "ital" 0, "opsz" 6, "wght" 280;
  `;

  const boxHeight = { xs: 435, sm: 300, md: 430, xl: 540 }; // Samma höjd för alla boxar
  const titleMarginTop = { xs: 0, md: 20, xl: 20 };

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
        }}
      >
        <Texting
          sx={{
            fontSize: isTablet ? 40 : { xs: 30, md: 40, xl: 45 },
            color: "#363434",
            zIndex: 999,
            marginBottom: { xs: -1, md: 0 },
            marginTop: titleMarginTop, // Justerar rubrikens top-margin
          }}
          component="h1"
        >
          Grafisk profil
        </Texting>
        <TextingATYP
          component="h3"
          sx={{
            fontSize: { xs: 20, md: 20, xl: 25 },
            color: "#363434",
            margin: 0,
            padding: 0,
            // marginBottom: { xs: -9, md: 0 },
            zIndex: 999,
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
            display: "flex",
            flex: 1,
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{
              borderRadius: 2,
              backgroundColor: "#B9DCD2",
              width: 310,
              color: "#363434",
              padding: 4,
              marginTop: 4,
              height: boxHeight,
              // borderRadius: 2,
              // backgroundColor: "#B9DCD2",
              // width: { xs: 310, md: 310, xl: 330 },
              // color: "#363434",
              // padding: { xs: 2, md: 4, xl: 4 },
              // marginTop: 15,
              // height: boxHeight, // Justerar höjden på boxarna
            }}
          >
            <Texting
              sx={{
                color: "#2D6555",
                fontSize: { xs: 25, xl: 30 },
                paddingTop: 2,
              }}
            >
              Klick
            </Texting>
            <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
              Tröttnat på loggan? Vi gör om befintlig logotyp, eller levererar
              en helt ny om så önskas.
            </TextingATYP>
            <Texting sx={{ color: "#2D6555", fontSize: 25, paddingTop: 2 }}>
              10 000:-
            </Texting>
            <TextingATYP
              sx={{ color: "#2D6555", fontSize: { xs: 13, xl: 15 } }}
            >
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
              -Logotyp i leverans av png, jpg och eps
            </TextingATYP>
          </Box>
          <Button
            aria-label="Navigera till podden Snack och surr"
            sx={{
              backgroundColor: "#2D6555",
              marginTop: 1,
              width: isTablet ? "50%" : "35%",
              color: "#F7F7F7",
              marginBottom: 5,
              // marginTop: 5,
              borderRadius: 2,
              paddingY: isMobile ? 1 : 1.2,
              textTransform: "none",
              marginY: { xs: 2, md: 2 },

              "&:hover": {
                backgroundColor: "#244f45",
              },
            }}
          >
            <Texting sx={{ fontSize: { sx: 10, md: 18, xl: 25 } }}>
              Klick
            </Texting>
          </Button>
        </Box>
        {/* andra klack */}
        <Box
          sx={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{
              borderRadius: 2,
              backgroundColor: "#F3D9DF",
              width: { xs: 310, md: 310, xl: 330 },
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
                paddingTop: 3,
                color: "#EF3434",
              }}
            >
              Vad får du?
            </Texting>
            <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 }, paddingTop: 2 }}>
              -Uppstartsmöte
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
          <Button
            aria-label="Navigera till podden Snack och surr"
            sx={{
              backgroundColor: "#EF3434",
              marginTop: 1,
              width: isTablet ? "50%" : "35%",
              color: "#F7F7F7",
              marginBottom: 5,
              // marginTop: 5,
              borderRadius: 2,
              paddingY: isMobile ? 1 : 1.2,
              textTransform: "none",
              marginY: { xs: 2, md: 2 },

              "&:hover": {
                backgroundColor: "#c32d2d",
              },
            }}
          >
            <Texting sx={{ fontSize: { sx: 10, md: 18, xl: 25 } }}>
              Klack
            </Texting>
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{
              borderRadius: 2,
              backgroundColor: "#363434",
              width: { xs: 310, md: 310, xl: 330 },
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
            <TextingATYP
              sx={{ color: "#F7F7F7", fontSize: { xs: 13, xl: 15 } }}
            >
              Ex. moms
            </TextingATYP>
            <Texting
              sx={{
                color: "#B8DCD2",
                fontSize: { xs: 14, xl: 17 },
                paddingTop: { xs: 2, md: 6 },
              }}
            >
              Vad får du?
            </Texting>
            <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 }, paddingTop: 1 }}>
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
          <Button
            aria-label="Navigera till podden Snack och surr"
            sx={{
              backgroundColor: "#B9DCD2",
              color: "#363434",
              marginTop: 1,
              width: isTablet ? "50%" : "35%",

              marginBottom: 5,
              // marginTop: 5,
              borderRadius: 2,
              paddingY: isMobile ? 1 : 1.2,
              textTransform: "none",
              marginY: { xs: 2, md: 2 },

              "&:hover": {
                backgroundColor: "#a2cfc1",
              },
            }}
          >
            <Texting sx={{ fontSize: { sx: 10, md: 18, xl: 25 } }}>
              Boom!
            </Texting>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
