import { Box, styled, Typography, TypographyProps } from "@mui/material";
import React from "react";
import { isMobile, isTablet } from "./GreyComponent";

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

  return (
    <>
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
            maxWidth: { xs: "100%", md: "50%", xl: "50%" },
            textAlign: "left",
            ml: { xs: 3, md: -50 },
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
            }}
            paragraph
          >
            Produktbilder, miljöbilder, sociala medier,katalogproduktion och
            övriga trycksaker.
          </TextingATYP>
        </Box>
      </Box>

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
          }}
        >
          <Box
            sx={{
              width: "98%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 1.5,
            }}
          >
            <Box
              component="img"
              src="https://i.imgur.com/K3mLqb9.jpeg"
              alt="Bild 1"
              sx={{
                flex: "1 1 calc(50% - 16px)",
                maxWidth: "calc(50% - 16px)",
                objectFit: "cover",
              }}
            />
            <Box
              component="img"
              src="https://i.imgur.com/dQTPVrR.jpeg"
              alt="Bild 2"
              sx={{
                flex: "1 1 calc(50% - 16px)",
                maxWidth: "calc(50% - 16px)",
                objectFit: "cover",
              }}
            />
          </Box>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 1.5,
            }}
          >
            {picturesRow2.map((i) => (
              <Box
                key={i}
                component="img"
                src={i}
                alt={`Bild ${i}`}
                sx={{
                  flex: "1 1 calc(25% - 16px)",
                  maxWidth: "calc(25% - 16px)",
                  objectFit: "cover",
                }}
              />
            ))}
          </Box>

          {/* Rad 3 - 4 bilder */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 1.5,
            }}
          >
            {picturesRow3.map((i) => (
              <Box
                key={i}
                component="img"
                src={i}
                alt={`Bild ${i}`}
                sx={{
                  flex: "1 1 calc(25% - 16px)",
                  maxWidth: "calc(25% - 16px)",
                  objectFit: "cover",
                }}
              />
            ))}
          </Box>
          <Box
            sx={{
              // backgroundColor: "red",
              width: "100%",
              ml: { xs: 2, md: 20 },
              mt: { xs: 2, md: 4 },
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
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              mt: { xs: 2, md: 6 },
            }}
          >
            <Box
              sx={{
                width: "100%",
                // maxWidth: "1600px",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                // px: { xs: 3, md: 8, xl: 14 },
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              <Box
                component="img"
                src="https://i.imgur.com/7QFNvVu.png"
                alt="Rosa lampa"
                sx={{
                  width: { xs: "45%", sm: "30%", md: "14%" },
                  objectFit: "contain",
                }}
              />
              <Box
                component="img"
                src="https://i.imgur.com/AFkY9aZ.png"
                alt="Grön oljelampa"
                sx={{
                  width: { xs: "45%", sm: "30%", md: "14%" },
                  objectFit: "contain",
                }}
              />
              <Box
                component="img"
                src="https://i.imgur.com/1GmgyO3.png"
                alt="Taklampa"
                sx={{
                  width: { xs: "45%", sm: "30%", md: "14%" },
                  objectFit: "contain",
                }}
              />
              <Box
                component="img"
                src="https://i.imgur.com/4jELoSB.png"
                alt="Svart bordslampa"
                sx={{
                  width: { xs: "45%", sm: "30%", md: "14%" },
                  objectFit: "contain",
                }}
              />
              <Box
                component="img"
                src="https://i.imgur.com/GXuFbDR.png"
                alt="Taklampa"
                sx={{
                  width: { xs: "45%", sm: "30%", md: "14%" },
                  objectFit: "contain",
                }}
              />
              <Box
                component="img"
                src="https://i.imgur.com/nkAhTU2.png"
                alt="Grön vägglampa"
                sx={{
                  width: { xs: "45%", sm: "30%", md: "14%" },
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

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

export default PRHomeUppdrag;
