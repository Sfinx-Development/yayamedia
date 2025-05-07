import { Box, styled, Typography } from "@mui/material";
import { isTablet } from "./GreyComponent";

export default function Case() {
  const isMobile = window.innerWidth <= 820;
  const isBigScreen = window.innerHeight >= 1080;

  const Texting = styled(Typography)`
    font-family: "H3", sans-serif;
    font-variation-settings: "wght" 300;
  `;

  return (
    <Box
      id="case"
      sx={{
        width: "100%",
        background: "#F7F7F7",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 6,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          gap: { xs: 0, md: "8px" }, // 👈 gap på desktop, ej mobil
        }}
      >
        {/* Vänster bild + bakgrund */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#D6D0C6",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="https://i.imgur.com/0hvZjhy.png"
            alt="teip with logos"
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </Box>

        {/* Höger bild + bakgrund */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#314F38", // justera färgen om du vill
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="https://i.imgur.com/z8URFaI.png"
            alt="computer showing a website"
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
