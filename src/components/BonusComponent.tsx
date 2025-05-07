import { Box, Typography } from "@mui/material";

export const BonusComponent: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#f8f8f8",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    
      }}
    >
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#f8f8f8",
          display: "flex",
          justifyContent: "center",
          px: 2,
          mt: { xs: 12, md: 10 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "100%",
            textAlign: "center",
          
          }}
        >
            <Typography
          variant="h6"
          fontWeight={500}
          gutterBottom
          sx={{ textAlign: "center" }} // 👈 rubriken centrerad
        >
          En liten bonus!
        </Typography>

        <Typography
  variant="body1"
  sx={{
    mt: 2,
    mx: "auto",            // centrera horisontellt
    maxWidth: 540,         // begränsa bredden
    textAlign: "center",   // centrera texten visuellt
    lineHeight: 1.8,       // extra radavstånd för luftighet
  }}
>
  Vi fick även förtroendet att uppdatera deras logotyp. Önskemålet var
  en mer modern logga, som ändå behåller den klassiska känslan.
</Typography>
          {/* <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              alignItems: "center",
              gap: 4,
              mt: 6,
              mb: 10,
            }}
          >
            <Box
              component="img"
              src="https://i.imgur.com/Kzmqcr0.png"
              alt="Logotyp 1"
              sx={{ width: "100%", maxWidth: 300 }}
            />
            <Box
              component="img"
              src="https://i.imgur.com/fEGfblh.png"
              alt="Logotyp 2"
              sx={{ width: "100%", maxWidth: 300 }}
            />
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};
