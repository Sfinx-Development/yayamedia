import { Box } from "@mui/material";
import CookieBanner from "../components/CookieBanner";
import ParallaxWave from "../components/ParallaxINDEX";
import PinkComponent from "../components/PinkComponent";
import HelmetWrapper from "../components/HelmetWrapper";

export default function Index() {
  return (
    <>
      <HelmetWrapper
        title="YayaMedia – Webbutveckling, SEO & Design med prestanda i fokus"
        description="Vi på YayaMedia skapar snabba, SEO-optimerade och tillgängliga webbar. Design, innehåll och strategi som ger verkliga resultat."
        url="https://www.yayamedia.se/"
        image="https://www.yayamedia.se/og/home-1200x630.jpg"
        ogType="website"
        breadcrumbs={[{ name: "Hem", url: "https://www.yayamedia.se/" }]}
      />
      <Box
        component="main"
        aria-label="Huvudinnehåll på startsidan"
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
        <PinkComponent />
        
        {/* ParallaxWave kommer att skrolla upp direkt efter PinkComponent */}
        <Box
          sx={{ width: "100%", position: "relative" }}
          aria-label="Parallaxsektion med vågdesign"
        >
          {/* MarginTop är nu justerat för att matcha höjden på PinkComponent */}
          <ParallaxWave />
        </Box>
      </Box>
    </>
  );
}
