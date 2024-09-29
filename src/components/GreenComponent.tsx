import { Box, Button, styled, Typography } from "@mui/material";

export default function GreenComponent() {
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
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        paddingY: { xs: 2, md: 4 },
        paddingX: { xs: 1, md: 0 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          //   justifyContent: "space-between",
          alignItems: "start",
          maxWidth: { xs: 300, md: 500 },
          width: "100%",
        }}
      >
        <Texting
          sx={{ fontSize: { xs: 30, md: 40 }, color: "#2D6555", marginTop: 10 }}
        >
          Yaya, vem är hon egentligen?
        </Texting>
        <TextingATYP
          sx={{
            fontSize: { xs: 16, md: 18 },
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
            fontSize: { xs: 16, md: 18 },
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
          sx={{
            backgroundColor: "#2D6555",
            marginTop: 1,
            width: "40%",
            color: "#F7F7F7",
            borderRadius: 2,
            paddingY: 1,
            textTransform: "none",
          }}
        >
          <Texting sx={{ fontSize: 18 }}>Om oss</Texting>
        </Button>
      </Box>
      <Box sx={{}}>
        <img
          src="https://i.imgur.com/6aWnJLD.png"
          alt="two girls"
          height="500px"
        />
      </Box>
    </Box>
  );
}
