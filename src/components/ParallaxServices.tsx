import { Box, Button, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Case from "./Case";
import GreenComponent from "./GreenComponent";
import Partners from "./Partners";
import Wave from "./Wave";

export default function ParallaxServices() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const isMobile = window.innerWidth <= 820;
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Texting = styled(Typography)`
    font-family: "H3", sans-serif;
    font-variation-settings: "wght" 300;
  `;

  const TextingATYP = styled(Typography)`
    font-family: "AtypRegularVariable", sans-serif;
    font-variation-settings: "wght" 300;
  `;

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
          paddingY: { xs: 30, md: 20 },
          zIndex: 3,
        }}
      >
        <Wave />
        <Box
          sx={{
            backgroundColor: "#F7F7F7",
            margin: 0,
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
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
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
              }}
            >
              <Texting
                sx={{
                  fontSize: { xs: 35, md: 45 },
                  color: "#363434",
                  marginBottom: 2,
                }}
              >
                Slut på moves?
              </Texting>
              <TextingATYP
                sx={{
                  width: { xs: 320, md: 450 },
                }}
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
                  width: { xs: 320, md: 450 },
                  marginTop: 2,
                }}
              >
                Oavsett hur du för dig just nu kan du räkna med oss! En
                fullständig koreografi eller ett par väl valda moves? Upp till
                dig! Vi erbjuder paketlösningar för det mesta, och anpassar oss
                alltid efter dina behov.
              </TextingATYP>
              <Button
                sx={{
                  backgroundColor: "#363434",
                  marginTop: 3,
                  maxWidth: "40%",
                  color: "#F7F7F7",
                  borderRadius: 2,
                  paddingY: 1,
                  textTransform: "none",
                }}
              >
                <Texting sx={{ fontSize: 18 }}>Våra tjänster</Texting>
              </Button>
            </Box>
            <Box
              sx={{
                marginTop: { xs: 0, md: 2 },
                backgroundColor: "#F7F7F7",
                padding: 0,
                margin: 0,
                display: "flex",
                alignItems: "start",
              }}
            >
              <video
                width={isMobile ? "320" : "500"}
                // height="400"
                autoPlay
                loop
                muted
              >
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
        </Box>
      </Box>
    </Box>
  );
}
