import { Box, styled, Typography, TypographyProps } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import Case from "./Case";
import Footer from "./Footer";
import MobileFooter from "./MobileFooter";
import Partners from "./Partners";
import Wave from "./Wave";

export default function ParallaxWave() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrollPosition, setScrollPosition] = useState(0);
  const isMobile = window.innerWidth <= 820;
  const navigate = useNavigate();

  // const isBigScreen = window.innerHeight >= 1080;
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
  // const navigate = useNavigate();
  const Heading = styled(Typography)`
    font-family: "atyp-bl-variable", sans-serif;
    font-variation-settings: "ital" 0, "opsz" 6, "wght" 280;
  `;
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
            display: "flex",
            height: "100%",
            width: "100%",
            // alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F7F7F7",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#F7F7F7",
              // backgroundColor: "pink",
              marginTop: -2,
              position: "absolute",
              width: "100%",
              zIndex: 3,
              textAlign: "center",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              gap: 4,
              alignItems: "center",
              maxWidth: { xs: "90%", md: "80%" },
            }}
          >
            <Box sx={{ flex: 1, backgroundColor: "#F8F8F8" }}>
              <Texting
                sx={{
                  fontSize: { xs: 30, md: 40, xl: 55 },
                  color: "#363434",
                  mb: 3,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Slut på moves?
              </Texting>
              <Typography
                sx={{
                  fontSize: { xs: 16, md: 18 },
                  lineHeight: 1.6,
                  color: "#363434",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Det brusar högt där ute. Att hitta sin unika rytm bland
                tusentals andra kan vara svårt - vi vet. Men vi vet också hur
                man skapar autentiskt innehåll. Du vet, sånt vi alla faktiskt
                frivilligt konsumerar. Ibland är allt som behövs ett enkelt
                klick. Andra gånger en skarp klack. Och för vissa, ett
                kraftfullt boom för att verkligen bryta igenom bruset.
                <br />
                <br />
                Oavsett hur du gör just nu kan du räkna med oss! En fullständig
                koreografi eller ett par väl valda moves? Upp till dig! Vi
                erbjuder paketlösningar för det mesta, och anpassar oss alltid
                efter dina behov.
              </Typography>
            </Box>

            <Box
              component="img"
              src="https://i.imgur.com/a78yBCA.png"
              alt="Moves illustration"
              sx={{
                flex: 1,
                width: "100%",
                maxWidth: 500,
                objectFit: "contain",
                mx: "auto",
                display: "block",
                transform: "translateX(-10%) translateY(80px)", // 👈 flyttar in till vänster & lite ner
                zIndex: 2,
              }}
            />
          </Box>
        </Box>
        <Box sx={{ flex: 1, backgroundColor: "#F8F8F8", width: "100%" }}>
          <Texting
            sx={{
              fontSize: { xs: 30, md: 40, xl: 55 },
              color: "#363434",
              // mb: 3,
              textAlign: "center",
            }}
          >
            Yaya, at your service
          </Texting>
        </Box>
        {/* <GreenComponent /> */}
        {/* <Case /> */}
        <Partners />
        {isMobile ? <MobileFooter /> : <Footer />}
      </Box>
      {/* </Box> */}
    </Box>
  );
}
