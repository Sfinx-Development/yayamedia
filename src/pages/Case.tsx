import { Box } from "@mui/material";
import BlueComponent from "../components/BlueComponent";
import CookieBanner from "../components/CookieBanner";
import ParallaxCase from "../components/ParallaxCase";

export default function CasePage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        padding: 0,
        margin: 0,
        overflowX: "hidden",
        width: "100%",
        alignItems: "start",
        flexGrow: 1,
      }}
    >
      <CookieBanner />
      <BlueComponent />
      {/* ParallaxWave kommer att skrolla upp direkt efter PinkComponent */}
      <Box sx={{ width: "100%", position: "relative" }}>
        {/* MarginTop är nu justerat för att matcha höjden på PinkComponent */}
        <ParallaxCase />
      </Box>
    </Box>
  );
}
