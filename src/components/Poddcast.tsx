import styled from "@emotion/styled";
import { Box, Typography, TypographyProps } from "@mui/material";
import { isTablet } from "./GreyComponent";

export default function Poddcast() {
  const Texting = styled(Typography)<TypographyProps>`
    font-family: "H3", sans-serif;
    font-variation-settings: "wght" 300;
  `;

  const TextingATYP = styled(Typography)<TypographyProps>`
    font-family: "atyp-bl-variable", sans-serif;
    font-variation-settings: "ital" 0, "opsz" 6, "wght" 280;
  `;

  const boxHeight = { xs: 350, md: 400, xl: 450 }; // Samma höjd för alla boxar
  const titleMarginTop = { xs: 0, md: 20, xl: 20 };

  return (
    <Box
      id="poddcast"
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
          Podcast
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
            borderRadius: 2,
            backgroundColor: "#B9DCD2",
            width: 310,
            color: "#363434",
            padding: 4,
            marginTop: 14,
            height: boxHeight,
            // borderRadius: 2,
            // backgroundColor: "#B9DCD2",
            // width: { xs: 310, md: 310, xl: 330 },
            // color: "#363434",
            // padding: 4,
            // marginTop: 10,
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
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 16 } }}>
            Du är sugen på det där med podd och har kunskaper i ljudklippning.
            Innan du går all in vill du gärna prova på - hyr vår poddutrustning
            innan du bestämmer dig för a investera i en egen!
          </TextingATYP>
          <Texting sx={{ color: "#2D6555", fontSize: 25, paddingTop: 2 }}>
            Från 700:-/dag
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
            Vad ingår?
          </Texting>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 }, paddingTop: 1 }}>
            -Tre poddmickar inkl. Bordsstativ
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Tre hörlurar
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Portabel recorder (Zoom H6)
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Enklare genomgång av utrustning, vid behov
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
            Du är sugen på det där med podd men har varken rätt kunskap eller
            utrustning. Med klack får du inte bara tillgång till ordentlig
            utrustning - vi klipper och producerar även din podd. Vi publicerar
            också, för den som önskar.
          </TextingATYP>
          <Texting sx={{ color: "#EF3434", fontSize: 25, paddingTop: 2 }}>
            Från 6000:-
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
            Vad ingår?
          </Texting>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 }, paddingTop: 2 }}>
            -Tre poddmickar inkl bordsstativ
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Tre hörlurar
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Portabel recorder (Zoom H6)
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Genomgång av utrustning
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Producering/publicering
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Upp till tre timmar
          </TextingATYP>
        </Box>

        <Box
          sx={{
            borderRadius: 2,
            backgroundColor: "#363434",
            width: 310,
            color: "#F7F7F7",
            padding: 4,
            marginTop: -6,
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
            Du nöjer dig inte med bara ljud, du går all in och hakar på trenden
            med videopodd - smart val! Välkommen till vår poddstudio i centrala
            Borås - du sköter snacket, vi hanterar resten
          </TextingATYP>
          <Texting sx={{ color: "#B8DCD2", fontSize: 25, paddingTop: 2 }}>
            Från 9000:-
          </Texting>
          <TextingATYP sx={{ color: "#F7F7F7", fontSize: { xs: 13, xl: 15 } }}>
            Ex. moms
          </TextingATYP>
          <Texting
            sx={{
              color: "#B8DCD2",
              fontSize: { xs: 14, xl: 17 },
              paddingTop: 5,
            }}
          >
            Vad ingår?
          </Texting>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 }, paddingTop: 2 }}>
            -Tre poddmickar inkl bordsstativ
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Tre hörlurar
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Portabel recorder (Zoom H6)
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Producering/publicering
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            - Lån av poddstudio
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Hela avsnittet filmat och klippt
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Upp till tre timmar
          </TextingATYP>
        </Box>
      </Box>
    </Box>
  );
}
