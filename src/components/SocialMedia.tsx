import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { isTablet } from "./GreyComponent";

export default function SocialMedia() {
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
      id="socialamedier"
      sx={{
        paddingLeft: { xs: 2, md: 10 },
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
            zIndex:999,
            marginBottom: { xs: -1, md: 0 },
          }}
        >
          Sociala medier
        </Texting>
        <TextingATYP
          sx={{
            fontSize: { xs: 20, md: 20, xl: 25 },
            color: "#363434",
            margin: 0,
            padding: 0,
            marginBottom: { xs: -9, md: 0 },
            zIndex:999,
            // marginTop: { xs: -1, md: 0 },
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
            width: { xs: 310, md: 310, xl: 330 },
            color: "#363434",
            padding: 4,
            marginTop: 10,
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
            Du vet vad du vill, men har svårt att få fram rätt känsla. Då
            behöver du en klick!
          </TextingATYP>
          <Texting
            sx={{
              color: "#2D6555",
              fontSize: { xs: 25, xl: 30 },
              paddingTop: 2,
            }}
          >
            4500:-/mån
          </Texting>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            Priset gäller löpande avtal, lägsta avtalstid 6 mån.
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
            -Tre inlägg per månad
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Passande copy
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Enklare redigering på befintligt bildmaterial
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Publicering i en kanal
          </TextingATYP>

          <TextingATYP
            sx={{
              fontSize: { xs: 12, xl: 13 },
              textAlign: "center",
              paddingTop: 2,
            }}
          >
            Klick erbjuds också som ett engångspaket. Då till en kostnad på
            5500:-
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
            Du vet vad du vill, men har svårt att få fram rätt känsla. Då
            behöver du en klack!
          </TextingATYP>
          <Texting
            sx={{
              fontSize: 25,
              paddingTop: { xs: 6, xl: 4 },
              color: "#EF3434",
            }}
          >
            8500:-/mån
          </Texting>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            Priset gäller löpande avtal, lägsta avtalstid 6 mån.
          </TextingATYP>
          <Texting
            sx={{
              fontSize: { xs: 14, xl: 17 },
              paddingTop: { xs: 2, xl: 4 },
              color: "#EF3434",
            }}
          >
            Vad får du?
          </Texting>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 }, paddingTop: 2 }}>
            -Uppstartsmöte
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Fyra inlägg per månad
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Publicering i två kanaler
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Passande copy
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Enklare fotografering inkl. redigering
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Contentplan för hela avtalstiden
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
            För dig som vill gå all in, och få en tiopoängare direkt!
          </TextingATYP>
          <Texting
            sx={{
              color: "#B8DCD2",
              fontSize: 25,
              paddingTop: { xs: 9, xl: 7 },
            }}
          >
            15000:-/mån
          </Texting>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            Priset gäller löpande avtal, lägsta avtalstid 6 mån.
          </TextingATYP>
          <Texting
            sx={{
              color: "#B8DCD2",
              fontSize: { xs: 14, xl: 17 },
              paddingTop: { xs: 2, xl: 4 },
            }}
          >
            Vad får du?
          </Texting>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 }, paddingTop: 2 }}>
            -Uppstartsmöte
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Åtta inlägg per månad
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Publicering i upp till tre kanaler
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Passande copy
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Fotografering inkl. redigering
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Contentplan för hela avtalstiden
          </TextingATYP>
          <TextingATYP sx={{ fontSize: { xs: 13, xl: 15 } }}>
            -Annonsering och analys
          </TextingATYP>
        </Box>
      </Box>
    </Box>
  );
}
