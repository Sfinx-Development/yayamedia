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
      }}
    >
      <Texting>SamarbetsPartners</Texting>
    </Box>
  );
}
