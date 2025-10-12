import { Box } from "@mui/material";
import Footer from "../components/Footer";
import { isMobile } from "../components/GreyComponent";
import MobileFooter from "../components/MobileFooter";
import NextCase from "../components/NextCase";
import ParallaxImg from "../components/ParallaxImg";
import PRHomeUppdrag from "../components/PRHomeUppdrag";
import Wave from "../components/Wave";

export default function PRHome() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        padding: 0,
        margin: 0,
        overflowX: "hidden",
        width: "100%",
        alignItems: "start",
        flexGrow: 1,
      }}
    >
      <ParallaxImg
        image="https://i.imgur.com/dKFIC1b.jpeg"
        bgPosition={{
          xs: "65% 25%",
          sm: "65% 25%",
          md: "50% 25%",
          xl: "50% 35%",
        }}
        bgSize={{ xs: "125%", md: "100%" }}
      />
      <Box sx={{ width: "100%", position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            paddingY: { xs: 40, md: 15, lg: 20, xl: 50 },
            zIndex: 3,
          }}
        >
          <Wave />
          <Box
            sx={{
              backgroundColor: "#f8f8f8",
              marginTop: { xs: -2, xl: -25 },
              position: "absolute",
              width: "100%",
              zIndex: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PRHomeUppdrag />
            <NextCase />
            {isMobile ? <MobileFooter /> : <Footer />}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
