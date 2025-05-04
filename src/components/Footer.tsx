import { Box, styled, Typography } from "@mui/material";
import { isMobile } from "./GreyComponent";

export default function Footer() {
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
      sx={{
        width: "100%",
        backgroundColor: "#363434",
        display: "flex",
        bottom: 0,
        height: { xs: "auto", xl: 320 },
        paddingTop: { xs: 2, md: 4 },
        paddingBottom: 2,
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        zIndex: 3,
      }}
      component={"footer"}
    >
      {/* Logotyp */}
      <Box
        sx={{
          paddingX: 6,
          flex: 1,
          display: "flex",
          justifyContent: { xs: "center", md: "start" },
        }}
      >
        <img
          src={"https://i.imgur.com/1MzhvyL.png"}
          alt="Yaya Media Logo"
          style={{ height: isMobile ? 70 : 130 }}
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
          marginTop: { xs: 4, md: 0 }, // Lägg till mellanrum ovanför på små skärmar
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "row", md: "column" }, // Lägger elementen vertikalt
            alignItems: "flex-start", // Justerar till vänster
            gap: { xs: 2, md: 2, xl: 5 }, // Justera mellanrum mellan Emelie och Åsa
          }}
        >
          {/* Emelie Kontaktuppgifter */}
          <Box sx={{ textAlign: "left" }}>
            <Texting
              sx={{
                color: "#F7F7F7",
                fontSize: { xs: 16, md: 20, xl: 25 },
                fontWeight: 500,
                marginBottom: 1.5,
              }}
            >
              Emelie Svernhed
            </Texting>
            <TextingATYP
              sx={{
                color: "#F7F7F7",
                marginBottom: 0.5,
                fontSize: { xs: 16, md: 20, xl: 25 },
              }}
            >
              emelie@yayamedia.se
            </TextingATYP>
            <TextingATYP
              sx={{
                color: "#F7F7F7",
                marginBottom: 1,
                fontSize: { xs: 16, md: 20, xl: 25 },
              }}
            >
              070-8 85 61 13
            </TextingATYP>
          </Box>

          {/* Åsa Kontaktuppgifter */}
          <Box sx={{ textAlign: "left" }}>
            <Texting
              sx={{
                color: "#F7F7F7",
                fontSize: { xs: 16, md: 20, xl: 25 },
                fontWeight: 500,
                marginBottom: 1.5,
              }}
            >
              Åsa Kjellberg
            </Texting>
            <TextingATYP
              sx={{
                color: "#F7F7F7",
                marginBottom: 0.5,
                fontSize: { xs: 16, md: 20, xl: 25 },
              }}
            >
              asa@yayamedia.se
            </TextingATYP>
            <TextingATYP
              sx={{
                color: "#F7F7F7",
                marginBottom: 0.5,
                fontSize: { xs: 16, md: 20, xl: 25 },
              }}
            >
              073-8 20 14 29
            </TextingATYP>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
