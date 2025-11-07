import { Box } from "@mui/material";
import GreyComponent from "../components/GreyComponent";
import ParallaxServices from "../components/ParallaxServices";
import HelmetWrapper from "../components/HelmetWrapper";

export default function Services() {
  return (
     <>
      <HelmetWrapper
        title="Tjänster – YayaMedia | Webb, SEO, Design & Innehåll"
        description="Upptäck YayaMedias tjänster inom webbutveckling, SEO, design och innehåll. Skräddarsydda lösningar som stärker ditt varumärke digitalt."
        url="https://www.yayamedia.se/tjanster"
        image="https://www.yayamedia.se/og/services-1200x630.jpg"
        ogType="website"
        breadcrumbs={[
          { name: "Hem", url: "https://www.yayamedia.se/" },
          { name: "Tjänster", url: "https://www.yayamedia.se/tjanster" },
        ]}
      />
    <Box
      component="main"
        aria-label="Huvudinnehåll: Våra tjänster"
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
      <GreyComponent />
      <Box
        sx={{ width: "100%", position: "relative", backgroundColor: "#F7F7F7" }}
         
          aria-label="Parallaxsektion med tjänster"
        >
        <ParallaxServices />
      </Box>
    </Box>
    </>
  );
}
