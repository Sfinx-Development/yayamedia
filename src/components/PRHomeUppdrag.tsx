import { Box, styled, Typography, TypographyProps } from "@mui/material";
import React, { useState } from "react";
import { isMobile, isTablet } from "./GreyComponent";
import Svanefors from "./SvaneFors";

const PRHomeUppdrag: React.FC = () => {
  const Texting = styled(Typography)<TypographyProps>`
    font-family: "H3", sans-serif;
    font-variation-settings: "wght" 300;
  `;

  const TextingATYP = styled(Typography)<TypographyProps>`
    font-family: "atyp-bl-variable", sans-serif;
    font-variation-settings: "ital" 0, "opsz" 6, "wght" 280;
  `;

  const picturesRow2: string[] = [
    "https://i.imgur.com/faRFaqm.jpeg",
    "https://i.imgur.com/qm3JSZb.jpeg",
    "https://i.imgur.com/pGfuzIl.jpeg",
    "https://i.imgur.com/i8G8Azi.jpeg",
  ];

  const picturesRow3: string[] = [
    "https://i.imgur.com/iw6n4LQ.jpeg",
    "https://i.imgur.com/yb7yg9P.jpeg",
    "https://i.imgur.com/p5yJEAr.jpeg",
    "https://i.imgur.com/uSzCxmw.jpeg",
  ];

  const [activeImage, setActiveImage] = useState<string | null>(null);

  const largeTile = {
    flex: "1 1 calc(50% - 16px)",
    maxWidth: "calc(50% - 16px)",
    // borderRadius: 2,
    overflow: "hidden" as const,
    position: "relative" as const,
    transition: "transform 0.3s ease, box-shadow 0.3s ease, z-index 0s",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.05)",
      zIndex: 2,
      boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    },
  };

  const smallTile = {
    flex: "1 1 calc(25% - 16px)",
    maxWidth: "calc(25% - 16px)",
    // borderRadius: 2,
    overflow: "hidden" as const,
    position: "relative" as const,
    transition: "transform 0.3s ease, box-shadow 0.3s ease, z-index 0s",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.08)",
      zIndex: 2,
      boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    },
  };

  const handleImageClick = (src: string) => {
    // vill du bara ha detta på mobil kan du göra:
    // if (!isMobile) return;
    setActiveImage(src);
  };

  return (
    <>
      {/* TOPPSEKTION */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#f8f8f8",
          display: "flex",
          justifyContent: "center",
          flexDirection: isTablet ? "row" : { xs: "column", md: "row" },
          marginTop: { xs: 10, md: 12, xl: 15 },
          paddingX: isTablet ? 2 : { xs: 2, md: 0 },
          pt: { xs: 10, md: 10, xl: 20 },
          pb: { xs: 6, md: 12 },
          overflow: "visible",
          marginY: { xl: 15 },
          zIndex: 10,
        }}
      >
        <Box
          sx={{
            width: { xs: "98%", md: "50%", xl: "100%" },
            textAlign: "left",
            ml: { xs: 2, md: -30, xl: 50 },
            mr: { xs: 3 },
            mt: isMobile ? -12 : { md: -23 },
          }}
        >
          <TextingATYP
            variant="h2"
            sx={{ fontSize: { xs: 36, md: 52, xl: 72 } }}
            fontWeight={300}
          >
            PR Home & Svanefors
          </TextingATYP>
          <Texting
            variant="h3"
            sx={{ fontSize: { xs: 28, md: 36, xl: 48 } }}
            fontWeight={400}
            gutterBottom
          >
            Uppdrag
          </Texting>

          <TextingATYP
            variant="body1"
            sx={{
              marginTop: { xs: 2, md: 4 },
              fontSize: isTablet ? 18 : { xl: 24 },
              maxWidth: { xl: "50%" },
            }}
            paragraph
          >
            Produktbilder, miljöbilder, sociala medier,katalogproduktion och
            övriga trycksaker.
          </TextingATYP>
        </Box>
      </Box>

      {/* PR HOME – MILJÖBILDER */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Texting
          variant="h3"
          sx={{ fontSize: { xs: 28, md: 36, xl: 48 } }}
          fontWeight={400}
          gutterBottom
        >
          PR Home
        </Texting>

        <Box
          sx={{
            width: "98%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 1.5,
            px: { xs: 3, md: 8, xl: 14 },
            mb: 6,
            mt: 2,
          }}
        >
          {/* RAD 1 – 2 stora miljöbilder */}
          <Box
            sx={{
              width: "99%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 1.5,
            }}
          >
            <Box
              sx={largeTile}
              onClick={() =>
                handleImageClick("https://i.imgur.com/K3mLqb9.jpeg")
              }
            >
              <Box
                component="img"
                src="https://i.imgur.com/K3mLqb9.jpeg"
                alt="Bild 1"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            <Box
              sx={largeTile}
              onClick={() =>
                handleImageClick("https://i.imgur.com/dQTPVrR.jpeg")
              }
            >
              <Box
                component="img"
                src="https://i.imgur.com/dQTPVrR.jpeg"
                alt="Bild 2"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Box>

          {/* RAD 2 */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 1.5,
            }}
          >
            {picturesRow2.map((src) => (
              <Box
                key={src}
                sx={smallTile}
                onClick={() => handleImageClick(src)}
              >
                <Box
                  component="img"
                  src={src}
                  alt="Miljöbild rad 2"
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            ))}
          </Box>

          {/* RAD 3 */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 1.5,
            }}
          >
            {picturesRow3.map((src) => (
              <Box
                key={src}
                sx={smallTile}
                onClick={() => handleImageClick(src)}
              >
                <Box
                  component="img"
                  src={src}
                  alt="Miljöbild rad 3"
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            ))}
          </Box>

          {/* PRODUKTFOTO */}
          <Box
            sx={{
              width: "100%",
              ml: { xs: 4, md: 18, xl: 25 },
              mt: { xs: 2, md: 6, xl: 8 },
            }}
          >
            <Texting
              variant="h3"
              sx={{ fontSize: { xs: 18, md: 24, xl: 32 } }}
              fontWeight={400}
              textAlign={"left"}
            >
              Produktfoto
            </Texting>
          </Box>

          {/* Produktbilder med scroll (lampor) */}
          <Box
            sx={{
              width: "100%",
              mt: { xs: 2, md: 4 },
              overflowX: "auto",
              px: { xs: 2, md: 4 },
              pb: 2,
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 2,
                width: "max-content",
                alignItems: "flex-start",
              }}
            >
              {[
                { src: "https://i.imgur.com/7QFNvVu.png", alt: "Rosa lampa" },
                {
                  src: "https://i.imgur.com/AFkY9aZ.png",
                  alt: "Grön oljelampa",
                },
                { src: "https://i.imgur.com/1GmgyO3.png", alt: "Taklampa" },
                {
                  src: "https://i.imgur.com/4jELoSB.png",
                  alt: "Svart bordslampa",
                },
                { src: "https://i.imgur.com/GXuFbDR.png", alt: "Taklampa 2" },
                {
                  src: "https://i.imgur.com/nkAhTU2.png",
                  alt: "Grön vägglampa",
                },
              ].map((img) => (
                <Box
                  key={img.src}
                  component="img"
                  src={img.src}
                  alt={img.alt}
                  sx={{
                    width: { xs: 160, sm: 200, md: 220, xl: 400 },
                    objectFit: "contain",
                    flexShrink: 0,
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      <Svanefors />

      <Box
        sx={{
          width: "100%",
          backgroundColor: "#f8f8f8",
          height: { xs: 80, md: 20 },
          zIndex: 3,
        }}
      />

      {activeImage && (
        <Box
          onClick={() => setActiveImage(null)}
          sx={{
            position: "fixed",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.75)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2000,
            cursor: "zoom-out",
          }}
        >
          <Box
            component="img"
            src={activeImage}
            alt="Förstorad bild"
            sx={{
              maxWidth: "98%",
              maxHeight: "98%",
              // borderRadius: 2,
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            }}
          />
        </Box>
      )}
    </>
  );
};

export default PRHomeUppdrag;
