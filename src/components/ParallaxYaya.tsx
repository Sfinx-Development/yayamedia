import { Box, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import { isBiggerScreen, isTablet } from "./GreyComponent";
import MobileFooter from "./MobileFooter";
import Partners from "./Partners";
import Wave from "./Wave";

export default function ParallaxYaya() {
  const isBigScreen = window.innerHeight >= 1080;
  const location = useLocation();
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        // Calculate the position of the element
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;

        // Adjust the offset as needed (for example, 100 pixels)
        const offset = 100; // Change this value based on your header size or spacing

        // Scroll to the adjusted position
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrollPosition, setScrollPosition] = useState(0);
  const isMobile = window.innerWidth <= 820;
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

  const Texting = styled(Typography)`
    font-family: "H3", sans-serif;
    font-variation-settings: "wght" 300;
  `;

  const TextingATYP = styled(Typography)`
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
        backgroundColor: "#f8f8f8",
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
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#f8f8f8",
                // margin: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingBottom: isTablet ? 10 : { xs: 5, md: 20 },
                margin: { xs: 2, md: 0 },
              }}
            >
              <Texting
                sx={{
                  fontSize: isTablet ? 30 : { xs: 20, md: 30, xl: 45 },
                  color: "#363434",
                  marginBottom: 2,
                  textAlign: { xs: "start", md: "center" },
                  maxWidth: { xs: "90%", md: "40%" },
                }}
              >
                Någonstans mellan bruna bananer och trasiga mjölkpaket.
              </Texting>

              <TextingATYP
                sx={{
                  marginTop: 2,
                  maxWidth: { xs: "90%", md: "70%" },
                  textAlign: { xs: "start", md: "center" },
                  fontSize: isTablet ? 20 : { xs: 18, md: 18, xl: 25 },
                }}
              >
                Och lektioner i kommunikation, förstås. Ett fenomen som kan få
                vilket barn som helst att på en millisekund gå från pirrigt
                förväntansfull till besviken. Vi minimerar helt enkelt risken
                för besvikelse, och erbjuder bara hårda paket på Yaya.
                Innehållet då? Det bestämmer du själv. Mjuka klappar. Ett
                fenomen som kan få vilket barn som helst att på en millisekund
                gå från pirrigt förväntansfull till besviken. Vi minimerar helt
                enkelt risken för besvikelse, och erbjuder bara hårda paket på
                Yaya. Innehållet då? Det bestämmer du själv. Mjuka klappar. Ett
                fenomen som kan få vilket barn som helst att på en millisekund
                gå från pirrigt förväntansfull till besviken. Vi minimerar helt
                enkelt risken för besvikelse, och erbjuder bara hårda paket på
                Yaya. Innehållet då? Det bestämmer du själv.
              </TextingATYP>
            </Box>
          </Box>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: isTablet ? "row" : { xs: "column", md: "row" },
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              gap: isTablet ? 2 : isBigScreen ? 8 : 8,
              maxWidth: { xs: "90%", md: "70%" },
            }}
          >
            <Box
              sx={{
                borderRadius: "50%",
                width: { xs: 80, md: 110, xl: 150 },
                height: { xs: 80, md: 110, xl: 150 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                zIndex: 2,
                top: isTablet ? "-10%" : { xs: "-5%", md: "-15%", xl: "-22%" },
                // top: "-88px",
                left: isTablet
                  ? "calc(25% - 150px)"
                  : isBiggerScreen
                  ? "calc(30% - 525px)"
                  : {
                      xs: "calc(50% - 150px)",
                      md: "calc(50% - 410px)",
                      xl: "calc(40% - 525px)",
                    },

                // left: { xs: "20%", md: "20%" },
                // top: { xs: "-20%", md: "-20%" },
              }}
            >
              <img
                src="https://i.imgur.com/sJh4Ym5.png"
                alt="Girl profile in a circle"
                style={{
                  borderRadius: "50%",
                  width: "100%",
                  height: "100%",
                  transform: "scaleX(-1)",
                }}
              />
            </Box>
            <Box
              sx={{
                backgroundColor: "#F3D9DF",
                position: "relative",
                padding: 5,
                borderRadius: 3,
                // flex: 1 / 3,
                height: isTablet
                  ? 500
                  : isBiggerScreen
                  ? 400
                  : { xs: 350, md: 400, xl: 450 },
                width: { xs: 300, md: "45%" },
              }}
            >
              <Texting
                sx={{
                  fontSize: { xs: 20, md: 20, xl: 26 },
                  color: "#363434",
                  marginY: { xs: 2, md: 2 },
                  paddingBottom: { xl: 2 },
                }}
              >
                Såhär säger Emelie - om Åsa
              </Texting>
              <TextingATYP
                sx={{ flexWrap: "wrap", fontSize: { xs: 16, md: 16, xl: 23 } }}
              >
                Och lektioner i kommunikation, förstås. Ett fenomen som kan få
                vilket barn som helst att på en millisekund gå från pirrigt
                förväntansfull till besviken. Vi minimerar helt enkelt risken
                för besvikelse, och erbjuder bara hårda paket på Yaya.
                Innehållet då? Det bestämmer du själv. Och lektioner i
                kommunikation, förstås. Ett fenomen som kan få vilket barn som
                helst att på en millisekund gå från pirrigt förväntansfull till
                besviken. Vi minimerar helt enkelt risken för
              </TextingATYP>
            </Box>
            {/* DETTA ÄR EN CIRKELBOX SOM ALLTID SKA SITTA LÄNGST UPP PÅ BOXENS KANT LITE TILL HÖGER */}
            <Box
              sx={{
                borderRadius: "50%",
                width: { xs: 80, md: 110, xl: 150 },
                height: { xs: 80, md: 110, xl: 150 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // backgroundColor: isTablet ? "red" : "green",
                position: "absolute",
                zIndex: 2,

                top: isTablet ? "-10%" : { xs: "48%", md: "-15%", xl: "-22%" },

                // top: "-88px",

                left: isTablet
                  ? "calc(65% - -150px)"
                  : isBiggerScreen
                  ? "calc(70% - -380px)"
                  : {
                      xs: "calc(50% - 150px)",
                      md: "calc(50% - -300px)",
                      xl: "calc(60% - -380px)",
                    },
                // right: { xs: "20%", md: "20%" },
                // top: { xs: "-10%", md: "-20%" },
              }}
            >
              <img
                src="https://i.imgur.com/RYl6BGF.png"
                alt="Girl profile in a circle"
                style={{
                  borderRadius: "50%",
                  width: "100%",
                  height: "100%",
                  transform: isMobile ? "scaleX(-1)" : "none",
                }}
              />
            </Box>
            {/* på denna ska den sitta: */}
            <Box
              sx={{
                backgroundColor: "#B9DCD2",
                padding: 5,
                borderRadius: 3,
                position: "relative",
                height: isTablet
                  ? 500
                  : isBiggerScreen
                  ? 400
                  : { xs: 350, md: 400, xl: 450 },
                width: { xs: 300, md: "45%" },
              }}
            >
              <Texting
                sx={{
                  fontSize: { xs: 20, md: 20, xl: 26 },
                  color: "#363434",
                  marginY: { xs: 2, md: 2 },
                  paddingBottom: { xl: 2 },
                }}
              >
                Såhär säger Åsa - om Emelie
              </Texting>
              <TextingATYP
                sx={{ flexWrap: "wrap", fontSize: { xs: 16, md: 16, xl: 23 } }}
              >
                Och lektioner i kommunikation, förstås. Ett fenomen som kan få
                vilket barn som helst att på en millisekund gå från pirrigt
                förväntansfull till besviken. Vi minimerar helt enkelt risken
                för besvikelse, och erbjuder bara hårda paket på Yaya.
                Innehållet då? Det bestämmer du själv. Och lektioner i
                kommunikation, förstås. Ett fenomen som kan få vilket barn som
                helst att på en millisekund gå från pirrigt förväntansfull till
                besviken. Vi minimerar helt enkelt risken för
              </TextingATYP>
            </Box>
          </Box>
          {/* //STRINGS BILDEN SKA ALLTID SITTA LÄNGST UT TILL HÖGER PÅ SKÄRMEN */}
          <Box
            sx={{
              marginY: isTablet ? 12 : { xs: 6, md: 12, xl: 25 },

              paddingTop: { xs: 5, md: 10, xl: 15 },
              display: "flex",
              width: "100%",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#363434",
                display: "flex",
                flexDirection: "row",
                height: isBiggerScreen ? 300 : { xs: 250, md: 230 },
                padding: { xs: 2, md: 0, xl: 2 },
                justifyContent: { xs: "space-bewtween", md: "space-evenly" },
                width: "100%",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flex: { xs: "none", md: 1 / 2 },
                  justifyContent: "center",
                  width: { xs: "100%", md: "auto" },
                }}
              >
                <Texting
                  sx={{
                    fontSize: { xs: 30, md: 30, xl: 45 },
                    color: "#B9DCD2",
                    marginBottom: 2,
                  }}
                >
                  Rubrik
                </Texting>
                <TextingATYP
                  sx={{
                    color: "#f8f8f8",
                    fontSize: isTablet ? 16 : { xs: 12, md: 18, xl: 25 },
                    maxWidth: isTablet ? "70%" : { xs: "50%", md: "70%" },
                    flexWrap: "wrap",
                    // backgroundColor: "red",
                  }}
                >
                  No worries - vi är ju en kommunikationsbyrå. Vi är bra på
                  annat också. Slå en pling, eller släng iväg ett mejl och
                  berätta om dina drömmar och visioner. Vi är helt inne på att
                  förverkliga dom!
                </TextingATYP>
              </Box>

              {/* Two Girls Image */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img
                  src="https://i.imgur.com/c81JL2G.jpeg"
                  alt="two girls"
                  height={
                    isMobile && !isTablet
                      ? 270
                      : isTablet
                      ? 340
                      : isBiggerScreen
                      ? 540
                      : isBigScreen
                      ? 450
                      : 340
                  }
                  width={
                    isMobile && !isTablet
                      ? 170
                      : isTablet
                      ? 220
                      : isBiggerScreen
                      ? 380
                      : isBigScreen
                      ? 310
                      : 230
                  }
                  style={{
                    position: "absolute",
                    bottom:
                      isMobile && !isTablet
                        ? "-18%"
                        : isTablet
                        ? "-10%"
                        : isBiggerScreen
                        ? "-32%"
                        : isBigScreen
                        ? "-35%"
                        : "-20%",
                    right:
                      isMobile && !isTablet
                        ? "-20%"
                        : isTablet
                        ? "-10%"
                        : isBiggerScreen
                        ? "10%"
                        : isBigScreen
                        ? "10%"
                        : "10%",
                    transform: "translateX(-50%)",
                  }}
                />
              </Box>

              {/* Strings in Colors Image */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  position: "absolute",
                  zIndex: 3, // Ensure it's above other elements like the two girls' image
                  top: "50%", // Vertically center the image in the box
                  right: "0%", // Stick it to the right edge of the box
                  transform: isMobile
                    ? "translateY(20%) translateX(20%) rotate(13deg)"
                    : "translateY(-30%) translateX(0%) rotate(14.5deg)", // Adjust position and rotation
                  width: isTablet
                    ? 400
                    : isBiggerScreen
                    ? 920
                    : isBigScreen
                    ? 700
                    : isMobile
                    ? 300
                    : 510,
                }}
              >
                <img
                  src="https://i.imgur.com/aehCUnX.png"
                  alt="strings in different colors"
                  style={{
                    height: "auto", // Maintain aspect ratio
                  }}
                />
              </Box>
            </Box>
          </Box>

          <Box
            id="kontakt"
            sx={{
              // backgroundColor: "red",
              display: "flex",
              // height: "100vh",
              minHeight: "100%",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: 3, md: 6 },
              width: "100%",
              paddingTop: { xs: 10, md: 10, xl: 15 },
              paddingBottom: { xs: 2, md: 10, xl: 15 },
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "40%" },
                height: isBiggerScreen
                  ? 900
                  : isBigScreen
                  ? 700
                  : isMobile
                  ? 420
                  : 550,
                backgroundImage: `url("https://i.imgur.com/pHn9D5k.jpeg")`,
                backgroundSize: "120%",
                backgroundPosition: "right 50% top 13%",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                color: "white",
                // marginLeft: { xs: 0, md: 8 },
                // marginLeft: { xs: 0, md: 6 },
              }}
            >
              <Box
                sx={{
                  backgroundColor: "rgba(247, 247, 247, 0.9)",
                  width: "100%",
                  color: "#363434",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingY: 2,
                }}
              >
                <Texting
                  sx={{
                    fontSize: { xs: 20, md: 30, xl: 45 },
                    paddingY: { xs: 1, md: 0 },
                  }}
                >
                  Emelie Svernhed
                </Texting>
                <TextingATYP sx={{ fontSize: { xl: 25 } }}>
                  COPYWRITER/CREATIVE DIRECTOR
                </TextingATYP>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 1,
                    padding: 1,
                  }}
                >
                  <img
                    height={24}
                    src="https://i.imgur.com/DN2uTbx.png"
                    alt="email-icon"
                  />
                  <a
                    href="mailto:emelie@yayamedia.se"
                    style={{ textDecoration: "none" }}
                  >
                    <TextingATYP
                      sx={{ color: "#363434", fontSize: { xl: 25 } }}
                    >
                      emelie@yayamedia.se
                    </TextingATYP>
                  </a>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", md: "40%" },
                height: isBiggerScreen
                  ? 900
                  : isBigScreen
                  ? 700
                  : isMobile
                  ? 420
                  : 550,
                backgroundImage: `url("https://i.imgur.com/IDFZknK.jpeg")`,
                backgroundSize: "135%",
                backgroundPosition: "right 0% top 20%",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                color: "white",
                // marginRight: { xs: 2, md: 8 },
                // marginRight: { xs: 0, md: 6 },
              }}
            >
              <Box
                sx={{
                  backgroundColor: "rgba(247, 247, 247, 0.9)",
                  width: "100%",
                  color: "#363434",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingY: 2,
                }}
              >
                <Texting
                  sx={{
                    fontSize: { xs: 20, md: 30, xl: 45 },
                    paddingY: { xs: 1, md: 0 },
                  }}
                >
                  Åsa Kjellberg
                </Texting>
                <TextingATYP sx={{ fontSize: { xl: 25 } }}>
                  ART DIRECTOR/PROJEKTLEDARE
                </TextingATYP>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 1,
                    padding: 1,
                  }}
                >
                  <img
                    height={24}
                    src="https://i.imgur.com/DN2uTbx.png"
                    alt="email-icon"
                  />
                  <a
                    href="mailto:emelie@yayamedia.se"
                    style={{ textDecoration: "none" }}
                  >
                    <TextingATYP
                      sx={{ color: "#363434", fontSize: { xl: 25 } }}
                    >
                      asa@yayamedia.se
                    </TextingATYP>
                  </a>
                </Box>
              </Box>
            </Box>
          </Box>
          <Partners />
          {isMobile ? <MobileFooter /> : <Footer />}
        </Box>
      </Box>
    </Box>
  );
}
