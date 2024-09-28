import { Box } from "@mui/material";
import ParallaxWave from "../components/ParallaxWave";
import PinkComponent from "../components/PinkComponent";

export default function Index() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 0,
        margin: 0,
        overflowX: "hidden",
        width: "100%",
        alignItems: "start",
        flexGrow: 1,
      }}
    >
      <PinkComponent />
      {/* ParallaxWave kommer att skrolla upp direkt efter PinkComponent */}
      <Box sx={{ width: "100%", position: "relative", marginTop: "500px" }}>
        {/* MarginTop är nu justerat för att matcha höjden på PinkComponent */}
        <ParallaxWave />
      </Box>
      <PinkComponent />
    </Box>
  );
}
