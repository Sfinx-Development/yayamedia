import { Box, styled, Typography, TypographyProps } from "@mui/material";
import React from "react";
import { isMobile, isTablet } from "./GreyComponent";

const SleipnerUppdrag: React.FC = () => {
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
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#f8f8f8",
          display: "flex",
          justifyContent: "center", // vänsterjusterat
          flexDirection: isTablet ? "row" : { xs: "column", md: "row" },
          marginTop: { xs: 10, md: 12, xl: 15 },
          paddingX: isTablet ? 2 : { xs: 2, md: 0 },
          // px: { xs: 2, md: 8 },
          pt: { xs: 10, md: 10, xl: 20 },
          pb: { xs: 6, md: 12 },
          //  paddingTop: isMobile ? 0 : { xs: 1, md: -15 },
          // paddingLeft: isMobile ? 2 : { xs: 1, md: 0 },
          // height: { xs: "auto", lg: "420px" },
          overflow: "visible",
          marginY: { xl: 15 },
          zIndex: 10,
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "100%", md: "50%", xl: "50%" },
            textAlign: "left",
            ml: { xs: 3, md: -50 },
            mr: { xs: 3 },
            mt: isMobile ? -12 : { md: -23 },
          }}
        >
          <TextingATYP variant="h2" sx={{ fontSize:{xs:36, md:52, xl:72} }} fontWeight={300}>
            Sleipnertandvården
          </TextingATYP>
          <Texting variant="h3" sx={{ fontSize:{xs:28, md:36, xl:48} }}  fontWeight={400} gutterBottom>
            Uppdrag
          </Texting>

          <TextingATYP
            variant="body1"
            sx={{
              marginTop: { xs: 2, md: 4 },
              fontSize: isTablet ? 18 : { xl: 24 },
            }}
            paragraph
          >
            Sleipnertandvården är precis vad du föreställer dig – en plats där
            munhälsa får stå i centrum. Här vill man hjälpa patienter till en
            friskare, vackrare och framför allt fräschare känsla, varje dag. Men
            trots starka värderingar och trogna patienter saknades en viktig
            pusselbit: en digital närvaro. Från texten vi skrev in i bilden
            fanns mottagningen inte alls på sociala medier – något vi ville
            förändra. Med en önskan om att nå en yngre målgrupp, och samtidigt
            behålla sin befintliga kundbas, satte Sleipnertandvården upp ett
            tydligt mål: att bli top of mind när det är dags att välja tandvård.
          </TextingATYP>

          <TextingATYP
            variant="body1"
            sx={{ fontSize: isTablet ? 18 : { xl: 24 } }}
            paragraph
          >
            Vår rekommendation? Att börja från grunden, med en ny grafisk
            profil. En visuell identitet som speglar både professionalitet och
            värme, och som skulle hålla i längden.
          </TextingATYP>
          <Texting variant="h6" fontWeight={600} gutterBottom>
            Resultat
          </Texting>

          <TextingATYP
            variant="body1"
            sx={{ fontSize: isTablet ? 18 : { xl: 24 } }}
            paragraph
          >
            En modern grafisk profil med lekfulla inslag och ett tydligt
            uttryck. En identitet som skapar igenkänning i sociala medier,
            samtidigt som den väcker nyfikenhet hos just den målgrupp
            Sleipnertandvården vill nå.
          </TextingATYP>
        </Box>
      </Box>
      {/* BILDBOX */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#F3DED0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 3,
          }}
        >
          <img
            src="https://i.imgur.com/ADTyziN.jpeg"
            alt="Tygkasse med tand"
            style={{
              width: "auto",
              maxWidth: "100%",
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 3,
            }}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 3,
          }}
        >
          <img
            src="https://i.imgur.com/DRE44iq.jpeg"
            alt="Tygkasse med tandborste"
            style={{
              width: "auto",
              maxWidth: "100%",
              backgroundColor: "#F3DED0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 3,
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          backgroundColor: "#f8f8f8",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 2,
          px: 0,
          zIndex: 3,
        }}
      >
        <Box
          component="img"
          src="https://i.imgur.com/3bgZXRG.jpeg"
          alt="Typografi"
          sx={{
            width: "100%",
            // maxWidth: "1200px",
            height: "auto",
          }}
        />
      </Box>

      {/* BILDBOX */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#F3DED0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 3,
          }}
        >
          <img
            src="https://i.imgur.com/XHtcCQV.png"
            alt="Tygkasse med tand"
            style={{
              width: "auto",
              maxWidth: "100%",
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 3,
            }}
          />
        </Box>

        {/* <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 3,
          }}
        >
          <img
            src="https://i.imgur.com/DRE44iq.jpeg"
            alt="Tygkasse med tandborste"
            style={{
              width: "auto",
              maxWidth: "100%",
              backgroundColor: "#F3DED0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 3,
            }}
          />
        </Box> */}
      </Box>

      {/* FÄRGPALETT
      <Box
  sx={{
    display: "flex",
    flexDirection: "row",
    width: "100%",
    minHeight: 500,
    zIndex: 3,
  }}
>
  {[
    { color: "#CDE7E1", label: "Aquanint", flex: 1 },
    { color: "#E7D6C2", label: "Soft Sunrise", flex: 1 },
    { color: "#FDF7E9", label: "Soft Sunrise", flex: 1 },
    { color: "#2E2E2E", label: "Pure Pine", flex: 0.5, colorText: "#fff" },
    { color: "#FBF7EE", label: "Pearl Glow", flex: 0.5 },
  ].map(({ color, label, flex, colorText = "#000" }, index) => (
    <Box
    key={index}
    sx={{
      flex,
      backgroundColor: color,
      position: "relative",
      minHeight: 500,
      display: "flex",
      justifyContent: "flex-end", // ← flyttar texten till högra kanten inom sin egen box
      alignItems: "flex-end",     // ← placerar texten längst ner
      pr: 2,                      // ← avstånd från palettens högra kant
      pb: 4,                      // ← avstånd från botten
    }}
  >
    <Typography
      variant="body2"
      sx={{
        transform: "rotate(-90deg)",
        transformOrigin: "bottom left", // ← rotera från nedre högra hörnet
        color: colorText,
        fontSize: 14,
        fontWeight: 400,
     
        mb:-1
      }}
    >
      {label}
    </Typography>
  </Box>
  
  ))}
</Box> */}

      <Box
        sx={{
          width: "100%",
          backgroundColor: "#f8f8f8",
          height: { xs: 80, md: 20 },
          zIndex: 3,
        }}
      />
    </>
  );
};

export default SleipnerUppdrag;
