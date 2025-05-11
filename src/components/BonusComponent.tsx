import { Box, styled, Typography, TypographyProps } from "@mui/material";
import { isTablet } from "./GreyComponent";

export const BonusComponent: React.FC = () => {
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
          mt: { xs: 12, md: 25 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "100%",
            textAlign: "center",
          }}
        >
          <Texting
            variant="h3"
            fontWeight={500}
            gutterBottom
            sx={{ textAlign: "center" }}
          >
            En liten bonus!
          </Texting>

          <TextingATYP
            variant="body1"
            sx={{
              mt: 2,
              fontSize: isTablet ? 18 : { xl: 24 },
              mx: "auto", // centrera horisontellt
              maxWidth: {xs:540, xl:"40%"}, // begränsa bredden
              textAlign: "center", // centrera texten visuellt
              lineHeight: 1.8, // extra radavstånd för luftighet
            }}
          >
            Vi fick även förtroendet att uppdatera deras logotyp. Önskemålet var
            en mer modern logga, som ändå behåller den klassiska känslan.
          </TextingATYP>
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
