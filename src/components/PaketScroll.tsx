import { Box } from "@mui/material";
import GraphicProfile from "./GraphicProfile";
import SocialMedia from "./SocialMedia";
import Webdesign from "./Webdesign";

export default function PaketScroll() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        overflowX: "scroll",
      }}
    >
      <SocialMedia />
      <Webdesign />
      <GraphicProfile />
    </Box>
  );
}
