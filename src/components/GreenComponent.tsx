import {
  Box,
  Button,
  styled,
  Typography,
  TypographyProps,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { isMobile, isTablet } from "./GreyComponent";

export default function GreenComponent() {
  const navigate = useNavigate();

  const Texting = styled(Typography)<TypographyProps>`
    font-family: "H3", sans-serif;
    font-variation-settings: "wght" 300;
  `;

  const TextingATYP = styled(Typography)<TypographyProps>`
    font-family: "atyp-bl-variable", sans-serif;
    font-variation-settings: "ital" 0, "opsz" 6, "wght" 280;
  `;

  return (
    <Box
      sx={{
        width: "100%",
        background: "#BECED9",
        display: "flex",
        flexDirection: isTablet ? "row" : { xs: "column", md: "row" },
        justifyContent: "space-evenly",
        marginTop: { xs: 10, md: 12, xl: 15 },
        alignItems: "stretch",
        paddingY: 0,
        paddingX: isTablet ? 2 : { xs: 1, md: 0 },
        height: { xs: "auto", lg: "420px" },
        overflow: "visible",
        marginY: { xl: 15 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: isTablet ? 400 : { xs: 300, md: 500, xl: 700 },
          width: "100%",
          paddingTop: isMobile ? 10 : { xs: 1, md: 0 },
          paddingLeft: isMobile ? 2 : { xs: 1, md: 0 },
          textAlign: "left",
        }}
      >
        <Texting
          sx={{
            fontSize: { xs: 30, md: 40, xl: 55 },
            color: "#1D5880",
            lineHeight: 1,
            maxWidth: { xl: 400 },
          }}
          component="h1"
        >
          Yaya, vem är hon egentligen?
        </Texting>

        <TextingATYP
          sx={{
            fontSize: { xs: 16, md: 18, xl: 25 },
            fontWeight: "lighter",
            color: "#363434",
            flexWrap: "wrap",
            maxWidth: 1000,
            marginTop: 3,
          }}
          component="h2"
        >
          Ja, vem är hon? Yaya finns i oss båda, på olika sätt. Hon är liksom en
          del av vilka vi är. Kreatören i oss. Hon som får trist och platt att
          spraka. Hon som kan sätta färg på världen. Och hon finns i oss båda,
          på olika sätt.
        </TextingATYP>

        <TextingATYP
          sx={{
            fontSize: { xs: 16, md: 18, xl: 25 },
            fontWeight: "lighter",
            color: "#363434",
            flexWrap: "wrap",
            maxWidth: 1000,
            marginY: 2,
          }}
          component="h3"
        >
          Vi är Yaya och Yaya är oss.
        </TextingATYP>

        <Button
          aria-label="Navigera till om oss-sidan"
          onClick={() => navigate("/yaya")}
          sx={{
            backgroundColor: "#1D5880",
            marginTop: 1,
            width: isTablet ? "50%" : "35%",
            color: "#F7F7F7",
            borderRadius: 2,
            paddingY: 1.2,
            textTransform: "none",
            marginY: { xs: 2, md: 0 },
            "&:hover": {
              backgroundColor: "#363434",
            },
          }}
        >
          <Texting sx={{ fontSize: { md: 18, xl: 25 } }}>Om oss</Texting>
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: { xl: "30%" },
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src="https://i.imgur.com/pHngbgI.jpeg"
          alt="two girls"
          sx={{
            width: {
              xs: "96%",
              sm: "96%",
              md: "100%",
              xl: "75%",
            },
            height: {
              xs: "auto",
              sm: "200px",
              md: "300px",
              lg: "450px",
              xl: "500px",
            },
            objectFit: "cover",
            objectPosition: "top",
            transform: {
              xs: "none",
              md: "scale(1.15)",
              lg: "scale(1.2)",
              xl: "scale(1.1)",
            },
            marginTop: {
              xs: 0,
              md: "-90px",
              lg: "-100px",
              xl: "-120px",
            },
            marginBottom: {
              xs: 0,
              md: "-90px",
              lg: "-100px",
              xl: "-120px",
            },
            zIndex: 9,
          }}
        />
      </Box>
    </Box>
  );
}
