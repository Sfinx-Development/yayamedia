import { Box } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import GreyComponent from "../components/GreyComponent";
import HelmetWrapper from "../components/HelmetWrapper";
import ParallaxServices from "../components/ParallaxServices";

const serviceMeta = {
  webbdesign: {
    title: "Webbdesign i Borås | YayaMedia",
    description:
      "Modern webbdesign i Borås för företag som vill stärka sitt varumärke, nå fler kunder och skapa en bättre digital upplevelse.",
    scrollTo: "webbdesign",
  },

  "sociala-medier": {
    title: "Sociala medier i Borås | YayaMedia",
    description:
      "Hjälp med sociala medier i Borås. Vi skapar innehåll, strategier och kommunikation som stärker ert varumärke och når rätt målgrupp.",
    scrollTo: "socialamedier",
  },

  konceptutveckling: {
    title: "Konceptutveckling i Borås | YayaMedia",
    description:
      "Konceptutveckling för företag i Borås. Vi hjälper er att utveckla idéer, kampanjer och kommunikation som skapar ett starkare varumärke.",
    scrollTo: "konceptutveckling",
  },

  "grafisk-profil": {
    title: "Grafisk profil i Borås | YayaMedia",
    description:
      "Grafisk profil och visuell identitet för företag i Borås. Vi skapar varumärken med färg, form och uttryck som känns genomtänkta och professionella.",
    scrollTo: "grafisk-profil",
  },
};

export default function Services() {
  const { serviceSlug } = useParams();

  useEffect(() => {
    console.log("serviceSlug:", serviceSlug);

    if (!serviceSlug) return;

    const meta = serviceMeta[serviceSlug as keyof typeof serviceMeta];

    console.log("meta:", meta);

    if (!meta) return;

    setTimeout(() => {
      const el = document.getElementById(meta.scrollTo);

      console.log("scrollTo:", meta.scrollTo);
      console.log("element:", el);

      el?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 1000);
  }, [serviceSlug]);

  const currentMeta = serviceMeta[serviceSlug as keyof typeof serviceMeta] ?? {
    title: "Tjänster | YayaMedia",
    description: "Webbdesign, sociala medier, grafisk profil och podcast.",
  };

  return (
    <>
      <HelmetWrapper
        title={currentMeta.title}
        description={currentMeta.description}
        url={
          serviceSlug
            ? `https://yayamedia.se/tjanster/${serviceSlug}`
            : "https://yayamedia.se/tjanster"
        }
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
          sx={{
            width: "100%",
            position: "relative",
            backgroundColor: "#F7F7F7",
          }}
          aria-label="Parallaxsektion med tjänster"
        >
          <ParallaxServices />
        </Box>
      </Box>
    </>
  );
}
