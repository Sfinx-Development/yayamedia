import { Box } from "@mui/material";
import GreyComponent from "../components/GreyComponent";
import ParallaxServices from "../components/ParallaxServices";

export default function Services() {
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
      <GreyComponent />
      <Box sx={{ width: "100%", position: "relative" }}>
        <ParallaxServices />
      </Box>
    </Box>
  );
}
