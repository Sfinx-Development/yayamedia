import { Box } from "@mui/material";
import { useRef, useState } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable"; // Import DraggableEvent
import GraphicProfile from "./GraphicProfile";
import { isMobile, isTablet } from "./GreyComponent";
import SocialMedia from "./SocialMedia";
import Webdesign from "./Webdesign";

export default function PaketScroll() {
  const scrollRef = useRef<HTMLDivElement | null>(null); // Skapa en ref för scroll-behållaren
  const [dragging, setDragging] = useState(false);

  const handleDragStart = () => {
    setDragging(true); // Sätt dragging till true vid start
  };

  const handleDragStop = (e: DraggableEvent, data: DraggableData) => {
    // Change MouseEvent to DraggableEvent
    setDragging(false); // Återställ dragging
    console.log(e);
    if (scrollRef.current) {
      // Justera scroll-positionen efter dragning
      const newScrollLeft = scrollRef.current.scrollLeft - data.deltaX;

      // Kontrollera att vi inte går över gränserna
      const maxScrollLeft =
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

      // Sätt scrollLeft till en värde inom tillåten gräns
      scrollRef.current.scrollLeft = Math.max(
        0,
        Math.min(newScrollLeft, maxScrollLeft)
      );
    }
  };

  return (
    <Box
      ref={scrollRef}
      sx={{
        display: "flex",
        flexDirection: "row",
        overflowX: "scroll",
        cursor: dragging ? "grabbing" : "grab",
        width: "100%",
      }}
      onMouseDown={(e) => e.preventDefault()}
    >
      {isMobile || isTablet ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <SocialMedia />
          <Webdesign />
          <GraphicProfile />
        </Box>
      ) : (
        <Draggable axis="x" onStart={handleDragStart} onStop={handleDragStop}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <SocialMedia />
            <Webdesign />
            <GraphicProfile />
          </Box>
        </Draggable>
      )}
    </Box>
  );
}
