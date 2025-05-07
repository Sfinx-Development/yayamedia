import { Box } from "@mui/material";
import Wave from "./Wave";

const ParallaxImg = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        
      }}
    >
      {/* Bakgrundsbilden – FIXERAD */}
      <Box
          //  width: "100%",
          //  backgroundColor: "#363434",
          //  display: "flex",
          //  justifyContent: "start",
          //  // paddingY: isTablet ? 30 : { xs: 1, md: 4, xl: 0 },
          //  paddingX: { xs: 1 },
          //  alignItems: { xs: "center", xl: "start" },
          //  position: "fixed",
          //  zIndex: 2,
          //  height: "100%",
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundImage: "url('https://i.imgur.com/pDMM8Je.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
        }}
      />

      {/* Vågen – rör sig uppåt vid scroll */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          paddingY: { xs: 40, md: 10 },
          zIndex: 2,
        }}
      >
        <Wave />
      </Box>
    </Box>
  );
};

export default ParallaxImg;
