import { Box,  } from "@mui/material";
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

export default function AsundsholmProject() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 0,
        margin: 0,
        backgroundColor: "#F7F7F7",
        overflowX: "hidden",
        width: "100%",
        alignItems: "start",
        flexGrow: 1,
      }}
    >
      {/* <ParallaxImg image="https://i.imgur.com/pDMM8Je.png" /> */}


      {/* Scrollinnehåll under hero */}
      <Box
        sx={{
          width: "100%",
          position: "relative",
          zIndex: 2,
          // marginTop: "-2px",
          // marginTop: { xs: -100, md: 10 }, // Istället för height: "100vh"
            height: "100vh", // viktigt! så vi scrollar ned från heron
        }}
      >
        {/* <Box
          sx={{
            width: "100%",
            backgroundColor: "#ffffff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 2, md: 6 },
            py: { xs: 1, md: 2 },
            borderBottom: "1px solid #e0e0e0",
            position: "sticky",
            top: 0, // justeras beroende på din header
            zIndex: 100,
          }}
        >
          {[
            { label: "Åsundsholm", path: "/asundsholm" },
            { label: "Sleipner", path: "/sleipner" },
            // Lägg till fler projekt här
          ].map((proj) => (
            <Typography
              key={proj.label}
              variant="body2"
              onClick={() => (window.location.href = proj.path)}
              sx={{
                cursor: "pointer",
                fontWeight: 500,
                color: "#363434",
                textTransform: "none",
                opacity: 0.7,
                transition: "opacity 0.2s ease",
                "&:hover": {
                  opacity: 1,
                },
              }}
            >
              {proj.label}
            </Typography>
          ))}
        </Box> */}

        <AsundsholmUppdrag />
        <BonusComponent />
        <Case />
      </Box>
      {isMobile ? <MobileFooter /> : <Footer />}
    </Box>
  );
}
