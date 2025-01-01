import { Box, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DrawerComponent from "./DrawerComponent";

export default function Header(): JSX.Element {
  const navigate = useNavigate();
  const Heading = styled(Typography)`
    font-family: "atyp-bl-variable", sans-serif;
    font-variation-settings: "ital" 0, "opsz" 6, "wght" 280;
  `;
  const isMobile = window.innerWidth <= 820;
  const isBigScreen = window.innerHeight >= 1080;
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        (event as React.KeyboardEvent).key === "Tab"
      ) {
        return;
      }
      console.log("TOGGLE");
      setDrawerOpen(open);
    };

  useEffect(() => {
    console.log("ÖPPEN: ", drawerOpen);
  }, [drawerOpen]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        position: "fixed",
        height: 100,
        zIndex: 999,
        backgroundColor: "#F7F7F7",
        paddingY: { xs: 1, md: 1 }, // Mindre padding på små skärmar
      }}
      component={"header"}
    >
      {/* Logotyp */}
      <div
        style={{
          cursor: "pointer",
          paddingLeft: isMobile ? "20px" : isBigScreen ? "120px" : "80px",
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        <img
          src={"https://i.imgur.com/LNlGvx8.png"}
          alt="Yaya Media Logo"
          height={isMobile ? 40 : isBigScreen ? 75 : 60}
          style={{
            height: isMobile ? 40 : isBigScreen ? 75 : 60,
            objectFit: "contain",
            width: "auto",
          }}
        />
      </div>

      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          paddingY: { xs: 1, md: 3 },
          gap: { xs: 2, md: 6 },
          justifyContent: "center",
        }}
      >
        <Link
          style={{
            textDecoration: "none",
            color: "#363434",
          }}
          to="/yaya#kontakt"
        >
          <Heading sx={{ fontSize: { xs: 20, md: 30 }, color: "#363434" }}>
            Kontakt
          </Heading>
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "#363434",
          }}
          to="/yaya"
        >
          <Heading sx={{ fontSize: { xs: 20, md: 30 } }}>Yaya</Heading>
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "#363434",
          }}
          to="/#case"
        >
          <Heading sx={{ fontSize: { xs: 19, md: 30 } }}>Case</Heading>
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "#363434",
          }}
          to="/tjanster"
        >
          <Heading sx={{ fontSize: { xs: 19, md: 30 } }}>Tjänster</Heading>
        </Link>
      </Box>

      {/* Menyikoner */}
      <div
        onClick={() => {
          console.log("Meny ikoner klickad"); // För felsökning
          setDrawerOpen(true);
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          paddingRight: "16px", // Sätt standardpadding
          cursor: "pointer",
          //  marginRight: 90,
          marginRight: isMobile ? 10 : isBigScreen ? 120 : 80,
          // fontSize: 20
        }}
      >
        <Box
          sx={{
            backgroundColor: "#363434",
            // height: "4px",
            height: { xs: "6px", md: "6px", xl: "7px" },
            width: { xs: "27px", md: "37px" }, // Anpassa bredd på små skärmar
            borderRadius: "20px",
            marginBottom: "10px",
          }}
        />
        <Box
          sx={{
            backgroundColor: "#363434",
            height: { xs: "6px", md: "6px" },
            width: { xs: "47px", md: "72px" }, // Anpassa bredd på små skärmar
            borderRadius: "20px",
            transform: "rotate(-10deg)",
          }}
        />
      </div>

      {/* Drawer */}
      <DrawerComponent drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
    </Box>
  );
}
