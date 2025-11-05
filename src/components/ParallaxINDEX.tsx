/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Box,
  Button,
  styled,
  Typography,
  TypographyProps,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CaseScroller from "./CaseScroller";
import Footer from "./Footer";
import { isTablet } from "./GreyComponent";
import MobileFooter from "./MobileFooter";
import Partners from "./Partners";
import Poddcast from "./Poddcast";
import Wave from "./Wave";

export default function ParallaxWave() {
  // const [scrollPosition, setScrollPosition] = useState(0);
  const [dragging, setDragging] = useState(false);
  const isMobile = window.innerWidth <= 820;
  const navigate = useNavigate();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollPosition(window.scrollY);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  const podcastScrollRef = useRef<HTMLDivElement | null>(null);
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

  const buttonStyle = (bg: string, hover: string, textColor = "#F7F7F7") => ({
    backgroundColor: bg,
    color: textColor,
    width: isTablet ? "20%" : isMobile ? "35%" : "15%",
    borderRadius: 2,
    paddingY: isMobile ? 1 : 1.2,
    textTransform: "none",
    "&:hover": {
      backgroundColor: hover,
    },
  });

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
        <Box sx={{ backgroundColor: "#F7F7F7", width: "100%" }}>
          <Box
            ref={podcastScrollRef}
            sx={{
              overflowX: "auto",
              backgroundColor: "#F7F7F7",
              cursor: dragging ? "grabbing" : "grab",
              userSelect: "none",
              mt: { xs: -2, md: -2 },
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": { display: "none" },
              display: "flex",
              justifyContent: { xs: "start", md: "center" },
            }}
            onMouseDown={(e) => {
              setDragging(true);
              const startX =
                e.pageX - (podcastScrollRef.current?.offsetLeft ?? 0);
              const scrollLeft = podcastScrollRef.current?.scrollLeft ?? 0;

              const onMouseMove = (moveEvent: MouseEvent) => {
                if (podcastScrollRef.current) {
                  const x =
                    moveEvent.pageX -
                    (podcastScrollRef.current.offsetLeft ?? 0);
                  podcastScrollRef.current.scrollLeft =
                    scrollLeft - (x - startX);
                }
              };

              const onMouseUp = () => {
                setDragging(false);
                window.removeEventListener("mousemove", onMouseMove);
                window.removeEventListener("mouseup", onMouseUp);
              };

              window.addEventListener("mousemove", onMouseMove);
              window.addEventListener("mouseup", onMouseUp);
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                // gap: 4,
                // px: 4,
                width: "max-content",
                alignItems: "flex-start",
              }}
            >
              <Poddcast
                marginLeft={{ xs: 3, md: 4 }}
                topMargin={-2}
                paddingBottom={4}
                width={{ xs: 300, md: 320, xl: 540 }}
                fontSize={{ xl: 18 }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: { xs: 1, md: 4 },
              mb: { xs: 4 },
            }}
          >
            <Button
              fullWidth
              aria-label="Välj Klick"
              onClick={() => navigate("/tjanster#socialamedier")}
              sx={{
                ...buttonStyle(
                  "rgba(199, 213, 221)",
                  "rgba(199, 213, 221)",
                  "#363434"
                ),
                justifyContent: "center",
              }}
            >
              <Texting sx={{ pointerEvents: "none" }}>Fler tjänster</Texting>
            </Button>
          </Box>

          <Box
            sx={{
              flex: 1,
              backgroundColor: "#F7F7F7",
              width: "100%",
              textAlign: "center",
              pt: { xs: 4, md: 10 },
            }}
          >
            <Texting
              sx={{
                fontSize: { xs: 30, md: 40, xl: 55 },
                color: "#363434",
              }}
            >
              Case
            </Texting>
          </Box>

          <CaseScroller />
          <Partners />
          <Box sx={{ mt: { xs: 4, md: 10 } }}>
            {isMobile ? <MobileFooter /> : <Footer />}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
