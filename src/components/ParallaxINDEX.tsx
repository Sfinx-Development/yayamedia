import {
  Box,
  Button,
  styled,
  Typography,
  TypographyProps,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import Case from "./Case";
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
            backgroundColor: "#F7F7F7",
            marginTop: -2,
            position: "absolute",
            width: "100%",
            zIndex: 3,
            textAlign: "center", // centrera textinnehåll
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
                Sköna nyheter!
              </Texting>
              <TextingATYP
                sx={{
                  width: { xs: 320, md: 650, xl: 1000 },
                  fontSize: isTablet ? 18 : { xl: 25 },
                }}
                component="h3"
              >
                Sommaren närmar sig och hela teamet glider snart in i
                semestermode. Du däremot? Stirrar på ett tomt content-schema med
                lätt panik i blicken. Eller så sitter du på en röst som fötjänar
                mer - och är sugen på att äntligen sätta tänderna i en podd.
              </TextingATYP>
              <TextingATYP
                sx={{
                  width: { xs: 320, md: 650, xl: 1000 },
                  marginTop: 2,
                  fontSize: isTablet ? 18 : { xl: 25 },
                }}
                component="h3"
              >
                Oavsett vilket - we got you. Vi har knåpat ihop två nya tjänster
                som gör det enkelt att hålla kommunikationen levande, även när
                resten av världen lutar sig tillbaka. Scrolla ned, spana in -
                och häng på oss in i sommaren (och gärna in på hösten också!).
              </TextingATYP>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              alignItems: "stretch", // <- viktig
              justifyContent: "center",
              my: { xs: 4, md: 8 },
              px: { xs: 2, sm: 0, lg: 4 },
              paddingX: isTablet ? 2 : { xs: 0, md: 0 },

              width: "100%",
              maxWidth: 1200,
              mx: "auto",
            }}
          >
            <Box
              sx={{
                flex: 1,
                background: "linear-gradient(to top,  #FAECD0,#FAF7E4)",
                width: { xs: "90%", sm: "90%", md: "45%", lg: "35%" }, // samma regler
                mx: "auto", // centrera på xs och sm
                py: 4,

                pb: 4, // ← lite mindre padding än det gröna
                px: { xs: 3, sm: 4, md: 5 },
                borderRadius: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "visible",
                height: { xs: "auto", md: 620, xl: 750 },
              }}
            >
              <Box>
                <Box sx={{ textAlign: "left", mt: 6, mb: 2 }}>
                  <Texting
                    component="h3"
                    sx={{
                      fontSize: { xs: 24, md: 28, xl: 36 },
                      fontWeight: "bold",
                      lineHeight: 1.3,
                    }}
                  >
                    Klick, klack
                  </Texting>
                  <Heading
                    sx={{
                      fontSize: { xs: 22, md: 24 },
                      fontWeight: 300,
                      lineHeight: 1.3,
                    }}
                  >
                    (semester, tack!)
                  </Heading>
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    top: -160,
                    left: "75%",
                    transform: "translateX(-50%)",
                    zIndex: 1,
                  }}
                >
                  <img
                    src="https://i.imgur.com/8XeB1Gl.png"
                    alt="paraply och solstol"
                    style={{ height: 370 }}
                  />
                </Box>

                <TextingATYP
                  sx={{
                    textAlign: "left",
                    fontSize: { xs: 16, md: 18, xl: 22 },
                  }}
                  component="p"
                >
                  Varvar du pitchar och paraplydrinkar med kpier och envis sand
                  mellan tårna? Vi vet hur det är – alla vill ta sin semester,
                  samtidigt. Men kommunikation står sällan still – inte ens när
                  hela marknadsteamet drömmer om solstols-häng och iskall sorbet
                  (eller öl, för den delen).
                  <br />
                  <br />
                  Men du, andas ut!
                  <br />
                  <br />
                  Låt oss hoppa in där det behövs – nyhetsbrev, some, copy eller
                  större designprojekt. Ut i solen och njut, så håller vi
                  ställningarna tills du är tillbaka. Deal?
                  <br />
                  <br />
                  <strong>Klick, klack (semester, tack!)</strong>
                  <br />
                  <em>
                    Hos Yaya hela sommaren (eller så långt solstolarna räcker).
                  </em>
                </TextingATYP>
              </Box>
              <Button
                variant="contained"
                onClick={() => navigate("/offert")} 
                sx={{
                  backgroundColor: "#363434",
                  marginTop: 2,
                  mt: "auto", // flytta neråt
                  // mb: 2,      // luft under
                  // width: "35%",
                  width: "fit-content",
                  color: "#F7F7F7",
                  borderRadius: 2,
                  paddingY: 1.2,
                  textTransform: "none",
                  marginY: { xs: 2, md: 0 }, // ✅ matchar det gröna

                  "&:hover": {
                    backgroundColor: "#363434",
                  },
                }}
              >
                Semester, tack!
              </Button>
            </Box>

            <Box
              sx={{
                flex: 1,
                backgroundColor: "#D2EAE6",
                // width: { xs: "90%", sm: "90%", md: "45%" }, // exakt samma
                mx: "auto",
                py: 4,
                px: { xs: 3, sm: 4, md: 5 },
                borderRadius: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "visible",
                height: { xs: "auto", md: 620, xl: 750 },
              }}
            >
              <Box>
                <Box sx={{ textAlign: "left", mt: 6, mb: 2 }}>
                  <Texting
                    component="h3"
                    sx={{
                      fontSize: { xs: 24, md: 28, xl: 36 },
                      fontWeight: "bold",
                      lineHeight: 1.3,
                    }}
                  >
                    Poddpaketet
                  </Texting>
                  <Heading
                    sx={{
                      fontSize: { xs: 22, md: 24 },
                      fontWeight: 300,
                      lineHeight: 1.3,
                    }}
                  >
                    Här för att hänga – länge!
                  </Heading>
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    bottom: -165,
                    left: "68%",
                    transform: "translateX(-50%)",
                    zIndex: 1,
                  }}
                >
                  <img
                    src="https://i.imgur.com/Dz59thB.png"
                    alt="mikrofon"
                    style={{ height: 400 }}
                  />
                </Box>

                <TextingATYP
                  sx={{
                    fontSize: isTablet ? 18 : { xl: 22 },

                    textAlign: "left",
                  }}
                  component="p"
                >
                  För dig som vill kommunicera smart, ärligt och med närvaro –
                  eller bara snacka lite planlöst.
                  <br />
                  <br />
                  Kanske vill du dra igång en helt ny podd och tänker
                  långsiktigt, eller så är du inne på att släppa ett enda
                  avsnitt för en kampanj. Eller varför inte skapa ett snackigt
                  format för interna och externa budskap? We got you – oavsett
                  hur din dröm ser ut.
                  <br />
                  <br />
                  Lansering, storytelling, stort eller smått – up to you. Vi
                  står för teknik, format och produktion.
                  <br />
                  <br />
                  Du står för rösten.
                  <br />
                  <br />
                  <strong>Poddpaketet</strong>
                  <br />
                  <em>Här för att hänga – länge!</em>
                </TextingATYP>
              </Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#2F5C4A",
                  marginTop: 2,
                  mt: "auto", // flytta neråt
                  // mb: 2,      // luft under
                  // width: "35%",
                  width: "fit-content",
                  color: "#F7F7F7",
                  borderRadius: 2,
                  paddingY: 1.2,
                  textTransform: "none",
                  marginY: { xs: 2, md: 0 }, // ✅ matchar det gröna

                  "&:hover": {
                    backgroundColor: "#363434",
                  },
                }}
              >
                Ja, starta podd!
              </Button>
            </Box>
          </Box>

          <GreenComponent />
          {/* <Case /> */}
          <Partners />
          {isMobile ? <MobileFooter /> : <Footer />}
        </Box>
      </Box>
    </Box>
  );
}
