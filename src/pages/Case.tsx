import { Box } from "@mui/material";
import BlueComponent from "../components/BlueComponent";
import CookieBanner from "../components/CookieBanner";
import ParallaxCase from "../components/ParallaxCase";
import HelmetWrapper from "../components/HelmetWrapper";

export default function CasePage() {
  return (
    <>
      <HelmetWrapper
        title="Case – YayaMedia | Utvalda projekt & resultat"
        description="Se utvalda case från YayaMedia: webb, SEO, design och innehåll som presterar."
        url="https://www.yayamedia.se/case"
        image="https://www.yayamedia.se/og/case-1200x630.jpg"
        ogType="website"
        breadcrumbs={[
          { name: "Hem", url: "https://www.yayamedia.se/" },
          { name: "Case", url: "https://www.yayamedia.se/case" },
        ]}
      />

      <Box
        component="main"
        aria-label="Huvudinnehåll: Våra case och resultat"
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
        <Box
          sx={{ width: "100%", position: "relative" }}
          aria-label="Parallaxsektion med bilder från våra projekt"
        >
          {/* MarginTop är nu justerat för att matcha höjden på PinkComponent */}
          <ParallaxCase />
        </Box>
      </Box>
    </>
  );
}
