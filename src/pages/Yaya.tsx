import { Box } from "@mui/material";
import ParallaxYaya from "../components/ParallaxYaya";
import YellowComponent from "../components/YellowComponent";
import HelmetWrapper from "../components/HelmetWrapper";

export default function Yaya() {
  return (
    <>
      <HelmetWrapper
        title="Om oss – YayaMedia | Kreativ byrå med hjärta och strategi"
        description="Lär känna YayaMedia – en liten byrå med stor passion för design, webb och kommunikation. Vi tror på nära samarbeten och kreativa lösningar som gör skillnad."
        url="https://www.yayamedia.se/om-oss"
        image="https://www.yayamedia.se/og/about-1200x630.jpg"
        ogType="website"
        breadcrumbs={[
          { name: "Hem", url: "https://www.yayamedia.se/" },
          { name: "Om oss", url: "https://www.yayamedia.se/om-oss" },
        ]}
      />
      <Box
        component="main"
        aria-label="Huvudinnehåll: Om YayaMedia"
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
    </>
  );
}
