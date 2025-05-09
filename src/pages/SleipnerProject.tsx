import SleipnerUppdrag from "../components/SleipnerUppdrag";
import InstagramGrid from "../components/InstagramGrid";
import Footer from "../components/Footer";
import ParallaxImg from "../components/ParallaxImg";
import { Box } from "@mui/material";
import { isMobile } from "../components/GreyComponent";
import MobileFooter from "../components/MobileFooter";
import Wave from "../components/Wave";

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
        bgPosition="20% 67%" // ← flyttar bilden uppåt
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
                    marginTop: -2,
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
                  
                  {isMobile ? <MobileFooter /> : <Footer />}
                </Box>
              </Box>
            </Box>

            </Box>
  );
}
