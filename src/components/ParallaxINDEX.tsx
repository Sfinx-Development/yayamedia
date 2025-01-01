import {
  Box,
  Button,
  styled,
  Typography,
  TypographyProps,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Case from "./Case";
import Footer from "./Footer";
import GreenComponent from "./GreenComponent";
import { isTablet } from "./GreyComponent";
import MobileFooter from "./MobileFooter";
import Partners from "./Partners";
import Wave from "./Wave";

export default function ParallaxWave() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrollPosition, setScrollPosition] = useState(0);
  const isMobile = window.innerWidth <= 820;
  const isBigScreen = window.innerHeight >= 1080;
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    console.log(scrollPosition);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  const Texting = styled(Typography)<TypographyProps>`
    font-family: "H3", sans-serif;
    font-variation-settings: "wght" 300;
  `;

  const TextingATYP = styled(Typography)<TypographyProps>`
    font-family: "atyp-bl-variable", sans-serif;
    font-variation-settings: "ital" 0, "opsz" 6, "wght" 280;
  `;
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflowX: "hidden",
        backgroundColor: "red",
      }}
    >
      {/* paddingen här har med vågen att göra */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          paddingY: { xs: 40, md: 10 },
          zIndex: 3,
          height: "100%",
        }}
      >
        <Wave />
        <Box
          sx={{
            backgroundColor: "#F7F7F7",
            marginTop: -2,
            position: "absolute",
            width: "100%",
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: isTablet ? "row" : { xs: "column", md: "row" },
              justifyContent: "center",
              // gap: { xl: 8 },
            }}
          >
            <Box
              sx={{
                backgroundColor: "#F7F7F7",
                // margin: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                paddingBottom: { xs: 5, md: 20 },
                margin: { xs: 2, md: 0 },
                //  paddingLeft: 1.5,
                paddingLeft: isMobile ? 1.5 : { xs: 1, md: 0, sm: 0, xl: 0 },
              }}
            >
              <Texting
                sx={{
                  fontSize: isTablet ? 45 : { xs: 35, md: 45, xl: 55 },
                  color: "#363434",
                  marginBottom: 2,
                }}
                component="h2"
              >
                Slut på moves?
              </Texting>
              <TextingATYP
                sx={{
                  width: { xs: 320, md: 450, xl: 600 },
                  fontSize: isTablet ? 18 : { xl: 25 },
                }}
                component="h3"
              >
                Det brusar högt där ute. Att hitta sin unika rytm bland
                tusentals andra kan vara svårt - vi vet. Men vi vet också hur
                man skapar autentiskt innehåll. Du vet, sånt vi alla faktiskt
                frivilligt konsumerar. Ibland är allt som behövs ett enkelt
                klick. Andra gånger en skarp klack. Och för vissa, ett
                kraftfullt boom för att verkligen bryta igenom bruset.
              </TextingATYP>
              <TextingATYP
                sx={{
                  width: { xs: 320, md: 450, xl: 600 },
                  marginTop: 2,
                  fontSize: isTablet ? 18 : { xl: 25 },
                }}
                component="h3"
              >
                Oavsett hur du för dig just nu kan du räkna med oss! En
                fullständig koreografi eller ett par väl valda moves? Upp till
                dig! Vi erbjuder paketlösningar för det mesta, och anpassar oss
                alltid efter dina behov.
              </TextingATYP>
              <Button
                aria-label="Navigera till tjänster-sidan"
                onClick={() => {
                  navigate("/tjanster");
                }}
                sx={{
                  backgroundColor: "#363434",
                  marginTop: 3,
                  maxWidth: isTablet ? "60%" : "40%",
                  color: "#F7F7F7",
                  borderRadius: 2,
                  paddingY: { md: 1, xl: 2 },
                  textTransform: "none",
                  "&:hover": {
                    background: "linear-gradient(to top, #EDC1D0, #F3D9DF)", // Färgen för hover-effekten
                  },
                  "&:active": {
                    background: "linear-gradient(to top, #EDC1D0, #F3D9DF)", // Färgen när knappen är aktiv (om nödvändigt)
                  },
                }}
              >
                <Texting sx={{ fontSize: 18 }}>Våra tjänster</Texting>
              </Button>
            </Box>
            <Box
              sx={{
                marginTop: { xs: 0, md: 2, xl: 8 },
                backgroundColor: "#F7F7F7",
                padding: 0,
                margin: 0,
                display: "flex",
                alignItems: isTablet ? "end" : "start",
              }}
            >
              <video
                width={
                  isMobile && !isTablet
                    ? "0"
                    : isTablet
                    ? "350"
                    : isBigScreen
                    ? "700"
                    : "500"
                }
                autoPlay
                loop
                muted
                style={{ display: isMobile ? "none" : "block" }} // Döljer videon om enheten är mobil
              >
                {/* <video
                width={
                  isMobile && !isTablet
                    ? "320"
                    : isTablet
                    ? "350"
                    : isBigScreen
                    ? "700"
                    : "500"
                }
                // height="400"
                autoPlay
                loop
                muted
              > */}
                <source
                  src="https://i.imgur.com/5yECUKT.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </Box>
          </Box>
          <GreenComponent />
          <Case />
          <Partners />
          {isMobile ? <MobileFooter /> : <Footer />}
        </Box>
      </Box>
    </Box>
  );
}
