import { Box } from "@mui/material";
import ParallaxYaya from "../components/ParallaxYaya";
import YellowComponent from "../components/YellowComponent";

export default function Yaya() {
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
      <YellowComponent />
      <Box sx={{ width: "100%", position: "relative" }}>
        <ParallaxYaya />
      </Box>
    </Box>
  );
}
