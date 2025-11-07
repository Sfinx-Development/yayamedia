import { Box } from "@mui/material";
import OffertForm from "../components/OffertForm";
import { useLocation } from "react-router-dom";
import HelmetWrapper from "../components/HelmetWrapper";

// import HelmetWrapper from "../components/HelmetWrapper";

export default function Offert() {
    const location = useLocation();
  return (
    <>
      <HelmetWrapper
        title="Offert – YayaMedia | Kostnadsfri offert på webb & SEO"
        description="Få en kostnadsfri offert från YayaMedia. Vi hjälper dig med webbutveckling, SEO, design och strategi som ger resultat."
        url="https://www.yayamedia.se/offert"
        image="https://www.yayamedia.se/og/offert-1200x630.jpg"
        ogType="website"
        breadcrumbs={[
          { name: "Hem", url: "https://www.yayamedia.se/" },
          { name: "Offert", url: "https://www.yayamedia.se/offert" },
        ]}
      />

      <Box
       component="main"
        aria-label="Huvudinnehåll: Offertformulär"
        style={{
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
        {/* <OffertForm /> */}
        <Box
                sx={{ width: "100%", position: "relative", backgroundColor: "#F7F7F7" }}
              >
                <OffertForm key={JSON.stringify(location.state)} locationState={location.state} />

              </Box>
      </Box>
    </>
  );
}
