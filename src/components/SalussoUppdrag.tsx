import { Box, styled, Typography, TypographyProps } from "@mui/material";
import React from "react";
import { isMobile, isTablet } from "./GreyComponent";

const SalussoUppdrag: React.FC = () => {
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
            // backgroundColor: "red",
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
            Salusso
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
            Logotyp, Grafisk identitet och Webdesign.
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
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 1.5,
            px: { xs: 3, md: 8, xl: 14 },
            // mt: 2,
          }}
        >
          <Box
            sx={{
              width: "100%",
              ml: { xs: 4, md: 38, xl: 48 },
              mt: { xs: 2, md: 2 },
            }}
          >
            <Texting
              variant="h3"
              sx={{ fontSize: { xs: 18, md: 24, xl: 32 } }}
              fontWeight={400}
              textAlign={"left"}
            >
              Webdesign och Logotyp
            </Texting>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: { xs: "center", md: "space-between" },
              alignItems: "center",
              width: "100%",
              // maxWidth: "1800px",
              position: "relative",
              overflow: "visible",
              // mt: { xs: 4, md: 8 },
              px: { xs: 0, md: 4 },
            }}
          >
            <Box
              sx={{
                position: "relative",
                flex: 1,
                maxWidth: { xs: "100%", md: "60%" },
                transform: { xs: "translateX(0%)", md: "translateX(-40%)" },
                zIndex: 2,
              }}
            >
              <Box
                onClick={() => window.open("https://salusso.se", "_blank")}
                component="img"
                src="https://i.imgur.com/GbavFTK.png"
                alt="Laptop"
                sx={{
                  width: { xs: "100%", md: "150%" },
                  objectFit: "contain",
                  cursor: "pointer",
                }}
              />
            </Box>

            <Box
              sx={{
                position: "relative",
                flex: 1,
                maxWidth: { xs: "100%", md: "60%" },
                transform: { xs: 0, md: "translateX(5%)" },
                zIndex: 1,
              }}
            >
              <Box
                component="img"
                src="https://i.imgur.com/NGJQROt.png"
                alt="Visitkort"
                sx={{
                  width: { xs: "100%", md: "105%" },
                  // borderRadius: 2,
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            ml: { xs: 4, md: 38, xl: 48 },
            mt: { xs: 4, md: 4 },
          }}
        >
          <Texting
            variant="h3"
            sx={{ fontSize: { xs: 18, md: 24, xl: 32 } }}
            fontWeight={400}
            textAlign={"left"}
          >
            Grafisk identitet
          </Texting>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "stretch",
            width: "100%",
            mt: { xs: 2, xl: 8 },
            gap: 4,
          }}
        >
          <Box
            component="img"
            src="https://i.imgur.com/9js4Y4x.jpeg"
            alt="Typografi & färger"
            sx={{
              flex: "0 0 66%",
              width: { xs: "100%", md: "66%" },
              objectFit: "cover",
              cursor: "pointer",
            }}
          />

          <Box
            sx={{
              flex: "0 0 32%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 4,
            }}
          >
            <Box
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Texting
                variant="h3"
                fontWeight={400}
                sx={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  fontSize: { xs: 18, md: 24, xl: 32 },
                  color: "#000",
                  mr: 1,
                }}
              >
                Primärfärger
              </Texting>
              <Box
                component="img"
                src="https://i.imgur.com/gxgtP0d.png"
                alt="Primärfärger"
                sx={{
                  flex: 1,
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>

            <Box
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Texting
                variant="h3"
                fontWeight={400}
                sx={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  fontSize: { xs: 18, md: 24, xl: 32 },
                  color: "#000",
                  mr: 1,
                }}
              >
                Sekundärfärger
              </Texting>
              <Box
                component="img"
                src="https://i.imgur.com/UL4Wwln.png"
                alt="Sekundärfärger"
                sx={{
                  flex: 1,
                  width: "100%",
                  objectFit: "cover",
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

export default SalussoUppdrag;
