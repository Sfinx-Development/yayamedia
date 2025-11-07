import { Box } from "@mui/material";
import Footer from "../components/Footer";
import { isMobile } from "../components/GreyComponent";
import InstagramGrid from "../components/InstagramGrid";
import MobileFooter from "../components/MobileFooter";
import NextCase from "../components/NextCase";
import ParallaxImg from "../components/ParallaxImg";
import SleipnerUppdrag from "../components/SleipnerUppdrag";
import Wave from "../components/Wave";
import HelmetWrapper from "../components/HelmetWrapper";

//RESPOINSIVT STOR SKÄRM
export default function SleipnerProject() {
  return (
     <>
      <HelmetWrapper
        title="Sleipner – Case | YayaMedia"
        description="Branding, webb och design för Sleipner. YayaMedia skapade en stark visuell identitet och digital närvaro som speglar varumärkets kraft och elegans."
        url="https://www.yayamedia.se/case/sleipner"
        image="https://www.yayamedia.se/og/case-sleipner-1200x630.jpg"
        ogType="article"
        breadcrumbs={[
          { name: "Hem", url: "https://www.yayamedia.se/" },
          { name: "Case", url: "https://www.yayamedia.se/case" },
          { name: "Sleipner", url: "https://www.yayamedia.se/case/sleipner" },
        ]}
      />
    <Box
       component="main"
        aria-label="Huvudinnehåll: Case Sleipner"
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
      <ParallaxImg
        image="https://i.imgur.com/ADTyziN.jpeg"
        bgPosition={{
          xs: "20% 150%",
          sm: "20% 75%",
          md: "20% 67%",
          xl: "20% 75%",
        }} // ← flyttar bilden uppåt
        bgSize="160%"
      />
      <Box sx={{ width: "100%", position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            paddingY: { xs: 40, md: 10 },
            zIndex: 3,
          }}
        >
          <Wave />
          <Box
            sx={{
              backgroundColor: "#f8f8f8",
              marginTop: { xs: -2, xl: -25 },
              position: "absolute",
              width: "100%",
              zIndex: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SleipnerUppdrag />
            <InstagramGrid />
            <NextCase />

            {isMobile ? <MobileFooter /> : <Footer />}
          </Box>
        </Box>
      </Box>
    </Box>
    </>
  );
}
