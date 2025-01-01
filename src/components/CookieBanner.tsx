import { Box, Button, Link, Typography } from "@mui/material";
import { useEffect, useState } from "react";

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
    window.location.reload();
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#222",
        color: "#fff",
        zIndex: 9999,
        textAlign: "left",
        padding: { xs: "1rem", md: "1.5rem" },
        boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "flex-start", md: "center" },
        gap: { xs: "1rem", md: "2rem" },
      }}
    >
      <Typography
        variant="body2"
        sx={{
          fontSize: { xs: "0.85rem", md: "1rem" },
          lineHeight: "1.6",
          maxWidth: { xs: "95%", md: "70%" },
          marginBottom: { xs: "0.5rem", md: "0" },
        }}
      >
        Vi använder cookies för att förbättra din upplevelse på vår hemsida.
        Detta inkluderar analys av trafik via Google Analytics. Genom att klicka
        på
        <Typography
          component="span"
          sx={{
            fontWeight: "bold",
            color: "#F3D9DF",
            marginLeft: "4px",
          }}
        >
          "Acceptera"
        </Typography>
        , ger du oss tillåtelse att använda cookies.{" "}
        <Link
          href="https://cookieinformation.com/sv/vad-ar-en-cookie/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#F3D9DF",
            textDecoration: "underline",
            "&:hover": {
              textDecoration: "none",
            },
          }}
        >
          Läs mer här
        </Link>
        .
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: "1rem",
          justifyContent: { xs: "center" },
          width: { xs: "90%", md: "auto" },
        }}
      >
        <Button
          aria-label="Acceptera Cookies"
          onClick={handleAccept}
          variant="contained"
          sx={{
            backgroundColor: "#363434",
            color: "#F7F7F7",
            borderRadius: "8px",
            padding: "0.5rem 1.5rem",
            textTransform: "none",
            fontSize: { xs: "0.9rem", md: "1rem" },
            width: { xs: "100%", md: "auto" },
            "&:hover": {
              background: "linear-gradient(to top, #EDC1D0, #F3D9DF)",
            },
          }}
        >
          Acceptera
        </Button>
        <Button
          aria-label="Neka Cookies"
          onClick={handleDecline}
          variant="outlined"
          sx={{
            borderColor: "#F3D9DF",
            color: "#F3D9DF",
            borderRadius: "8px",
            padding: "0.5rem 1.5rem",
            textTransform: "none",
            fontSize: { xs: "0.9rem", md: "1rem" },
            width: { xs: "100%", md: "auto" },
            "&:hover": {
              backgroundColor: "rgba(255, 165, 0, 0.1)",
              borderColor: "#F3D9DF",
            },
          }}
        >
          Avvisa
        </Button>
      </Box>
    </Box>
  );
};

export default CookieBanner;
