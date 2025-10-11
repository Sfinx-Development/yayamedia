import { Box } from "@mui/material";
import Footer from "../components/Footer";
import { isMobile } from "../components/GreyComponent";
import InstagramGrid from "../components/InstagramGrid";
import MobileFooter from "../components/MobileFooter";
import NextCase from "../components/NextCase";
import ParallaxImg from "../components/ParallaxImg";
import SleipnerUppdrag from "../components/SleipnerUppdrag";
import Wave from "../components/Wave";

//RESPOINSIVT STOR SKÄRM
export default function SleipnerProject() {
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
        image="https://i.imgur.com/ADTyziN.jpeg"
        bgPosition={{
          xs: "20% 150%",
          sm: "20% 75%",
          md: "20% 67%",
          xl: "20% 75%",
        }} // ← flyttar bilden uppåt
        bgSize="160%"
      />
      <Box sx={{ width: "100%", position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            paddingY: { xs: 40, md: 10 },
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
            <SleipnerUppdrag />
            <InstagramGrid />
            <NextCase />

            {isMobile ? <MobileFooter /> : <Footer />}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
