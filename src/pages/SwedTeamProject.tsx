import { Box } from "@mui/material";
import Footer from "../components/Footer";
import { isMobile } from "../components/GreyComponent";
import MobileFooter from "../components/MobileFooter";
import NextCase from "../components/NextCase";
import ParallaxImg from "../components/ParallaxImg";
import SwedteamUppdrag from "../components/SwedteamUppdrag";
import Wave from "../components/Wave";

export default function SwedteamProject() {
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
        image="https://i.imgur.com/YXRP2MD.jpeg"
        bgPosition={{
          xs: "50% 25%",
          sm: "50% 75%",
          md: "50% 50%",
          xl: "50% 100%",
        }}
        bgSize={{ xs: "180%", md: "100%" }}
      />
      <Box sx={{ width: "100%", position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            paddingY: { xs: 40, md: 15 },
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
            <SwedteamUppdrag />
            <NextCase />
            {isMobile ? <MobileFooter /> : <Footer />}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
