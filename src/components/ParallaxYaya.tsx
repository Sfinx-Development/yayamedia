import { Box, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { isTablet } from "./GreyComponent";
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
        element.scrollIntoView({ behavior: "smooth", block: "start" });
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
          paddingY: { xs: 30, md: 10 },
          zIndex: 3,
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
                alignItems: "center",
                paddingBottom: { xs: 5, md: 20 },
                margin: { xs: 2, md: 0 },
              }}
            >
              <Texting
                sx={{
                  fontSize: isTablet ? 30 : { xs: 20, md: 30, xl: 45 },
                  color: "#363434",
                  marginBottom: 2,
                  textAlign: "center",
                  maxWidth: { xs: "90%", md: "40%" },
                }}
              >
                Någonstans mellan bruna bananer och trasiga mjölkpaket.
              </Texting>

              <TextingATYP
                sx={{
                  marginTop: 2,
                  maxWidth: { xs: "90%", md: "70%" },
                  textAlign: "center",
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
              gap: isTablet ? 2 : isBigScreen ? 8 : 4,
            }}
          >
            <Box
              sx={{
                borderRadius: "50%",
                width: { xs: 70, md: 110, xl: 150 },
                height: { xs: 70, md: 110, xl: 150 },
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                zIndex: 2,
                top: { xs: "5%", md: "-20%", xl: "-20%" },
                // top: "-88px",
                left: { xs: "calc(50% - 410px)", md: "calc(50% - 410px)", xl: "calc(50% - 525px)" },
              
       
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
                height: { xs: 350, md: 350, xl: 500 },
                width: { xs: 300, md: 320, xl: 450 },
              }}
            >
              <Texting
                sx={{
                  fontSize: { xs: 20, md: 20, xl: 26 },
                  color: "#363434",
                  marginBottom: 2,
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
                width: { xs: 70, md: 110, xl: 150 },
                height: { xs: 70, md: 110, xl: 150 },
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                zIndex: 2,

                top: { xs: "5%", md: "-20%", xl: "-20%" }, 
           
                // top: "-88px",

                left: { xs: "calc(50% - 150px)", md: "calc(50% - -300px)", xl: "calc(50% - -380px)" },
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
                height: { xs: 350, md: 350, xl: 500 },
                width: { xs: 300, md: 320, xl: 450 },
              }}
            >
              <Texting
                sx={{
                  fontSize: { xs: 20, md: 20, xl: 26 },
                  color: "#363434",
                  marginBottom: 2,
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
          <Box
            sx={{
              marginY: isTablet ? 12 : { xs: 6, md: 12, xl: 25 },
              display: "flex",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#363434",
                display: "flex",
                flexDirection: "row",
                maxHeight: { xs: 250, md: 150, xl: 300 },
                padding: { xs: 4, md: 4 },
                justifyContent: { xs: "space-bewtween", md: "space-evenly" },
                width: "100%",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 1 / 2,
                }}
              >
                <Texting
                  sx={{
                    fontSize: { xs: 30, md: 30, xl: 45 },
                    color: "#B9DCD2",
                  }}
                >
                  Rubrik
                </Texting>
                <TextingATYP
                  sx={{
                    color: "#F7F7F7",
                    fontSize: isTablet ? 16 : { xs: 14, md: 16, xl: 25 },
                    maxWidth: isTablet ? "70%" : { xs: "100%", md: "70%" },
                  }}
                >
                  No worries - vi är ju en kommunikationsbyrå. Vi är bra på
                  annat också. Slå en pling, eller släng iväg ett mejl och
                  berätta om dina drömmar och visioner. Vi är helt inne på att
                  förverkliga dom!
                </TextingATYP>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <img
                  src="https://i.imgur.com/c81JL2G.jpeg"
                  alt="two girls"
                  height={
                    isMobile && !isTablet
                      ? 250
                      : isTablet
                      ? 350
                      : isBigScreen
                      ? 400
                      : 320
                  }
                  width={
                    isMobile && !isTablet
                      ? 150
                      : isTablet
                      ? 200
                      : isBigScreen
                      ? 270
                      : 170
                  }
                  style={{
                    position: "absolute",
                    bottom:
                      isMobile && !isTablet
                        ? "10%"
                        : isTablet
                        ? "-15%"
                        : isBigScreen
                        ? "-20%"
                        : "-10%",
                    right:
                      isMobile && !isTablet
                        ? "-15%"
                        : isTablet
                        ? "10%"
                        : isBigScreen
                        ? "10%"
                        : "15%",
                    transform: "translateX(-50%)",
                    height: "auto",
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: isTablet ? "none" : { xs: "none", md: "flex" },
                  flexDirection: "column",
                }}
              >
                <img
                  src="https://i.imgur.com/zYSSjI8.png"
                  alt="strings in different colors"
                  //   height={320}
                  width={isBigScreen ? 1000 : 650}
                  style={{
                    position: "absolute",
                    bottom: isBigScreen ? "-155%" : "-135%",
                    right: isBigScreen ? "-35%" : "-34%",
                    transform: "translateX(-50%) rotate(15deg)",
                    height: "auto",
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box
            id="kontakt"
            sx={{
              display: "flex",
              height: "100%",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 3, md: 4 },
              paddingTop: { xs: 10, md: 10 },
              paddingBottom: 5,
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "80%" },
                height: isBigScreen ? 600 : 420,
                backgroundImage: `url("https://i.imgur.com/pHn9D5k.jpeg")`,
                backgroundSize: "cover",
                backgroundPosition: "center 25%",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                color: "white",
                marginLeft: { xs: 0, md: 8 },
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
                }}
              >
                <Texting sx={{ fontSize: { xs: 20, md: 30, xl: 45 } }}>
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
                width: { xs: "100%", md: "80%" },
                height: isBigScreen ? 600 : 420,
                backgroundImage: `url("https://i.imgur.com/IDFZknK.jpeg")`,
                backgroundSize: "cover",
                backgroundPosition: "center 40%",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                color: "white",
                marginRight: { xs: 2, md: 8 },
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
                }}
              >
                <Texting sx={{ fontSize: { xs: 20, md: 30, xl: 45 } }}>
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
        </Box>
      </Box>
    </Box>
  );
}
