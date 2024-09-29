import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export default function SocialMedia() {
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
        }}
      >
        <Texting
          sx={{
            fontSize: { xs: 35, md: 40 },
            color: "#363434",
          }}
        >
          Sociala medier
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
            backgroundColor: "#B9DCD2",
            width: 310,
            color: "#363434",
            padding: 2,
            marginTop: 10,
          }}
        >
          <Texting sx={{ color: "#2D6555", fontSize: 25, paddingTop: 2 }}>
            Klick
          </Texting>
          <TextingATYP sx={{ fontSize: 13 }}>
            Du vet vad du vill, men har svårt att få fram rätt känsla. Då
            behöver du en klick!
          </TextingATYP>
          <Texting sx={{ color: "#2D6555", fontSize: 25, paddingTop: 2 }}>
            4500:-/mån
          </Texting>
          <TextingATYP sx={{ fontSize: 13 }}>
            Priset gäller löpande avtal, lägsta avtalstid 6 mån.
          </TextingATYP>
          <Texting sx={{ color: "#2D6555", fontSize: 14, paddingTop: 2 }}>
            Vad får du?
          </Texting>
          <TextingATYP sx={{ fontSize: 13, paddingTop: 2 }}>
            -Uppstartsmöte
          </TextingATYP>
          <TextingATYP sx={{ fontSize: 13 }}>-Tre inlägg per månad</TextingATYP>
          <TextingATYP sx={{ fontSize: 13 }}>-Passande copy</TextingATYP>
          <TextingATYP sx={{ fontSize: 13 }}>
            -Enklare redigering på befintligt bildmaterial
          </TextingATYP>
          <TextingATYP sx={{ fontSize: 13 }}>
            -Publicering i en kanal
          </TextingATYP>

          <TextingATYP
            sx={{ fontSize: 12, textAlign: "center", paddingTop: 2 }}
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
            width: 310,
            padding: 2,
            marginTop: 5,
            color: "#363434",
          }}
        >
          <Texting sx={{ fontSize: 30, paddingTop: 2, color: "#EF3434" }}>
            Klack
          </Texting>
          <TextingATYP sx={{ fontSize: 13 }}>
            Du vet vad du vill, men har svårt att få fram rätt känsla. Då
            behöver du en klack!
          </TextingATYP>
          <Texting sx={{ fontSize: 25, paddingTop: 2, color: "#EF3434" }}>
            8500:-/mån
          </Texting>
          <TextingATYP sx={{ fontSize: 13 }}>
            Priset gäller löpande avtal, lägsta avtalstid 6 mån.
          </TextingATYP>
          <Texting sx={{ fontSize: 14, paddingTop: 2, color: "#EF3434" }}>
            Vad får du?
          </Texting>
          <TextingATYP sx={{ fontSize: 13, paddingTop: 2 }}>
            -Uppstartsmöte
          </TextingATYP>
          <TextingATYP sx={{ fontSize: 13 }}>
            -Fyra inlägg per månad
          </TextingATYP>
          <TextingATYP sx={{ fontSize: 13 }}>
            -Publicering i två kanaler
          </TextingATYP>
          <TextingATYP sx={{ fontSize: 13 }}>-Passande copy</TextingATYP>
          <TextingATYP sx={{ fontSize: 13 }}>
            -Enklare fotografering inkl. redigering
          </TextingATYP>
          <TextingATYP sx={{ fontSize: 13 }}>
            -Contentplan för hela avtalstiden
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
            För dig som vill gå all in, och få en tiopoängare direkt!
          </TextingATYP>
          <Texting sx={{ color: "#B8DCD2", fontSize: 25, paddingTop: 2 }}>
            15000:-/mån
          </Texting>
          <TextingATYP sx={{ fontSize: 13 }}>
            Priset gäller löpande avtal, lägsta avtalstid 6 mån.
          </TextingATYP>
          <Texting sx={{ color: "#B8DCD2", fontSize: 14, paddingTop: 2 }}>
            Vad får du?
          </Texting>
          <TextingATYP sx={{ fontSize: 13, paddingTop: 2 }}>
            -Uppstartsmöte
          </TextingATYP>
          <TextingATYP sx={{ fontSize: 13 }}>
            -Åtta inlägg per månad
          </TextingATYP>
          <TextingATYP sx={{ fontSize: 13 }}>
            -Publicering i upp till tre kanaler
          </TextingATYP>
          <TextingATYP sx={{ fontSize: 13 }}>-Passande copy</TextingATYP>
          <TextingATYP sx={{ fontSize: 13 }}>
            -Fotografering inkl. redigering
          </TextingATYP>
          <TextingATYP sx={{ fontSize: 13 }}>
            -Contentplan för hela avtalstiden
          </TextingATYP>
          <TextingATYP sx={{ fontSize: 13 }}>
            -Annonsering och analys
          </TextingATYP>
        </Box>
      </Box>
    </Box>
  );
}
