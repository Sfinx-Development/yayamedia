import { Box, styled, Typography } from "@mui/material";

export default function MobileFooter() {
  const Texting = styled(Typography)`
    font-family: "H3", sans-serif;
    font-variation-settings: "wght" 300;
  `;

  const TextingATYP = styled(Typography)`
    font-family: "atyp-bl-variable", sans-serif;
    font-variation-settings: "ital" 0, "opsz" 6, "wght" 280;
  `;

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#363434",
        display: "flex",
        bottom: 0,
        height: { xs: "auto", xl: 320 },
        paddingTop: { xs: 2, md: 4 },
        paddingBottom: 2,
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        zIndex: 3,
      }}
      component={"footer"}
    >
      {/* Logotyp */}
      <Box
        sx={{
          paddingX: 4,
          flex: 1,
          display: "flex",
          justifyContent: "start",
        }}
      >
        <img
          src={"https://i.imgur.com/1MzhvyL.png"}
          alt="Yaya Logo"
          style={{ width: 170 }}
        />
      </Box>

      {/* För kontaktuppgifterna */}
      <Box
        sx={{
          paddingX: 4,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          marginTop: { xs: 2, md: 0 },
        }}
      >
        <Texting
          sx={{
            fontSize: 20,
            color: "#F7F7F7",
          }}
        >
          Kontakt
        </Texting>
        <a
          href="mailto:hej@yayamedia.se"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <TextingATYP
            sx={{
              fontSize: 20,
              cursor: "pointer",
              color: "#F7F7F7",
            }}
          >
            hej@yayamedia.se
          </TextingATYP>
        </a>

        <Box sx={{ display: "flex", gap: 1 }}>
          <img
            src="https://i.imgur.com/yJruHJc.png"
            alt="instagram-logo"
            height={40}
            width={40}
            style={{ marginTop: 2 }}
          />
          <img
            src="https://i.imgur.com/HxxE6gv.png"
            alt="linkedin-logo"
            height={40}
            width={40}
            style={{ marginTop: 2 }}
          />
        </Box>
      </Box>
    </Box>
  );
}
