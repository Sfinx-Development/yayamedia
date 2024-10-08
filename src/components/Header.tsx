import { Box, Link, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DrawerComponent from "./DrawerComponent";

export default function Header(): JSX.Element {
  const navigate = useNavigate();
  const Heading = styled(Typography)`
    font-family: "AtypRegularVariable", sans-serif;
    font-variation-settings: "wght" 300;
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
          alt="Yaya Logo"
          style={{
            height: isMobile ? 40 : isBigScreen ? 75 : 60,
          }} // Mindre logotyp på små skärmar
        />
      </div>

      {/* Navigationslänkar (endast för större skärmar) */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          paddingY: { xs: 1, md: 3 },
          gap: { xs: 2, md: 6 },
          justifyContent: "center",
        }}
      >
        <Link
          sx={{
            textDecoration: "none",
            color: "#363434",
          }}
          href="/yaya#kontakt"
        >
          <Heading sx={{ fontSize: { xs: 20, md: 36 }, color: "#363434" }}>
            Kontakt
          </Heading>
        </Link>
        <Link
          sx={{
            textDecoration: "none",
            color: "#363434",
          }}
          href="/yaya"
        >
          <Heading sx={{ fontSize: { xs: 20, md: 36 } }}>Yaya</Heading>
        </Link>
        <Link
          sx={{
            textDecoration: "none",
            color: "#363434",
          }}
          href="/#case"
        >
          <Heading sx={{ fontSize: { xs: 20, md: 36 } }}>Case</Heading>
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
          marginRight: 10,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#363434",
            // height: "4px",
            height:  { xs: "4px", md: "4px", xl: "5px" },
            width: { xs: "25px", md: "35px" }, // Anpassa bredd på små skärmar
            borderRadius: "20px",
            marginBottom: "10px",
          }}
        />
        <Box
          sx={{
            backgroundColor: "#363434",
            height:  { xs: "4px", md: "4px" },
            width: { xs: "45px", md: "70px" }, // Anpassa bredd på små skärmar
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
