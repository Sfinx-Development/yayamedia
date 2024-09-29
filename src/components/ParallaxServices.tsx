import { Box } from "@mui/material";
import ConceptDevelopment from "./ConceptDevelopment";
import PaketScroll from "./PaketScroll";
import Partners from "./Partners";
import Wave from "./Wave";

export default function ParallaxServices() {
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
          paddingY: { xs: 30, md: 20 },
          zIndex: 3,
        }}
      >
        <Wave />
        <Box
          sx={{
            backgroundColor: "#F7F7F7",
            marginTop: -10,
            position: "absolute",
            width: "100%",
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <PaketScroll />
          <ConceptDevelopment />
          <Partners />
        </Box>
      </Box>
    </Box>
  );
}
