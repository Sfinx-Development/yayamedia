import { Box, Link, styled, Typography } from "@mui/material";

export default function Header(): JSX.Element {
  const Heading = styled(Typography)`
    font-family: "AtypRegularVariable", sans-serif;
    font-variation-settings: "wght" 300;
  `;
  const isMobile = window.innerWidth <= 820;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: "#F7F7F7",
        paddingY: { xs: 1, md: 1 }, // Mindre padding på små skärmar
      }}
      component={"header"}
    >
      {/* Logotyp */}
      <Box sx={{ paddingLeft: { xs: 2, md: 10 } }}>
        {" "}
        {/* Anpassa padding */}
        <img
          src={"https://i.imgur.com/hyHtDy4.png"}
          alt="Yaya Logo"
          style={{ height: isMobile ? 40 : 60 }} // Mindre logotyp på små skärmar
        />
      </Box>

      {/* Navigationslänkar */}
      <Box
        sx={{
          display: "flex",
          paddingY: { xs: 1, md: 3 }, // Mindre padding på små skärmar
          gap: { xs: 2, md: 6 }, // Mindre gap mellan länkar på små skärmar
          justifyContent: "center",
        }}
      >
        <Link
          sx={{
            textDecoration: "none",
            color: "#363434",
          }}
          href="/"
        >
          <Heading sx={{ fontSize: { xs: 20, md: 36 }, color: "#363434" }}>
            Kontakt
          </Heading>{" "}
          {/* Mindre textstorlek */}
        </Link>
        <Link
          sx={{
            textDecoration: "none",
            color: "#363434",
          }}
          href="/about"
        >
          <Heading sx={{ fontSize: { xs: 20, md: 36 } }}>Yaya</Heading>
        </Link>
        <Link
          sx={{
            textDecoration: "none",
            color: "#363434",
          }}
          href="/about"
        >
          <Heading sx={{ fontSize: { xs: 20, md: 36 } }}>Case</Heading>
        </Link>
      </Box>

      {/* Menyikoner */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          paddingRight: { xs: 2, md: 10 }, // Mindre padding på små skärmar
        }}
      >
        <Box
          sx={{
            backgroundColor: "#363434",
            height: "5px",
            width: { xs: "25px", md: "35px" }, // Anpassa bredd på små skärmar
            borderRadius: "20px",
            marginBottom: "15px",
          }}
        />
        <Box
          sx={{
            backgroundColor: "#363434",
            height: "5px",
            width: { xs: "40px", md: "70px" }, // Anpassa bredd på små skärmar
            borderRadius: "20px",
            transform: "rotate(-8deg)",
          }}
        />
      </Box>
    </Box>
  );
}
