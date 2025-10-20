import styled from "@emotion/styled";
import { Box, Button, Typography, TypographyProps } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { isMobile, isTablet } from "./GreyComponent";

export default function Webdesign() {
  const Texting = styled(Typography)<TypographyProps>`
    font-family: "H3", sans-serif;
    font-variation-settings: "wght" 300;
  `;

  const TextingATYP = styled(Typography)<TypographyProps>`
    font-family: "atyp-bl-variable", sans-serif;
    font-variation-settings: "ital" 0, "opsz" 6, "wght" 280;
  `;

  // const boxHeight = { xs: 310, md: 315, xl: 370 };
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
            marginTop: titleMarginTop,
          }}
          component="h1"
        >
          Webbdesign
        </Texting>
        <TextingATYP
          component="h3"
          sx={{
            fontSize: { xs: 20, md: 20, xl: 25 },
            color: "#363434",
            margin: 0,
            padding: 0,
            // marginBottom: { xs: -9, md: 0 },
            marginBottom: { xs: -9, md: 0 },
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
          paddingBottom: { xs: 8, md: 0 },
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
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
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
            <TextingATYP sx={{ fontSize: { xs: 13, xl: 16 } }}>
              Du behöver en hemsida som presenterar ditt varumärke på ett snyggt
              sätt.
            </TextingATYP>
            <Texting sx={{ color: "#2D6555", fontSize: 25, paddingTop: 1 }}>
              20 000:-
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
                paddingTop: 0.5,
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
                paddingTop: 1,
              }}
            >
              Hemsidan är responsiv och anpassas till desktop, platta eller
              mobil beroende på besökarens referenser.
            </TextingATYP>
            <Button
              fullWidth
              aria-label="Välj Klick"
              onClick={() => goToOffertWithPreselect("Webdesign: Klick")}
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
              width: 310,
              padding: 4,
              marginTop: 3,
              color: "#363434",
              paddingTop: 2,
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
              Hemsidan är responsiv och anpassas till desktop, platta eller
              mobil beroende på besökarens referenser.
            </TextingATYP>
            <Button
              fullWidth
              aria-label="Välj Klack"
              onClick={() => goToOffertWithPreselect("Webdesign: Klack")}
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
              width: 310,
              color: "#F7F7F7",
              padding: 4,
              marginTop: -8,
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
              För dig är det viktigt med en unik design. Här specialdesignar vi
              på detaljnivå för att ditt varumärke ska sticka ut, precis så som
              det förtjänar att göra.
            </TextingATYP>
            <Texting sx={{ color: "#B8DCD2", fontSize: 25, paddingTop: 2 }}>
              Från 60 000:-
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
                paddingTop: 5,
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
            <Button
              fullWidth // gör hela knappen klickbar horisontellt
              aria-label="Välj Boom"
              onClick={() => goToOffertWithPreselect("Webdesign: Boom")}
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
