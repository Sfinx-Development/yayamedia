import { Box, styled, Typography } from "@mui/material";
import { isBiggerScreen, isMobile, isTablet } from "./GreyComponent";

export default function YellowComponent() {
  const Texting = styled(Typography)`
    font-family: "H3", sans-serif;
    font-variation-settings: "wght" 300;
  `;

  return (
    <Box
      sx={{
        width: "100%",
        background: "linear-gradient(to top,  #FAECD0,#FAF7E4)",
        display: "flex",
        justifyContent: "center",
        paddingY: isTablet ? 30 : { xs: 2, md: 4 },
        paddingX: { xs: 1, md: 0 },
        marginTop: "60px",
        marginBottom: 100,
        alignItems: "center",
        paddingBottom: { xl: 20 },
        position: "fixed",
        zIndex: 2,
        height: { xs: "500px", md: "500px", xl: 800 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          height: "100%",
          flexDirection: { xs: "column", md: "column" },
          alignItems: "flex-start",
          maxWidth: { md: 900, xl: 1300 },
          width: "100%",
          paddingX: isTablet ? 2 : isMobile ? 1 : 0,
          marginTop: isBiggerScreen ? 50 : 50,
        }}
      >
        <Texting
          sx={{
            fontSize: isTablet ? 80 : { xs: 40, md: 80, xl: 90 },
            color: "#363434",
          }}
        >
          Vilka är vi?
        </Texting>
        <Texting
          sx={{
            fontSize: isTablet ? 50 : { xs: 30, md: 50, xl: 60 },
            color: "#363434",
          }}
        >
          Allt du behöver veta.
        </Texting>
      </Box>
    </Box>
  );
}
