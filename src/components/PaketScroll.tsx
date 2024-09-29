import { Box } from "@mui/material";
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
    </Box>
  );
}
