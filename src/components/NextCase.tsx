import { Box, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

export default function NextCase() {
  const cases = ["/asundsholm", "/sleipner", "/prhome&svanefors", "/salusso"];

  const location = useLocation();
  const pathname = location.pathname;

  const currentIndex = cases.indexOf(pathname);

  const prevCase = cases[(currentIndex - 1 + cases.length) % cases.length];
  const nextCase = cases[(currentIndex + 1) % cases.length];

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#f8f8f8",
        display: "flex",
        justifyContent: "center",
        py: { xs: 2, md: 8 },
        mt: { xs: 2, md: 4 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 3, md: 8 },
        }}
      >
        <Link
          to={prevCase}
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="https://i.imgur.com/7jb2kF8.png"
            alt="Föregående"
            sx={{ width: { xs: 40, md: 100 }, height: "auto", mb: 1 }}
          />
          <Typography
            variant="body1"
            sx={{
              fontFamily: "atyp-bl-variable, sans-serif",
              fontSize: { xs: 16, md: 22, xl: 26 },
              textAlign: "center",
            }}
          >
            Föregående case
          </Typography>
        </Link>

        <Link
          to={nextCase}
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="https://i.imgur.com/V4ItPoJ.png"
            alt="Nästa"
            sx={{ width: { xs: 40, md: 100 }, height: "auto", mb: 1 }}
          />
          <Typography
            variant="body1"
            sx={{
              fontFamily: "atyp-bl-variable, sans-serif",
              fontSize: { xs: 16, md: 22, xl: 26 },
              textAlign: "center",
            }}
          >
            Nästa case
          </Typography>
        </Link>
      </Box>
    </Box>
  );
}
