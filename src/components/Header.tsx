import { Box, Link, styled, Typography } from "@mui/material";

export default function Header(): JSX.Element {
  const Heading = styled(Typography)`
    color: "#363434";
    font-family: "atyp-bl-variable", sans-serif;
    font-variation-settings: "wght" 333, "ital" 0, "opsz" 6;
  `;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: "#F7F7F7",
        paddingY: 1,
      }}
      component={"header"}
    >
      <Box sx={{ paddingLeft: 10 }}>
        <img
          src={"https://i.imgur.com/hyHtDy4.png"}
          alt="Yaya Logo"
          height={60}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          paddingY: 3,
          gap: 6,
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
          <Heading variant="h4">Kontakt</Heading>
        </Link>
        <Link
          sx={{
            textDecoration: "none",
            color: "#363434",
          }}
          href="/about"
        >
          <Heading variant="h4">Yaya</Heading>
        </Link>
        <Link
          sx={{
            textDecoration: "none",
            color: "#363434",
          }}
          href="/about"
        >
          <Heading variant="h4">Case</Heading>
        </Link>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          paddingRight: 10,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#363434",
            height: "5px",
            width: "30px",
            borderRadius: "10px",
            marginBottom: "8px",
          }}
        />
        <Box
          sx={{
            backgroundColor: "#363434",
            height: "5px",
            width: "60px",
            borderRadius: "10px",
            transform: "rotate(-8deg)",
          }}
        />
      </Box>
    </Box>
  );
}
