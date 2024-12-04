import { Box, Button, Link, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { isTablet } from "./GreyComponent";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
    window.location.reload(); // Ladda om sidan för att aktivera Google Analytics
  };

  if (!showBanner) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#222", // Mörk bakgrund
        color: "#fff", // Vit textfärg
        // padding: "1rem",
        zIndex: 9999,
        textAlign: "center",
        boxShadow: "0px -2px 10px rgba(0,0,0,0.2)",
      }}
    >
      <Typography variant="body2">
        Vi använder Cookies för att förbättra din upplevelse på vår hemsida, det
        inkluderar att analysera trafik till vår sida via Google Analytics. När
        du klickar på "Acceptera", ger du oss tillåtelse att använda Cookies.
        <Button
          variant="text"
          component={Link}
          href="https://cookieinformation.com/sv/vad-ar-en-cookie/"
          sx={{
            marginLeft: "8px",
            color: "#ffffff", // Vit textfärg
            textDecoration: "underline", // Lägg till ett streck under texten
            "&:hover": {
              backgroundColor: "transparent", // Ingen bakgrundsfärg vid hover
              textDecoration: "none", // Ta bort strecket vid hover
            },
          }}
        >
          Läs mer
        </Button>
      </Typography>
      <Box sx={{ marginTop: "0.5rem" }}>
        <Button
          onClick={handleAccept}
          variant="contained"
          sx={{
            backgroundColor: "#363434",
            marginTop: 3,
            maxWidth: isTablet ? "60%" : "40%",
            color: "#F7F7F7",
            borderRadius: 2,
            paddingY: { md: 1, xl: 2 },
            textTransform: "none",
            "&:hover": {
              background: "linear-gradient(to top, #EDC1D0, #F3D9DF)", // Färgen för hover-effekten
            },
            "&:active": {
              background: "linear-gradient(to top, #EDC1D0, #F3D9DF)", // Färgen när knappen är aktiv (om nödvändigt)
            },
          }}
        >
          <Typography sx={{ fontSize: 18 }}>Acceptera</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default CookieBanner;
