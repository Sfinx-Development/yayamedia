import { Box, styled, Typography } from "@mui/material";

export default function Footer() {
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
        width: "100%",
        backgroundColor: "#363434",
        display: "flex",
        bottom: 0,
        height: 200,
        flexDirection: { xs: "column", md: "row" }, // Ändrar layout baserat på skärmstorlek
        justifyContent: "space-between",
        paddingY: 2,
        zIndex: 3,
      }}
      component={"footer"}
    >
      {/* Logotyp */}
      <Box
        sx={{ paddingX: 6, flex: 1, display: "flex", justifyContent: "start" }}
      >
        <img
          src={"https://i.imgur.com/1MzhvyL.png"}
          alt="Yaya Logo"
          style={{ height: isMobile ? 70 : 90 }} // Mindre logotyp på små skärmar
        />
      </Box>

      {/* För kontaktuppgifterna */}
      <Box
        sx={{
          paddingX: 2,
          flex: 1,
          display: "flex",
          justifyContent: "flex-end", // Flyttar hela blocket till höger
          marginRight: { xs: 0, md: 5 }, // Justera marginal beroende på skärmstorlek
          marginTop: { xs: 2, md: 0 }, // Lägg till mellanrum ovanför på små skärmar
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column", // Lägger elementen vertikalt
            alignItems: "flex-start", // Justerar till vänster
            gap: 2, // Justera mellanrum mellan Emelie och Åsa
          }}
        >
          {/* Emelie Kontaktuppgifter */}
          <Box sx={{ textAlign: "left" }}>
            <Texting
              sx={{
                color: "#F7F7F7",
                fontSize: 20,
                fontWeight: 500,
                marginBottom: 1.5,
              }}
            >
              Emelie Svernhed
            </Texting>
            <TextingATYP sx={{ color: "#F7F7F7", marginBottom: 0.5 }}>
              emelie@yayamedia.se
            </TextingATYP>
            <TextingATYP sx={{ color: "#F7F7F7", marginBottom: 0.5 }}>
              070-7 46 06 69
            </TextingATYP>
          </Box>

          {/* Åsa Kontaktuppgifter */}
          <Box sx={{ textAlign: "left" }}>
            <Texting
              sx={{
                color: "#F7F7F7",
                fontSize: 20,
                fontWeight: 500,
                marginBottom: 1.5,
              }}
            >
              Åsa Kjellberg
            </Texting>
            <TextingATYP sx={{ color: "#F7F7F7", marginBottom: 0.5 }}>
              asa@yayamedia.se
            </TextingATYP>
            <TextingATYP sx={{ color: "#F7F7F7", marginBottom: 0.5 }}>
              073-8 20 14 29
            </TextingATYP>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
