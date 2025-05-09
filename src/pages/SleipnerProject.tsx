import SleipnerUppdrag from "../components/SleipnerUppdrag";
import InstagramGrid from "../components/InstagramGrid";
import Footer from "../components/Footer";
import ParallaxImg from "../components/ParallaxImg";
import { Box } from "@mui/material";

export default function SleipnerProject() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 0,
        margin: 0,
        backgroundColor: "#F7F7F7",
        overflowX: "hidden",

        width: "100%",
        alignItems: "start",
        flexGrow: 1,
      }}
    >
      <ParallaxImg
        image="https://i.imgur.com/ADTyziN.jpeg"
        bgPosition="20% 67%" // ← flyttar bilden uppåt
        bgSize="160%"
      />

      <>
        <SleipnerUppdrag />
        <InstagramGrid />
        <Footer />
      </>
    </Box>
  );
}
