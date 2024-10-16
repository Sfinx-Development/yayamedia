import { Box, styled, Typography } from "@mui/material";
import { isBiggerScreen, isBigScreen, isTablet } from "./GreyComponent";

export default function YellowComponent() {
  const Texting = styled(Typography)`
    font-family: "H3", sans-serif;
    font-variation-settings: "wght" 800;
  `;

  return (
    // <Box
    //   sx={{
    //     width: "100%",
    //     background: "linear-gradient(to top,  #FAECD0,#FAF7E4)",
    //     display: "flex",
    //     justifyContent: "center",
    //     paddingY: isTablet ? 30 : { xs: 2, md: 4 },
    //     paddingX: { xs: 1, md: 0 },
    //     marginTop: "60px",
    //     marginBottom: 100,
    //     alignItems: "center",
    //     paddingBottom: { xl: 20 },
    //     position: "fixed",
    //     zIndex: 2,
    //     height: isTablet ? 800 : { xs: "550px", md: "500px", xl: 800 },
    //   }}
    // >
    <Box
      sx={{
        width: "100%",
        background: "linear-gradient(to top,  #FAECD0,#FAF7E4)",
        display: "flex",
        justifyContent: "start",
        // paddingY: isTablet ? 30 : { xs: 1, md: 4, xl: 0 },
        paddingX: { xs: 1 },
        alignItems: { xs: "center", xl: "start" },
        position: "fixed",
        zIndex: 2,
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          // width: "100%",
          height: { xs: "70%", md: "60%" },
          // backgroundColor: "yellow",
          // alignItems: "flex-start", // Align items to the start (left)
          justifyContent: "flex-start", // Optional, adjust based on your layout needs
          width: "100%",
          alignItems: isBigScreen ? "end" : { xs: "start", xl: "center" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "column" },
            marginLeft: { xs: 2, md: "12%", xl: "10%" },
            maxWidth: { xs: "100%", md: "70%" },
            // backgroundColor: "red",
          }}
        >
          <Texting
            sx={{
              paddingTop: isBiggerScreen ? 15 : 10,
              fontSize: isTablet
                ? 80
                : isBigScreen
                ? 90
                : { xs: 40, md: 80, xl: 100 },
              color: "#363434",
              lineHeight: 1,
            }}
          >
            Vilka är vi?
          </Texting>
          <Texting
            sx={{
              fontSize: isTablet
                ? 50
                : isBigScreen
                ? 60
                : { xs: 30, md: 50, xl: 70 },
              color: "#363434",
              marginBottom: isBiggerScreen ? 20 : 12,
            }}
          >
            Allt du behöver veta.
          </Texting>
        </Box>
      </Box>
    </Box>
  );
}
