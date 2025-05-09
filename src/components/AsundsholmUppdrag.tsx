import { Box, Button, Typography, styled, TypographyProps, } from "@mui/material";
import React from "react";
import { isMobile, isTablet } from "./GreyComponent";
// import styled from "@emotion/styled";

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
        backgroundColor: "#f8f8f8",
        display: "flex",
        justifyContent: "center", // vänsterjusterat

        px: isTablet ? 30 : { xs: 2, md: 8 },
        pt: { xs: 10, md: 10 },
        pb: { xs: 6, md: 12 },
        zIndex: 10,
        // width: "100%",
        // backgroundColor: "#f8f8f8",
        // display: "flex",
        // // flexDirection: "column",
         flexDirection: isTablet ? "row" : { xs: "column", md: "row" },
        alignItems: "center",
        // // mt: {xs: 2, md: -10},
        // marginTop: { xs: 3, md: -12, xl: 15 },
        // px: isTablet ? 10 :{ xs: 0, md: 8, },
        // pt: { xs: 6, md: 15 },
      }}
    >
      {/* Text + laptop-sektion */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          // maxWidth: "1200px",
            maxWidth : { xs: 350, md: "1200px", xl: 600 },
          gap: 4,
          px: { xs: 1, md: 2 },
          ml:isTablet ? -30 :  { xs: 1, md: 2 },
        }}
      >
        {/* TEXT */}
        <Box
          sx={{
            flex: 1,
            maxWidth: { xs: "100%", md: 450 }, // smalare än tidigare
            pr: { md: 4 },
            mt: isTablet ? 2 : { md: -13 },
          }}
        >
          {/* <Texting component="h2" sx={{ fontSize: { xs: 18, md: 20, xl: 30 } }}>
        Åsundsholm
          </Texting> */}
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
          {/* <Button
                // aria-label="Navigera till tjänster-sidan"
                // onClick={() => {
                //   navigate("/tjanster");
                // }}
                sx={{
                  backgroundColor: "#363434",
                  marginTop: 3,
                  maxWidth: isTablet ? "60%" : "40%",
                  color: "#F7F7F7",
                  borderRadius: 2,
                  paddingY: { md: 1, xl: 2 },
                  textTransform: "none",
                  "&:hover": {
                    background: "linear-gradient(to top, #EDC1D0, #F3D9DF)", // Färgen för hover-effekten
                  },
                  "&:active": {
                    background: "linear-gradient(to top, #EDC1D0, #F3D9DF)", // Färgen när knappen är aktiv (om nödvändigt)
                  },
                }}
              >
                <Texting sx={{ fontSize: 18 }}>Våra tjänster</Texting>
              </Button> */}
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
              // py: 1,
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

        {/* LAPTOP-BILD */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            // justifyContent: "center",
            justifyContent: "flex-end", // högerjustera bilden
            maxWidth: 750,
            mt: isTablet ? 15: { xs: 4, md: 0 }, // 👈 justeras så den kommer i samma höjd
            ml: { md: 2 },
            mr: { md: -20, xl: -12 },
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
              width: "100%",
              borderRadius: 2,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AsundsholmUppdrag;
