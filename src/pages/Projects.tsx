import { Box } from "@mui/material";
import AsundsholmUppdrag from "../components/AsundsholmUppdrag";
import { BonusComponent } from "../components/BonusComponent";
import Case from "../components/Case";
import Footer from "../components/Footer";
import { isMobile } from "../components/GreyComponent";
import MobileFooter from "../components/MobileFooter";
import ParallaxImg from "../components/ParallaxImg";
import Wave from "../components/Wave";

//RESPOINSIVT STOR SKÄRM
export default function AsundsholmProject() {
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
      <ParallaxImg image="https://i.imgur.com/pDMM8Je.png" />

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
              marginTop: {xs:-2,xl:-25},
              position: "absolute",
              width: "100%",
              zIndex: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AsundsholmUppdrag />
            <BonusComponent />
            <Case />
            {isMobile ? <MobileFooter /> : <Footer />}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
