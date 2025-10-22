import { Box, styled, Typography, TypographyProps } from "@mui/material";
import React from "react";
import { isMobile, isTablet } from "./GreyComponent";

const SwedteamUppdrag: React.FC = () => {
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
            Swedteam
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
            Inspirationsfolder till återförsäljare, logotyp till ny teknologi,
            förpackningsdesign, katalog, sociala medier och övriga trycksaker.
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
            position: "relative",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: { xs: "static", md: "absolute" },
              top: { xs: 16, md: 80 },
              left: { xs: 16, md: 140 },
              zIndex: 2,
              color: "black",
            }}
          >
            <Texting
              variant="h3"
              sx={{
                ml: { xs: 2, md: 0, xl: 8 },
                fontSize: { xs: 18, md: 24, xl: 32 },
                mb: 1,
                textAlign: "left",
              }}
              fontWeight={400}
            >
              Swedteam Magazine
            </Texting>
            <TextingATYP
              variant="body1"
              sx={{
                fontSize: isTablet ? 18 : { xl: 24 },
                ml: { xs: 2, md: 0, xl: 8 },
              }}
              paragraph
            >
              Enkel folder som skickas ut två gånger per år till agenter och
              återförsäljare.
            </TextingATYP>
          </Box>

          <Box
            component="img"
            src="https://i.imgur.com/6toOGse.jpeg"
            alt="Magazines"
            sx={{
              width: "100%",
              objectFit: "cover",
            }}
          />
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
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: { xs: 2, md: 8, xl: 12 },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: { xs: 16, md: 80 },
              left: { xs: 16, md: 140, xl: 200 },
              zIndex: 2,
              color: "black",
            }}
          >
            <Texting
              variant="h3"
              sx={{
                fontSize: { xs: 18, md: 24, xl: 32 },
                mb: 1,
                textAlign: "left",
              }}
              fontWeight={400}
            >
              Förpackningsdesign
            </Texting>
          </Box>

          <Box
            component="img"
            src="https://i.imgur.com/7nZ6FKz.jpeg"
            alt="Magazines"
            sx={{
              width: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          // backgroundColor: "red",
          width: "100%",
          ml: { xs: 2, md: 40, xl: 50 },
          mt: { xs: 4, md: 8 },
        }}
      >
        <Texting
          variant="h3"
          sx={{ fontSize: { xs: 18, md: 24, xl: 32 } }}
          fontWeight={400}
          textAlign={"left"}
        >
          Logotyp till ny teknologi
        </Texting>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          mt: { xs: 2, md: 4 },
          py: { xs: 2, md: 4 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-evenly",
            // height: "50%",
          }}
        >
          <Box
            component="img"
            src="https://i.imgur.com/JV8N1zp.png"
            alt="Tag med logotyp"
            sx={{
              // width: "40%",
              height: { xs: "300px", md: "720px", xl: "820px" },
              objectFit: "cover",
            }}
          />
          <Box
            component="img"
            src="https://i.imgur.com/P8gia9p.jpeg"
            alt="Tag på jacka"
            sx={{
              // width: "40%",
              height: { xs: "300px", md: "700px", xl: "800px" },
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          // backgroundColor: "red",
          width: "100%",
          ml: { xs: 2, md: 40, xl: 50 },
          mt: { xs: 4, md: 8 },
        }}
      >
        <Texting
          variant="h3"
          sx={{ fontSize: { xs: 18, md: 24, xl: 32 } }}
          fontWeight={400}
          textAlign={"left"}
        >
          Katalog och trycksaker
        </Texting>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          mt: { xs: 2, md: 4 },
          py: { xs: 2, md: 4 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            // height: "50%",
          }}
        >
          <Box
            component="img"
            src="https://i.imgur.com/BtW75uJ.jpeg"
            alt="Tag med logotyp"
            sx={{
              width: "100%",

              objectFit: "cover",
            }}
          />
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

export default SwedteamUppdrag;
