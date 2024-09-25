import { Box, Link, Typography } from "@mui/material";

export default function Header(): JSX.Element {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: "#F7F7F7",
      }}
      component={"header"}
    >
      <Box
        sx={{
          display: "flex",
          paddingY: 2,
          width: "100%",
          gap: 2,
        }}
      >
        <Link
          sx={{
            textDecoration: "none",
          }}
          href="/"
        >
          <Typography
            sx={{
              letterSpacing: 2,
              fontWeight: "200",
              lineHeight: 1.5,
              fontSize: 30,
              whiteSpace: "nowrap",
              color: "black",
            }}
          >
            Kontakt
          </Typography>
        </Link>
        <Link
          sx={{
            textDecoration: "none",
          }}
          href="/about"
        >
          <Typography
            sx={{
              letterSpacing: 2,
              fontWeight: "300",
              lineHeight: 1.5,
              whiteSpace: "nowrap",
              fontSize: 30,
              color: "black",
            }}
          >
            Yaya
          </Typography>
        </Link>
      </Box>
    </Box>
  );
}
