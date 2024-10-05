import { Box, Button, styled, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { isMobile, isTablet } from "./GreyComponent";

export default function GreenComponent() {
  const navigate = useNavigate();
  const Texting = styled(Typography)`
    font-family: "H3", sans-serif;
    font-variation-settings: "wght" 300;
  `;

  const TextingATYP = styled(Typography)`
    font-family: "AtypRegularVariable", sans-serif;
    font-variation-settings: "wght" 300;
  `;

  return (
    <Box
      sx={{
        width: "100%",
        background: "#B9DCD2",
        display: "flex",
        flexDirection: isTablet ? "row" : { xs: "column", md: "row" },
        justifyContent: "space-evenly",
        alignItems: "stretch",
        paddingY: 0,
        paddingX: isTablet ? 2 : { xs: 1, md: 0 },
        height: isMobile ? "auto" : "480px",
        // height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: isTablet ? 400 : { xs: 300, md: 500, xl: 700 },
          width: "100%",
          paddingTop: isMobile ? 10 : { xs: 1, md: 0, sm: 0, xl: 0 },
          // paddingLeft: 2,
          paddingLeft: isMobile ? 2 : { xs: 1, md: 0, sm: 0, xl: 0 },
        }}
      >
        <Texting
          sx={{
            fontSize: { xs: 30, md: 40, xl: 55 },
            color: "#2D6555",
            // marginTop: 5,
          }}
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
            marginTop: 1,
          }}
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
        >
          Vi är Yaya och Yaya är oss.
        </TextingATYP>
        <Button
          onClick={() => {
            navigate("/yaya");
          }}
          sx={{
            backgroundColor: "#2D6555",
            marginTop: 1,
            width: "35%",
            color: "#F7F7F7",
            borderRadius: 2,
            paddingY: 1.2,
            textTransform: "none",
            marginY: { xs: 2, md: 0 },
          }}
        >
          <Texting sx={{ fontSize: { md: 18, xl: 25 } }}>Om oss</Texting>
        </Button>
      </Box>
      <Box>
        <img
          src="https://i.imgur.com/pHngbgI.jpeg"
          alt="two girls"
          style={{
            width: isMobile ? "96%" : "96%", // 96% på mobil, 80% på desktop
            height: isMobile ? "auto" : "480px", // Automatisk höjd på mobil, 480px på desktop
            objectFit: "cover", // Täcker utrymmet utan att förvränga bilden
            objectPosition: "top", // Justera bilden så att toppen syns
          }}
          // height={isMobile ? "560px" : "480px"} LA TILL STYLE MED MER CSS, KOMMENTERADE UT HEIGHT UNDER
        />
      </Box>
    </Box>
  );
}
