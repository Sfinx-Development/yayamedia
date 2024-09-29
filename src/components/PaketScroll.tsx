import { Box, styled, Typography } from "@mui/material";

export default function PaketScroll() {
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingBottom: { xs: 5, md: 20 },
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
            fontSize: { xs: 35, md: 40 },
            margin: 0,
            padding: 0,
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
          backgroundColor: "blue",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          paddingBottom: { xs: 5, md: 10 },
          margin: { xs: 2, md: 0 },
          height: "100%",
          justifyContent: "center",
          width: "100%",
          gap: 2,
        }}
      >
        <Box
          sx={{
            borderRadius: 2,
            backgroundColor: "#B9BCD2",
            width: 320,
            color: "#363434",
            padding: 2,
            marginTop: 15,
          }}
        >
          <Texting sx={{ color: "#2D6555", fontSize: 25, paddingTop: 2 }}>
            Klick
          </Texting>
          <TextingATYP sx={{ fontSize: 14 }}>
            Du vet vad du vill, men har svårt att få fram rätt känsla. Då
            behöver du en klick!
          </TextingATYP>
          <Texting sx={{ color: "#2D6555", fontSize: 25, paddingTop: 2 }}>
            4500:-/mån
          </Texting>
          <TextingATYP sx={{ fontSize: 14 }}>
            Priset gäller löpande avtal, lägsta avtalstid 6 mån.
          </TextingATYP>
          <Texting sx={{ color: "#2D6555", fontSize: 14, paddingTop: 2 }}>
            Vad får du?
          </Texting>
          <TextingATYP sx={{ fontSize: 14, paddingTop: 2 }}>
            -Uppstartsmöte
          </TextingATYP>
          <TextingATYP sx={{ fontSize: 14 }}>-Tre inlägg per månad</TextingATYP>
          <TextingATYP sx={{ fontSize: 14 }}>-Passande copy</TextingATYP>
          <TextingATYP sx={{ fontSize: 14 }}>
            -Enklare redigering på befintligt bildmaterial
          </TextingATYP>
          <TextingATYP sx={{ fontSize: 14 }}>
            -Publicering i en kanal
          </TextingATYP>

          <TextingATYP
            sx={{ fontSize: 12, textAlign: "center", paddingTop: 2 }}
          >
            Klick erbjuds också som ett engångspaket. Då till en kostnad på
            5500:-
          </TextingATYP>
        </Box>

        <Box
          sx={{
            borderRadius: 2,
            backgroundColor: "#B9BCD2",
            width: 350,
            color: "#363434",
            padding: 2,

            marginTop: 10,
          }}
        >
          <Texting sx={{ color: "#2D6555", fontSize: 25, paddingTop: 2 }}>
            Klick
          </Texting>
          <TextingATYP sx={{ fontSize: 14 }}>
            Du vet vad du vill, men har svårt att få fram rätt känsla. Då
            behöver du en klick!
          </TextingATYP>
          <Texting sx={{ color: "#2D6555", fontSize: 25, paddingTop: 2 }}>
            4500:-/mån
          </Texting>
          <TextingATYP sx={{ fontSize: 14 }}>
            Priset gäller löpande avtal, lägsta avtalstid 6 mån.
          </TextingATYP>
          <Texting sx={{ color: "#2D6555", fontSize: 14, paddingTop: 2 }}>
            Vad får du?
          </Texting>
          <TextingATYP sx={{ fontSize: 14, paddingTop: 2 }}>
            -Uppstartsmöte
          </TextingATYP>
          <TextingATYP sx={{ fontSize: 14 }}>-Tre inlägg per månad</TextingATYP>
          <TextingATYP sx={{ fontSize: 14 }}>-Passande copy</TextingATYP>
          <TextingATYP sx={{ fontSize: 14 }}>
            -Enklare redigering på befintligt bildmaterial
          </TextingATYP>
          <TextingATYP sx={{ fontSize: 14 }}>
            -Publicering i en kanal
          </TextingATYP>

          <TextingATYP
            sx={{ fontSize: 12, textAlign: "center", paddingTop: 2 }}
          >
            Klick erbjuds också som ett engångspaket. Då till en kostnad på
            5500:-
          </TextingATYP>
        </Box>

        <Box
          sx={{
            borderRadius: 2,
            backgroundColor: "#B9BCD2",
            width: 350,
            color: "#363434",
            padding: 2,

            marginTop: 5,
          }}
        >
          <Texting sx={{ color: "#2D6555", fontSize: 25, paddingTop: 2 }}>
            Klick
          </Texting>
          <TextingATYP sx={{ fontSize: 14 }}>
            Du vet vad du vill, men har svårt att få fram rätt känsla. Då
            behöver du en klick!
          </TextingATYP>
          <Texting sx={{ color: "#2D6555", fontSize: 25, paddingTop: 2 }}>
            4500:-/mån
          </Texting>
          <TextingATYP sx={{ fontSize: 14 }}>
            Priset gäller löpande avtal, lägsta avtalstid 6 mån.
          </TextingATYP>
          <Texting sx={{ color: "#2D6555", fontSize: 14, paddingTop: 2 }}>
            Vad får du?
          </Texting>
          <TextingATYP sx={{ fontSize: 14, paddingTop: 2 }}>
            -Uppstartsmöte
          </TextingATYP>
          <TextingATYP sx={{ fontSize: 14 }}>-Tre inlägg per månad</TextingATYP>
          <TextingATYP sx={{ fontSize: 14 }}>-Passande copy</TextingATYP>
          <TextingATYP sx={{ fontSize: 14 }}>
            -Enklare redigering på befintligt bildmaterial
          </TextingATYP>
          <TextingATYP sx={{ fontSize: 14 }}>
            -Publicering i en kanal
          </TextingATYP>

          <TextingATYP
            sx={{ fontSize: 12, textAlign: "center", paddingTop: 2 }}
          >
            Klick erbjuds också som ett engångspaket. Då till en kostnad på
            5500:-
          </TextingATYP>
        </Box>
      </Box>
    </Box>
  );
}
