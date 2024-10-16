import { Box } from "@mui/material";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ConceptDevelopment from "./ConceptDevelopment";
import Footer from "./Footer";
import { isMobile } from "./GreyComponent";
import MobileFooter from "./MobileFooter";
import PaketScroll from "./PaketScroll";
import Partners from "./Partners";
import Wave from "./Wave";

export default function ParallaxServices() {
  const location = useLocation();
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflowX: "hidden",
        backgroundColor: "#F7F7F7",
      }}
    >
      {/* paddingen här har med vågen att göra */}
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
            backgroundColor: "#F7F7F7",
            marginTop: { xs: -5, md: -10 },
            position: "absolute",
            width: "100%",
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <PaketScroll />
          <ConceptDevelopment />
          <Partners />
          {isMobile ? <MobileFooter /> : <Footer />}
        </Box>
      </Box>
    </Box>
  );
}
