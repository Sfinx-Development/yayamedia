import { Box, Button, Typography, styled, TypographyProps } from "@mui/material";
import React from "react";
import { isTablet } from "./GreyComponent";
import Wave from "./Wave"; // ← Glöm inte importera denna!

const AsundsholmUppdrag: React.FC = () => {
  const Texting = styled(Typography)<TypographyProps>`
    font-family: "H3", sans-serif;
    font-variation-settings: "wght" 300;
  `;

  const TextingATYP = styled(Typography)<TypographyProps>`
    font-family: "atyp-bl-variable", sans-serif;
    font-variation-settings: "ital" 0, "opsz" 6, "wght" 280;
  `;

  return (
    <>
      {/* Hero med bild och våg */}
      <Box sx={{ position: "relative", width: "100%", height: { xs: "76vh", md: "90vh" }, overflow: "hidden" }}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url('https://i.imgur.com/pDMM8Je.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            zIndex: 2,
          }}
        >
          <Wave />
        </Box>
      </Box>

      <Box
  sx={{
    width: "100%",
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: { xs: 2, md: 6 },
    py: { xs: 2, md: 3 },
    borderBottom: "1px solid #e0e0e0",
  }}
>
  <Typography
    variant="body2"
    onClick={() => window.location.href = "/projects/sleipner"} // eller navigate("/projects/sleipner")
    sx={{
      cursor: "pointer",
      fontWeight: 500,
      color: "#363434",
      opacity: 0.7,
      "&:hover": { opacity: 1 },
    }}
  >
    → Nästa projekt: Sleipner
  </Typography>
</Box>

      {/* Innehållsdel */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#f8f8f8",
          display: "flex",
          justifyContent: "center",
          flexDirection: isTablet ? "row" : { xs: "column", md: "row" },
          alignItems: "center",
          px: isTablet ? 30 : { xs: 2, md: 8 },
          pt: { xs: 10, md: 10 },
          pb: { xs: 6, md: 12 },
          zIndex: 10,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            maxWidth: { xs: 350, md: "1200px", xl: 600 },
            gap: 4,
            px: { xs: 1, md: 2 },
            ml: isTablet ? -30 : { xs: 1, md: 2 },
          }}
        >
          {/* TEXT */}
          <Box
            sx={{
              flex: 1,
              maxWidth: { xs: "100%", md: 450 },
              pr: { md: 4 },
              mt: isTablet ? 2 : { md: -13 },
            }}
          >
            <TextingATYP variant="h4" fontWeight={300} gutterBottom>
              Åsundsholm
            </TextingATYP>
            <Texting variant="h6" fontWeight={400} gutterBottom>
              Uppdrag
            </Texting>
            <TextingATYP variant="body1" paragraph>
              Åsundsholm är mer än bara en plats för golfentusiaster – det är en
              destination där upplevelser skapas och minnen formas. Vårt uppdrag
              var att skapa en modern och inspirerande hemsida som speglar hela
              Åsundsholms själ. Från den natursköna golfbanan vid Åsundens kant,
              till den hemtrevliga atmosfären i de nyrenoverade hotellrummen.
            </TextingATYP>
            <TextingATYP variant="body1" paragraph>
              Vi ville fånga känslan av att vakna upp till fågelkvitter, ta en
              morgonpromenad längs sjön och sedan njuta av en runda golf. Genom
              att använda stora, inbjudande bilder och ett språk som talar direkt
              till besökaren, skapade vi en hemsida som fungerar som en
              förlängning av den upplevelse du får på plats.
            </TextingATYP>
            <TextingATYP variant="body1" paragraph>
              Sammanfattningsvis, vårt mål var att leverera en hemsida som ger en
              försmak till allt det som gör Åsundsholm unikt – en plats där varje
              besök blir en personlig och minnesvärd upplevelse.
            </TextingATYP>

            <Button
              variant="outlined"
              sx={{
                mt: 3,
                backgroundColor: "#D6D0C6",
                borderColor: "#D6D0C6",
                borderRadius: 2,
                color: "#333",
                textTransform: "none",
                maxWidth: isTablet ? "60%" : "60%",
                paddingY: { md: 1, xl: 2 },
                px: 3,
                fontWeight: 500,
                "&:hover": {
                  borderColor: "#D6D0C6",
                  backgroundColor: "#D6D0C6",
                },
              }}
            >
              <Texting sx={{ fontSize: 18 }}>Kika på resultatet!</Texting>
            </Button>
          </Box>

          {/* BILD */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "flex-end",
              maxWidth: 750,
              mt: isTablet ? 15 : { xs: 4, md: 0 },
              ml: { md: 2 },
              mr: { md: -20, xl: -12 },
            }}
          >
            <Box
              component="img"
              src="https://i.imgur.com/1B3ye3I.png"
              alt="Laptop"
              sx={{ width: "100%", borderRadius: 2 }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AsundsholmUppdrag;
