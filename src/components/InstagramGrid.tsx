import { Box, styled, Typography, TypographyProps } from "@mui/material";
import React from "react";
import { isMobile } from "./GreyComponent";

const mockImages = [
  "https://i.imgur.com/mB9ABMS.png",
  "https://i.imgur.com/750qs63.jpeg",
  "https://i.imgur.com/naScTZI.png",
  "https://i.imgur.com/XZagv20.png",
  "https://i.imgur.com/AWAvHlA.png",
  "https://i.imgur.com/RD2AlkJ.png",
  "https://i.imgur.com/utWSTkK.png",
  "https://i.imgur.com/ABtSm4U.jpeg",
  "https://i.imgur.com/1DKlq8X.png",
];

const InstagramGrid: React.FC = () => {
  const Texting = styled(Typography)<TypographyProps>`
    font-family: "H3", sans-serif;
    font-variation-settings: "wght" 300;
  `;
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#f8f8f8",
        display: "flex",
        justifyContent: "center",
        px: 0,
        py: { xs: 8, md: 12 },
        zIndex: 3,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 1000,
          px: { xs: 1, sm: 3, md: 0 },
          mt: isMobile ? -10 : { xs: 3 },
        }}
      >
        <Box
          sx={{
            // backgroundColor: "red",
            width: "100%",

            ml: { xs: 2, md: 0 },
          }}
        >
          <Texting
            variant="h3"
            sx={{ fontSize: { xs: 18, md: 24, xl: 32 } }}
            fontWeight={400}
            textAlign={"left"}
          >
            Sociala medier
          </Texting>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(3, 1fr)",
              sm: "repeat(3, 1fr)",
            },
            mt: { xs: 2, md: 4 },
            gap: 1,
          }}
        >
          {mockImages.map((src, index) => (
            <Box
              onClick={() =>
                window.open(
                  "https://instagram.com/sleipnertandvarden/",
                  "_blank"
                )
              }
              key={index}
              component="img"
              src={src}
              alt={`Instagram bild ${index + 1}`}
              sx={{
                width: "100%", // fyller sin gridcell
                height: "auto",
                objectFit: "cover",
                aspectRatio: "3 / 4",
                cursor: "pointer",
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default InstagramGrid;
