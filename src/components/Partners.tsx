import { Box, styled, Typography } from "@mui/material";

export default function Partners() {
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
        background: "#F7F7F7",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: "100%",
        paddingBottom: 10,
      }}
    >
      <Texting
        sx={{
          fontSize: 40,
          color: "#363434",
          marginTop: 12,
          marginBottom: 5,
          textAlign: "center",
        }}
      >
        Samarbetspartners
      </Texting>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: 0.1,
        }}
      >
        <img
          src="https://i.imgur.com/5Fk6tu4.png"
          alt="Logo of zeroett"
          height="130px"
        />
        <img
          src="https://i.imgur.com/CVKKnXu.png"
          alt="Logo of 609"
          height="130px"
        />
      </Box>
    </Box>
  );
}
