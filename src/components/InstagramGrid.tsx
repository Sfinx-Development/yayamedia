import React from "react";
import { Box, Typography } from "@mui/material";
import { isMobile } from "./GreyComponent";

const mockImages = [
  "https://i.imgur.com/XHtcCQV.png",
  "https://i.imgur.com/pDMM8Je.png",
  "https://i.imgur.com/DRE44iq.jpeg",
  "https://i.imgur.com/ADTyziN.jpeg",
  "https://i.imgur.com/3bgZXRG.jpeg",
  "https://i.imgur.com/XHtcCQV.png",
  "https://i.imgur.com/XHtcCQV.png",
  "https://i.imgur.com/pDMM8Je.png",
  "https://i.imgur.com/DRE44iq.jpeg",
];


const InstagramGrid: React.FC = () => {
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
          maxWidth: 900,
          px: { xs: 1, sm: 3, md: 0 },
          mt: isMobile ? -10 : {xs: 3}
        }}
      >
        <Typography
          variant="h6"
          sx={{ textAlign: "center", fontWeight: 600, mb: 4 }}
        >
          Sociala medier
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(3, 1fr)",
              sm: "repeat(3, 1fr)",
            },
            gap: 1,
          }}
        >
          {mockImages.map((src, index) => (
            <Box
              key={index}
              component="img"
              src={src}
              alt={`Instagram bild ${index + 1}`}
              sx={{
                width: "100%", // fyller sin gridcell
                height: "auto",
                objectFit: "cover",
                aspectRatio: "1 / 1", // gör varje ruta kvadratisk
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default InstagramGrid;
