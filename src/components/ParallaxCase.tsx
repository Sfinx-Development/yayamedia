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

  const caseImages = [
    "https://i.imgur.com/mB9ABMS.png",
    "https://i.imgur.com/750qs63.jpeg",
    "https://i.imgur.com/naScTZI.png",
    "https://i.imgur.com/XZagv20.png",
    "https://i.imgur.com/AWAvHlA.png",
    "https://i.imgur.com/RD2AlkJ.png",
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
                pb: { xs: 6, md: 12 },
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
                  Uppdrag
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
              //   mt: { xs: 2, md: 4 },
              mb: { xs: 4, md: 16 },
            }}
          >
            {caseImages.map((src, index) => (
              <Box
                key={index}
                component="img"
                onClick={() =>
                  window.open(
                    "https://instagram.com/sleipnertandvarden/",
                    "_blank"
                  )
                }
                src={src}
                alt={`Instagram bild ${index + 1}`}
                sx={{
                  width: "100%",
                  aspectRatio: "1 / 1", // gör dem fyrkantiga
                  objectFit: "cover",
                  cursor: "pointer",
                  borderRadius: 0,
                  display: "block",
                }}
              />
            ))}
          </Box>

          {isMobile ? <MobileFooter /> : <Footer />}
        </Box>
      </Box>
    </Box>
  );
}
