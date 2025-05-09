import { Box } from "@mui/material";
// import ParallaxYaya from "../components/ParallaxYaya";

// import YellowComponent from "../components/YellowComponent";
// import AsundsholmInfo from "../components/AsundsholmInfo";
import Case from "../components/Case";
import { BonusComponent } from "../components/BonusComponent";

import AsundsholmUppdrag from "../components/AsundsholmUppdrag";

// import ParallaxImg from "../components/ParallaxImg";
import { isMobile } from "../components/GreyComponent";
import MobileFooter from "../components/MobileFooter";
import Footer from "../components/Footer";
import ParallaxImg from "../components/ParallaxImg";
import Wave from "../components/Wave";

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
