import { Box, Button, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Wave from "./Wave";

export default function ParallaxWave() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Texting = styled(Typography)`
    font-family: "H2", sans-serif;
    font-variation-settings: "wght" 300;
  `;

  const TextingATYP = styled(Typography)`
    font-family: "AtypRegularVariable", sans-serif;
    font-variation-settings: "wght" 300;
  `;

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh", // Höjd för att täcka hela skärmen
        overflowX: "hidden",
        backgroundColor: "#F7F7F7", // Bakgrundsfärg under vågorna
      }}
    >
      {/* Innehåll */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          paddingY: 10,
          //   height: "100%",
          zIndex: 3, // Se till att in
        }}
      >
        <Wave />
        <Box
          sx={{
            backgroundColor: "#F7F7F7",
            margin: 0,
            // height: "100%",
            position: "absolute",
            // padding: 2,
            // height: "100%",
            width: "100%",
            //   height: "100%",
            zIndex: 3, // Se till att in

            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#F7F7F7",
              margin: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              // marginLeft: 15,
              // flex: 1,
              // display: "flex",
              // flexDirection: "column",
              // flex: 1,
              // alignItems: "end",
            }}
          >
            <Texting sx={{ fontSize: 45, color: "#363434", marginBottom: 2 }}>
              Slut på moves?
            </Texting>
            <TextingATYP
              sx={{
                width: 450,
              }}
            >
              Det brusar högt där ute. Att hitta sin unika rytm bland tusentals
              andra kan vara svårt - vi vet. Men vi vet också hur man skapar
              autentiskt innehåll. Du vet, sånt vi alla faktiskt frivilligt
              konsumerar. Ibland är allt som behövs ett enkelt klick. Andra
              gånger en skarp klack. Och för vissa, ett kraftfullt boom för att
              verkligen bryta igenom bruset.
            </TextingATYP>
            <TextingATYP
              sx={{
                width: 450,
                marginTop: 2,
              }}
            >
              Oavsett hur du för dig just nu kan du räkna med oss! En
              fullständig koreografi eller ett par väl valda moves? Upp till
              dig! Vi erbjuder paketlösningar för det mesta, och anpassar oss
              alltid efter dina behov.
            </TextingATYP>
            <Button
              sx={{
                backgroundColor: "#363434",
                marginTop: 3,
                maxWidth: "40%",
                color: "#F7F7F7",
                borderRadius: 2,
                paddingY: 1,
                textTransform: "none",
              }}
            >
              <Texting sx={{ fontSize: 18 }}>Våra tjänster</Texting>
            </Button>
          </Box>
          <Box sx={{ marginTop: 1 }}>
            <video width="640" height="400" autoPlay loop muted>
              <source src="https://i.imgur.com/5yECUKT.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
