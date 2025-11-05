import { Box, styled, Typography, TypographyProps } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import Case from "./Case";
import Footer from "./Footer";
import { isTablet } from "./GreyComponent";
import MobileFooter from "./MobileFooter";
import Wave from "./Wave";

export default function ParallaxCase() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrollPosition, setScrollPosition] = useState(0);
  const isMobile = window.innerWidth <= 820;

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
  const navigate = useNavigate();
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

  const caseImages = [
    {
      src: "https://i.imgur.com/YXRP2MD.jpeg",
      label: "Swedteam",
      url: "/case/swedteam",
    },
    {
      src: "https://i.imgur.com/dKFIC1b.jpeg",
      label: "Pr Home/Svanefors",
      url: "/case/prhome&svanefors",
    },
    {
      src: "https://i.imgur.com/ZlM4ulM.jpeg",
      label: "Salusso",
      url: "/case/salusso",
    },
    {
      src: "https://i.imgur.com/ADTyziN.jpeg",
      label: "Sleipnertandvården",
      url: "/case/sleipner",
    },
    {
      src: "https://i.imgur.com/pDMM8Je.png",
      label: "Åsundsholm",
      url: "/case/asundsholm",
    },
    {
      src: "#363333",
      label: "Och det här får bli din plats",
      url: "",
    },
  ];

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
                width: "100%",
                backgroundColor: "#f8f8f8",
                display: "flex",
                justifyContent: "center",
                flexDirection: isTablet ? "row" : { xs: "column", md: "row" },
                marginTop: { xs: 10, md: 12, xl: 15 },
                paddingX: isTablet ? 2 : { xs: 2, md: 0 },
                pt: { xs: 10, md: 10, xl: 20 },
                // pb: { xs: 6, md: 12 },
                overflow: "visible",
                marginY: { xl: 15 },
                zIndex: 10,
              }}
            >
              <Box
                sx={{
                  width: { xs: "98%", md: "50%", xl: "100%" },
                  textAlign: "left",
                  // backgroundColor: "red",
                  ml: { xs: 2, md: -30, xl: 50 },
                  mr: { xs: 3 },
                  mt: isMobile ? -12 : { md: -23 },
                }}
              >
                <Texting
                  variant="h3"
                  sx={{ fontSize: { xs: 28, md: 36, xl: 48 } }}
                  fontWeight={400}
                  gutterBottom
                >
                  Case
                </Texting>

                <TextingATYP
                  variant="body1"
                  sx={{
                    marginTop: { xs: 2, md: 4 },
                    fontSize: isTablet ? 18 : { xl: 24 },
                  }}
                  //   paragraph
                >
                  Här hittar du case vi gärna skryter om.
                </TextingATYP>
                <TextingATYP
                  variant="body1"
                  sx={{
                    // marginTop: { xs: 2, md: 4 },
                    fontSize: isTablet ? 18 : { xl: 24 },
                  }}
                  paragraph
                >
                  Stora som små. .
                </TextingATYP>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                md: "repeat(2, 1fr)",
              },
              gap: 2, // avstånd mellan bilderna
              px: { xs: 2, md: 4 }, // padding åt sidorna så det inte går kant i kant
              mt: { xs: 2, md: 0 },
              mb: { xs: 4, md: 16 },
            }}
          >
            {caseImages.map((src, index) => {
              const isLast = index === caseImages.length - 1;
              const isSleipner = src.label == "Sleipnertandvården";

              return (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "1 / 1",
                    cursor: isLast ? "default" : "pointer",
                    overflow: "hidden",
                    backgroundColor: isLast ? "#363333" : "transparent",
                    display: "flex",
                    alignItems: isLast ? "center" : "unset",
                    justifyContent: isLast ? "center" : "unset",
                    textAlign: isLast ? "center" : "left",
                  }}
                  onClick={() => {
                    if (!isLast) {
                      navigate(src.url);
                    }
                  }}
                >
                  {!isLast && (
                    <>
                      <Box
                        component="img"
                        src={src.src}
                        alt={`Instagram bild ${index + 1}`}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                          transition: "transform 0.5s ease, filter 0.5s ease",
                          "&:hover": {
                            transform: "scale(1.08)",
                            filter: "brightness(1.15)",
                          },
                        }}
                      />

                      <Texting
                        variant="h3"
                        sx={{
                          fontSize: { xs: 18, md: 34, xl: 55 },
                          position: "absolute",
                          bottom: 12,
                          left: { xs: 10, md: 50 },
                          color: isSleipner ? "#363333" : "white",
                        }}
                        fontWeight={400}
                        gutterBottom
                      >
                        {src.label}
                      </Texting>
                    </>
                  )}

                  {isLast && (
                    <Texting
                      variant="h3"
                      sx={{
                        fontSize: { xs: 18, md: 38, xl: 55 },
                        color: isLast ? "rgba(185, 219, 209)" : "white",
                        px: 2,
                        lineHeight: 1.3,
                        width: isLast ? "50%" : "100%",
                      }}
                      fontWeight={400}
                    >
                      {src.label}
                    </Texting>
                  )}
                </Box>
              );
            })}
          </Box>

          {isMobile ? <MobileFooter /> : <Footer />}
        </Box>
      </Box>
    </Box>
  );
}
