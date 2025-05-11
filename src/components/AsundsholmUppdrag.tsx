import {
  Box,
  Button,
  styled,
  Typography,
  TypographyProps,
} from "@mui/material";
import React from "react";
// import styled from "@emotion/styled";
import { isMobile, isTablet } from "./GreyComponent";

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
    <Box
      sx={{
        width: "100%",
        // backgroundColor: "red",
        backgroundColor: "#f8f8f8",
        display: "flex",
        // flexDirection: "column",
        flexDirection: isTablet ? "row" : { xs: "column", md: "row" },
        alignItems: "center",
        // marginTop: { xs: 10, md: 12, xl: 15 },
        mt: { xs: 6, md: -10 },
        // px: { xs: 2, md: 8 },
        paddingX: isTablet ? 2 : { xs: 2, md: 0 },
        pt: { xs: 2, md: 15, xl: 0 },
        height: { xs: "auto", lg: "420px", xl: "100%" },
        overflow: "visible",
        marginY: { xl: 0 },
        // height: "100vh",
        zIndex: 3,
      }}
    >
      {/* Text + laptop-sektion */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isTablet ? "column" : { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          // maxWidth: "1200px",
          maxWidth: isTablet ? 1200 : { xs: 300, md: 1200, xl: "100%" },
          paddingTop: isMobile ? 0 : { xs: 1, md: 0 },
          paddingLeft: isMobile ? 2 : { xs: 1, md: 0, xl: 20 },
          gap: 4,
          px: { xs: 2, md: 4 },
        }}
      >
        {/* TEXT */}
        <Box
          sx={{
            flex: 1,
            maxWidth: { xs: "100%", md: 450, xl: "50%" }, // smalare än tidigare
            pr: { md: 4 },
            mt: { md: 10 },
            ml: { md: 10 },
          }}
        >
          {/* <Texting component="h2" sx={{ fontSize: { xs: 18, md: 20, xl: 30 } }}>
        Åsundsholm
          </Texting> */}
          <TextingATYP variant="h2" fontWeight={300}>
            Åsundsholm
          </TextingATYP>
          <Texting variant="h3" fontWeight={400} gutterBottom>
            Uppdrag
          </Texting>
          <TextingATYP
            variant="body1"
            sx={{ fontSize: isTablet ? 18 : { xl: 24 } }}
            paragraph
          >
            Åsundsholm är mer än bara en plats för golfentusiaster – det är en
            destination där upplevelser skapas och minnen formas. Vårt uppdrag
            var att skapa en modern och inspirerande hemsida som speglar hela
            Åsundsholms själ. Från den natursköna golfbanan vid Åsundens kant,
            till den hemtrevliga atmosfären i de nyrenoverade hotellrummen.
          </TextingATYP>
          <TextingATYP
            variant="body1"
            sx={{ fontSize: isTablet ? 18 : { xl: 24 } }}
            paragraph
          >
            Vi ville fånga känslan av att vakna upp till fågelkvitter, ta en
            morgonpromenad längs sjön och sedan njuta av en runda golf. Genom
            att använda stora, inbjudande bilder och ett språk som talar direkt
            till besökaren, skapade vi en hemsida som fungerar som en
            förlängning av den upplevelse du får på plats.
          </TextingATYP>
          <TextingATYP
            variant="body1"
            sx={{ fontSize: isTablet ? 18 : { xl: 24 } }}
            paragraph
          >
            Sammanfattningsvis, vårt mål var att leverera en hemsida som ger en
            försmak till allt det som gör Åsundsholm unikt – en plats där varje
            besök blir en personlig och minnesvärd upplevelse.
          </TextingATYP>
          <Button
            variant="outlined"
            onClick={() => window.open("https://asundsholm.se", "_blank")}
            sx={{
              mt: 2,
              backgroundColor: "#D6D0C6",
              borderColor: "#D6D0C6",
              color: "#333",
              textTransform: "none",
              px: 3,
              borderRadius: 2,
              paddingY: 1.2,
              fontWeight: 500,
              "&:hover": {
                borderColor: "#D6D0C6",
                backgroundColor: "#D6D0C6",
              },
            }}
          >
            <Texting sx={{ fontSize: { md: 18, xl: 25 } }}>
              Kika på resultatet!
            </Texting>
          </Button>
        </Box>

        {/* LAPTOP-BILD */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            // justifyContent: "center",
            justifyContent: "flex-end", // högerjustera bilden
            maxWidth: { xs: 750, xl: 950 },
            mt: { xs: 4, md: 20, xl: 30 }, // 👈 justeras så den kommer i samma höjd
            ml: { md: 2 },
            mr: { md: -20, xl: -35 },
            overflow: "hidden",
            // 👈 förskjut mer åt höger på desktop
            // maxWidth: 500,
            // mt: { xs: 4, md: 0 },
          }}
        >
          <Box
            component="img"
            src="https://i.imgur.com/1B3ye3I.png"
            alt="Laptop"
            sx={{
              width: "150%",
              borderRadius: 2,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AsundsholmUppdrag;
