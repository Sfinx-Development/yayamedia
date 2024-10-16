import { Box, styled, Typography } from "@mui/material";
import Footer from "../components/Footer";
import { isMobile, isTablet } from "../components/GreyComponent";
import MobileFooter from "../components/MobileFooter";

export default function Error() {
  const Texting = styled(Typography)`
    font-family: "H3", sans-serif;
    font-variation-settings: "wght" 300;
  `;

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          background: "linear-gradient(to top, #EDC1D0, #F3D9DF)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingY: isTablet ? 30 : { xs: 2, md: 4, xl: 20 },
          marginTop: "100px",
          alignItems: "start",
          height: "400px",
        }}
      >
        <Texting
          sx={{
            fontSize: isTablet ? 80 : { xs: 40, md: 80, xl: 90 },
            color: "#363434",
            marginLeft: { xs: 2, md: 20 },
          }}
        >
          Attans!
        </Texting>
        <Texting
          sx={{
            fontSize: isTablet ? 50 : { xs: 30, md: 50, xl: 60 },
            color: "#363434",
            marginLeft: { xs: 2, md: 20 },
          }}
        >
          Den sidan finns faktiskt inte.
        </Texting>
      </Box>
      {isMobile ? <MobileFooter /> : <Footer />}
    </Box>
  );
}
