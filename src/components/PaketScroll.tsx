
import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import GraphicProfile from "./GraphicProfile";
import Poddcast from "./Poddcast";
import SocialMedia from "./SocialMedia";
import Webdesign from "./Webdesign";

export default function PaketScroll() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [dragging, setDragging] = useState(false);
  const location = useLocation();

  const baseComponents = [
    <SocialMedia key="s" />,
    <Webdesign key="w" />,
    <GraphicProfile key="g" />,
    <Poddcast key="p" />,
  ];

  const repeated = Array.from({ length: 10 }, (_, i) =>
    baseComponents.map((Component, j) => (
      <Box key={`${i}-${j}`} sx={{ paddingRight: 15 }}>
        {Component}
      </Box>
    ))
  ).flat();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  useEffect(() => {
    if (scrollRef.current) {
      const middle = scrollRef.current.scrollWidth / 2;
      scrollRef.current.scrollLeft = middle;
    }
  }, []);



  return (
    <Box
      ref={scrollRef}
      sx={{
        width: "100%",
        overflowX: "auto", // 👈 alltid auto
        cursor: dragging ? "grabbing" : "grab",
        userSelect: "none",
        scrollbarWidth: "none", // 👈 döljer i Firefox
        "&::-webkit-scrollbar": {
          display: "none", // 👈 döljer i Chrome, Edge, Safari
        },
      }}
      onMouseDown={(e) => {
        setDragging(true);
        const startX = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
        const scrollLeft = scrollRef.current?.scrollLeft ?? 0;

        const onMouseMove = (moveEvent: MouseEvent) => {
          if (scrollRef.current) {
            const x = moveEvent.pageX - (scrollRef.current.offsetLeft ?? 0);
            scrollRef.current.scrollLeft = scrollLeft - (x - startX);
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
          width: "max-content",
        }}
      >
        {repeated}
      </Box>
    </Box>
  );
}
