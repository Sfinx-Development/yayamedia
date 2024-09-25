import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        paddingY: 6,
        width: "100%",
        backgroundColor: "#363434",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ paddingX: 2 }}>
        <Typography sx={{ color: "#F7F7F7" }}>Logga</Typography>
      </Box>
      <Box sx={{ paddingX: 2 }}>
        <Typography sx={{ color: "#F7F7F7" }}>Emelie</Typography>
      </Box>
    </Box>
  );
}
