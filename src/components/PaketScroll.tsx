// import { Box } from "@mui/material";
// import { useRef, useState } from "react";
// import Draggable, { DraggableData, DraggableEvent } from "react-draggable"; // Import DraggableEvent
// import GraphicProfile from "./GraphicProfile";
// import { isMobile, isTablet } from "./GreyComponent";
// import SocialMedia from "./SocialMedia";
// import Webdesign from "./Webdesign";

// export default function PaketScroll() {
//   const scrollRef = useRef<HTMLDivElement | null>(null); // Skapa en ref för scroll-behållaren
//   const [dragging, setDragging] = useState(false);

//   const handleDragStart = () => {
//     setDragging(true); // Sätt dragging till true vid start
//   };

//   const handleDragStop = (e: DraggableEvent, data: DraggableData) => {
//     // Change MouseEvent to DraggableEvent
//     setDragging(false); // Återställ dragging
//     console.log(e);
//     if (scrollRef.current) {
//       // Justera scroll-positionen efter dragning
//       const newScrollLeft = scrollRef.current.scrollLeft - data.deltaX;

//       // Kontrollera att vi inte går över gränserna
//       const maxScrollLeft =
//         scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

//       // Sätt scrollLeft till en värde inom tillåten gräns
//       scrollRef.current.scrollLeft = Math.max(
//         0,
//         Math.min(newScrollLeft, maxScrollLeft)
//       );
//     }
//   };

//   return (
//     <Box
//       ref={scrollRef}
//       sx={{
//         display: "flex",
//         flexDirection: "row",
//         overflowX: "scroll",
//         cursor: dragging ? "grabbing" : "grab",
//         width: "100%",
//       }}
//       onMouseDown={(e) => e.preventDefault()}
//     >
//       {isMobile || isTablet ? (
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "row",
//           }}
//         >
//           <SocialMedia />
//           <Webdesign />
//           <GraphicProfile />
//         </Box>
//       ) : (
//         <Draggable axis="x" onStart={handleDragStart} onStop={handleDragStop}>
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "row",
//             }}
//           >
//             <SocialMedia />
//             <Webdesign />
//             <GraphicProfile />
//           </Box>
//         </Draggable>
//       )}
//     </Box>
//   );
// }
import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { DraggableData, DraggableEvent } from "react-draggable";
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

  const handleDragStart = () => setDragging(true);

  const handleDragStop = (_e: DraggableEvent, data: DraggableData) => {
    setDragging(false);
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= data.deltaX;

      const scrollArea = scrollRef.current;
      const scrollWidth = scrollArea.scrollWidth;
      const clientWidth = scrollArea.clientWidth;
      const threshold = scrollWidth / 4;

      if (scrollArea.scrollLeft < threshold) {
        scrollArea.scrollLeft += scrollWidth / 2;
      } else if (
        scrollArea.scrollLeft >
        scrollWidth - threshold - clientWidth
      ) {
        scrollArea.scrollLeft -= scrollWidth / 2;
      }
    }
  };
  // const handleDrag = (_: DraggableEvent, data: DraggableData) => {
  //   if (scrollRef.current) {
  //     scrollRef.current.scrollLeft -= data.deltaX;
  //   }
  // };

  return (
    <Box
      ref={scrollRef}
      sx={{
        width: "100%",
        overflowX: "auto", // 👈 alltid auto
        cursor: dragging ? "grabbing" : "grab",
        userSelect: "none",
        scrollbarWidth: "thin",
        "&::-webkit-scrollbar": { height: 6 },
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
