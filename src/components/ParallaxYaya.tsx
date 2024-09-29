import { Box, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Partners from "./Partners";
import Wave from "./Wave";

export default function ParallaxYaya() {
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
  const navigate = useNavigate();
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
                  fontSize: { xs: 20, md: 30 },
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
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                borderRadius: "50%",
                width: 100,
                height: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                zIndex: 2,
                left: { xs: 50, md: 200 },
                top: { xs: 110, md: 390 },
              }}
            >
              <img
                src="https://i.imgur.com/j10A3GX.png"
                alt="guy dancing on hands"
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
                borderRadius: 2,
                flex: 1 / 3,
              }}
            >
              <Texting sx={{ fontSize: 20, color: "#363434", marginBottom: 2 }}>
                Såhär säger Emelie - om Åsa
              </Texting>
              <TextingATYP>
                Och lektioner i kommunikation, förstås. Ett fenomen som kan få
                vilket barn som helst att på en millisekund gå från pirrigt
                förväntansfull till besviken. Vi minimerar helt enkelt risken
                för besvikelse, och erbjuder bara hårda paket på Yaya.
                Innehållet då? Det bestämmer du själv. Och lektioner i
                kommunikation, förstås. Ett fenomen som kan få vilket barn som
                helst att på en millisekund gå från pirrigt förväntansfull till
                besviken. Vi minimerar helt enkelt risken för besvikelse, och
                erbjuder bara hårda paket på Yaya. Innehållet då? Det bestämmer
                du själv.
              </TextingATYP>
            </Box>
            <Box
              sx={{
                borderRadius: "50%",
                width: 100,
                height: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                zIndex: 2,
                right: { xs: 50, md: 200 },
                top: { xs: 110, md: 390 },
              }}
            >
              <img
                src="https://i.imgur.com/KcCeP5O.png"
                alt="guy dancing on hands"
                style={{
                  borderRadius: "50%",
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
            <Box
              sx={{
                backgroundColor: "#B9DCD2",
                padding: 5,
                borderRadius: 2,
                position: "relative",
                flex: 1 / 3,
              }}
            >
              <Texting sx={{ fontSize: 20, color: "#363434", marginBottom: 2 }}>
                Såhär säger Åsa - om Emelie
              </Texting>
              <TextingATYP>
                Och lektioner i kommunikation, förstås. Ett fenomen som kan få
                vilket barn som helst att på en millisekund gå från pirrigt
                förväntansfull till besviken. Vi minimerar helt enkelt risken
                för besvikelse, och erbjuder bara hårda paket på Yaya.
                Innehållet då? Det bestämmer du själv. Och lektioner i
                kommunikation, förstås. Ett fenomen som kan få vilket barn som
                helst att på en millisekund gå från pirrigt förväntansfull till
                besviken. Vi minimerar helt enkelt risken för besvikelse, och
                erbjuder bara hårda paket på Yaya. Innehållet då? Det bestämmer
                du själv.
              </TextingATYP>
            </Box>
          </Box>
          <Box sx={{ marginY: 12, display: "flex" }}>
            <Box
              sx={{
                backgroundColor: "#363434",
                display: "flex",
                flexDirection: "row",
                maxHeight: 150,
                padding: 4,
                justifyContent: "space-evenly",
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
                <Texting sx={{ fontSize: 30, color: "#B9DCD2" }}>
                  Rubrik
                </Texting>
                <TextingATYP
                  sx={{ color: "#F7F7F7", fontSize: 16, maxWidth: "70%" }}
                >
                  No worries - vi är ju en kommunikationsbyrå. Vi är bra på
                  annat också. Slå en pling, eller släng iväg ett mejl och
                  berätta om dina drömmar och visioner. Vi är helt inne på att
                  förverkliga dom!
                </TextingATYP>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <img
                  src="https://i.imgur.com/3OPFh2Q.jpeg"
                  alt="two girls"
                  height={320}
                  width={170}
                  style={{
                    position: "absolute",
                    bottom: "-10%",
                    right: "15%",
                    transform: "translateX(-50%)",
                    height: "auto",
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <img
                  src="https://i.imgur.com/mtpsyXG.png"
                  alt="strings in different colors"
                  //   height={320}
                  width={650}
                  style={{
                    position: "absolute",
                    bottom: "-135%",
                    right: "-34%",
                    transform: "translateX(-50%) rotate(15deg)",
                    height: "auto",
                  }}
                />
              </Box>
            </Box>
          </Box>
          {/* bilderna till vardera med kontakt uppgifeter */}
          <Box
            sx={{
              display: "flex",
              height: "100%",
              flexDirection: "row",
              gap: 4,
              marginTop: 10,
            }}
          >
            <Box
              sx={{
                width: "80%",
                height: 300,
                backgroundImage: `url("https://i.imgur.com/Vi6rD7y.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                color: "white",
                marginLeft: { xs: 2, md: 8 },
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
                <Texting sx={{ fontSize: { xs: 20, md: 30 } }}>
                  Emelie Svernhed
                </Texting>
                <TextingATYP>COPYWRITER/CREATIVE DIRECTOR</TextingATYP>
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
                  <TextingATYP>emelie@yayamedia.se</TextingATYP>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: "80%",
                height: "auto",
                backgroundImage: `url("https://i.imgur.com/vjuekTb.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
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
                <Texting sx={{ fontSize: { xs: 20, md: 30 } }}>
                  Åsa Kjellberg
                </Texting>
                <TextingATYP>ART DIRECTOR/PROJEKTLEDARE</TextingATYP>
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
                  <TextingATYP>asa@yayamedia.se</TextingATYP>
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
