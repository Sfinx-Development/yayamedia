import styled from "@emotion/styled";
import { Box, Button, Typography, TypographyProps } from "@mui/material";
import { useNavigate } from "react-router-dom";
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

  // const boxHeight = { xs: 305, sm: 300, md: 320, xl: 380 };
  const titleMarginTop = { xs: 0, md: 20, xl: 20 };
  const navigate = useNavigate();

  const goToOffertWithPreselect = (preselect: string) => {
    navigate("/offert", { state: { preselect } });
  };

  const buttonStyle = (bg: string, hover: string, textColor = "#F7F7F7") => ({
    backgroundColor: bg,
    color: textColor,
    marginTop: 1,
    width: isTablet ? "50%" : "35%",
    marginBottom: 5,
    borderRadius: 2,
    paddingY: isMobile ? 1 : 1.2,
    textTransform: "none",
    marginY: { xs: 2, md: 2 },
    "&:hover": {
      backgroundColor: hover,
    },
  });

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
          paddingTop: 2,
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
            marginBottom: { xs: -1, md: 7 },
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
          alignItems: "flex-end",
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
              marginTop: 10,
              // height: boxHeight,
              display: "flex", // 👈 viktigt
              flexDirection: "column", // 👈 viktigt
              justifyContent: "space-between", // 👈 trycker ner knappen till botten
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
            <Button
              fullWidth
              aria-label="Välj Klick"
              onClick={() => goToOffertWithPreselect("Grafisk profil: Klick")}
              sx={{
                ...buttonStyle("#2D6555", "#244f45", "#F7F7F7"),
                justifyContent: "center",
              }}
            >
              <Texting sx={{ pointerEvents: "none" }}>Klick</Texting>
            </Button>
          </Box>
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
              marginTop: { xs: -2.5, md: 0 },

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
            <Button
              fullWidth
              aria-label="Välj Klack"
              onClick={() => goToOffertWithPreselect("Grafisk profil: Klack")}
              sx={{
                ...buttonStyle("#EF3434", "#c32d2d", "#F7F7F7"),
                justifyContent: "center",
              }}
            >
              <Texting sx={{ pointerEvents: "none" }}>Klack</Texting>
            </Button>
          </Box>
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
              marginTop: { xs: -6, md: -7.5 },
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
            <Button
              fullWidth // gör hela knappen klickbar horisontellt
              aria-label="Välj Boom"
              onClick={() => goToOffertWithPreselect("Grafisk profil: Boom")}
              sx={{
                ...buttonStyle("#B9DCD2", "#a2cfc1", "#363434"),
                justifyContent: "center", // centrerar texten
              }}
            >
              <Texting sx={{ pointerEvents: "none" }}>Boom!</Texting>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
