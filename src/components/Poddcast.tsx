import styled from "@emotion/styled";
import { Box, Button, Typography, TypographyProps } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { isMobile, isTablet } from "./GreyComponent";
// FORTSÄTT MED MARGINTOP , BOXHEIGT OCH PADDING TOP

export interface PoddcastProps {
  marginLeft?: number;
  topMargin?: number;
  paddingBottom?: number;
  height?: number;
  width?:
    | number
    | { xs?: number; sm?: number; md?: number; lg?: number; xl?: number };
  fontSize?:
    | number
    | { xs?: number; sm?: number; md?: number; lg?: number; xl?: number };
}

export default function Poddcast(props: PoddcastProps) {
  const Texting = styled(Typography)<TypographyProps>`
    font-family: "H3", sans-serif;
    font-variation-settings: "wght" 300;
  `;

  const TextingATYP = styled(Typography)<TypographyProps>`
    font-family: "atyp-bl-variable", sans-serif;
    font-variation-settings: "ital" 0, "opsz" 6, "wght" 280;
  `;

  // const boxHeight = { xs: 315, md: 370, xl: 390 }; // Samma höjd för alla boxar
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
      id="poddcast"
      sx={{
        paddingLeft: 0,
        marginLeft: props.marginLeft ? props.marginLeft : -8,
        display: "flex",
        flexDirection: "column",
        paddingTop: 1,
        backgroundColor: "#F7F7F7",
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
            marginTop: props.topMargin ? props.topMargin : titleMarginTop, // Justerar rubrikens top-margin
          }}
          component="h1"
        >
          Podcast
        </Texting>
        <TextingATYP
          component="h3"
          sx={{
            fontSize: { xs: 20, md: 20, xl: 25 },
            color: "#363434",
            margin: 0,
            padding: 0,
            marginBottom: { xs: -9, md: 2 },
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
          paddingBottom: props.paddingBottom
            ? props.paddingBottom
            : { xs: 8, md: 10 },
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
              width: props.width ? props.width : 310,
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
                paddingTop: 1,
              }}
            >
              Klick
            </Texting>
            <TextingATYP
              sx={{ fontSize: props.fontSize ?? { xs: 13, xl: 16 } }}
            >
              Du är sugen på det där med podd och har kunskaper i ljudklippning.
              Innan du går all in vill du gärna prova på - hyr vår
              poddutrustning innan du bestämmer dig för a investera i en egen!
            </TextingATYP>
            <Texting sx={{ color: "#2D6555", fontSize: 25, paddingTop: 2 }}>
              Från 700:-/dag
            </Texting>
            <TextingATYP
              sx={{
                color: "#2D6555",
                fontSize: props.fontSize ?? { xs: 13, xl: 15 },
              }}
            >
              Ex. moms
            </TextingATYP>

            <Texting
              sx={{
                color: "#2D6555",
                fontSize: props.fontSize ?? { xs: 14, xl: 17 },
                paddingTop: 2,
              }}
            >
              Vad ingår?
            </Texting>
            <TextingATYP
              sx={{
                fontSize: props.fontSize ?? { xs: 13, xl: 15 },
                paddingTop: 1,
              }}
            >
              -Tre poddmickar inkl. Bordsstativ
            </TextingATYP>
            <TextingATYP
              sx={{ fontSize: props.fontSize ?? { xs: 13, xl: 15 } }}
            >
              -Tre hörlurar
            </TextingATYP>
            <TextingATYP
              sx={{ fontSize: props.fontSize ?? { xs: 13, xl: 15 } }}
            >
              -Portabel recorder (Zoom H6)
            </TextingATYP>
            <TextingATYP
              sx={{ fontSize: props.fontSize ?? { xs: 13, xl: 15 } }}
            >
              -Enklare genomgång av utrustning, vid behov
            </TextingATYP>
            <Button
              fullWidth
              aria-label="Välj Klick"
              onClick={() => goToOffertWithPreselect("Podcast: Klick")}
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
              width: props.width ? props.width : 310,
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
            <TextingATYP
              sx={{ fontSize: props.fontSize ?? { xs: 13, xl: 15 } }}
            >
              Du är sugen på det där med podd men har varken rätt kunskap eller
              utrustning. Med klack får du inte bara tillgång till ordentlig
              utrustning - vi klipper och producerar även din podd. Vi
              publicerar också, för den som önskar.
            </TextingATYP>
            <Texting sx={{ color: "#EF3434", fontSize: 25, paddingTop: 2 }}>
              Från 6000:-
            </Texting>
            <TextingATYP
              sx={{ fontSize: props.fontSize ?? { xs: 13, xl: 15 } }}
            >
              Ex. moms
            </TextingATYP>
            <Texting
              sx={{
                fontSize: props.fontSize ?? { xs: 14, xl: 17 },
                paddingTop: 2,
                color: "#EF3434",
              }}
            >
              Vad ingår?
            </Texting>
            <TextingATYP
              sx={{
                fontSize: props.fontSize ?? { xs: 13, xl: 15 },
                paddingTop: 2,
              }}
            >
              -Tre poddmickar inkl bordsstativ
            </TextingATYP>
            <TextingATYP
              sx={{ fontSize: props.fontSize ?? { xs: 13, xl: 15 } }}
            >
              -Tre hörlurar
            </TextingATYP>
            <TextingATYP
              sx={{ fontSize: props.fontSize ?? { xs: 13, xl: 15 } }}
            >
              -Portabel recorder (Zoom H6)
            </TextingATYP>
            <TextingATYP
              sx={{ fontSize: props.fontSize ?? { xs: 13, xl: 15 } }}
            >
              -Genomgång av utrustning
            </TextingATYP>
            <TextingATYP
              sx={{ fontSize: props.fontSize ?? { xs: 13, xl: 15 } }}
            >
              -Producering/publicering
            </TextingATYP>
            <TextingATYP
              sx={{ fontSize: props.fontSize ?? { xs: 13, xl: 15 } }}
            >
              -Upp till tre timmar
            </TextingATYP>
            <Button
              fullWidth
              aria-label="Välj Klack"
              onClick={() => goToOffertWithPreselect("Podcast: Klack")}
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
              width: props.width ? props.width : 310,
              color: "#F7F7F7",
              padding: 4,
              marginTop: -4,
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
            <TextingATYP
              sx={{ fontSize: props.fontSize ?? { xs: 13, xl: 15 } }}
            >
              Du nöjer dig inte med bara ljud, du går all in och hakar på
              trenden med videopodd - smart val! Välkommen till vår poddstudio i
              centrala Borås - du sköter snacket, vi hanterar resten
            </TextingATYP>
            <Texting sx={{ color: "#B8DCD2", fontSize: 25, paddingTop: 2 }}>
              Från 9000:-
            </Texting>
            <TextingATYP
              sx={{
                color: "#F7F7F7",
                fontSize: props.fontSize ?? { xs: 13, xl: 15 },
              }}
            >
              Ex. moms
            </TextingATYP>
            <Texting
              sx={{
                color: "#B8DCD2",
                fontSize: props.fontSize ?? { xs: 14, xl: 17 },
                paddingTop: 5,
              }}
            >
              Vad ingår?
            </Texting>
            <TextingATYP
              sx={{
                fontSize: props.fontSize ?? { xs: 13, xl: 15 },
                paddingTop: 2,
              }}
            >
              -Tre poddmickar inkl bordsstativ
            </TextingATYP>
            <TextingATYP
              sx={{ fontSize: props.fontSize ?? { xs: 13, xl: 15 } }}
            >
              -Tre hörlurar
            </TextingATYP>
            <TextingATYP
              sx={{ fontSize: props.fontSize ?? { xs: 13, xl: 15 } }}
            >
              -Portabel recorder (Zoom H6)
            </TextingATYP>
            <TextingATYP
              sx={{ fontSize: props.fontSize ?? { xs: 13, xl: 15 } }}
            >
              -Producering/publicering
            </TextingATYP>
            <TextingATYP
              sx={{ fontSize: props.fontSize ?? { xs: 13, xl: 15 } }}
            >
              - Lån av poddstudio
            </TextingATYP>
            <TextingATYP
              sx={{ fontSize: props.fontSize ?? { xs: 13, xl: 15 } }}
            >
              -Hela avsnittet filmat och klippt
            </TextingATYP>
            <TextingATYP
              sx={{ fontSize: props.fontSize ?? { xs: 13, xl: 15 } }}
            >
              -Upp till tre timmar
            </TextingATYP>
            <Button
              fullWidth
              aria-label="Välj Boom"
              onClick={() => goToOffertWithPreselect("Podcast: Boom")}
              sx={{
                ...buttonStyle("#B9DCD2", "#a2cfc1", "#363434"),
                justifyContent: "center",
              }}
            >
              <Texting sx={{ pointerEvents: "none" }}>Boom!</Texting>
            </Button>
          </Box>

          {/* <Button
            aria-label="Navigera till podden Snack och surr"
            onClick={() => {
                console.log("Boom klickad");
                navigate("/offert", { state: { preselect: "Podcast: Boom" } });
              }}
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
          </Button> */}
        </Box>
      </Box>
    </Box>
  );
}
