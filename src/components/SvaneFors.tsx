import { Box, styled, Typography, TypographyProps } from "@mui/material";
import { useState } from "react";

export default function Svanefors() {
  const Texting = styled(Typography)<TypographyProps>`
    font-family: "H3", sans-serif;
    font-variation-settings: "wght" 300;
  `;

  const picturesRow2: string[] = [
    "https://i.imgur.com/2P8r1u6.jpeg",
    "https://i.imgur.com/L5ctafU.jpeg",
    "https://i.imgur.com/reicA7y.jpeg",
    "https://i.imgur.com/DhP7r6E.jpeg",
  ];

  const picturesRow3: string[] = [
    "https://i.imgur.com/DeBFtcI.jpeg",
    "https://i.imgur.com/xJ6RtaA.jpeg",
    "https://i.imgur.com/84Mypfr.jpeg",
    "https://i.imgur.com/enl6R6M.jpeg",
  ];

  // 🔍 aktiv bild för fullscreen
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setActiveImage(src);
  };

  const largeTile = {
    flex: "1 1 calc(50% - 16px)",
    maxWidth: "calc(50% - 16px)",
    // borderRadius: 2,
    overflow: "hidden" as const,
    position: "relative" as const,
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.05)",
      zIndex: 2,
      boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    },
  };

  const smallTile = {
    flex: "1 1 calc(25% - 16px)",
    maxWidth: "calc(25% - 16px)",
    // borderRadius: 2,
    overflow: "hidden" as const,
    position: "relative" as const,
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.08)",
      zIndex: 2,
      boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    },
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: { xl: 4 },
        }}
      >
        <Texting
          variant="h3"
          sx={{ fontSize: { xs: 28, md: 36, xl: 48 } }}
          fontWeight={400}
          gutterBottom
        >
          Svanefors
        </Texting>

        {/* === MILJÖBILDER === */}
        <Box
          sx={{
            width: "98%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 2,
            justifyContent: "center",
            gap: 1.5,
            px: { xs: 3, md: 8, xl: 14 },
            mb: 6,
          }}
        >
          {/* Rad 1 - två stora bilder */}
          <Box
            sx={{
              width: "99%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 1.5,
            }}
          >
            <Box
              sx={largeTile}
              onClick={() =>
                handleImageClick("https://i.imgur.com/LJiTONO.jpeg")
              }
            >
              <Box
                component="img"
                src="https://i.imgur.com/LJiTONO.jpeg"
                alt="Del av soffa"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            <Box
              sx={largeTile}
              onClick={() =>
                handleImageClick("https://i.imgur.com/gqdt0Kh.jpeg")
              }
            >
              <Box
                component="img"
                src="https://i.imgur.com/gqdt0Kh.jpeg"
                alt="Dukat utebord"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Box>

          {/* Rad 2 - 4 bilder */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 1.5,
            }}
          >
            {picturesRow2.map((src) => (
              <Box
                key={src}
                sx={smallTile}
                onClick={() => handleImageClick(src)}
              >
                <Box
                  component="img"
                  src={src}
                  alt="Miljöbild rad 2"
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            ))}
          </Box>

          {/* Rad 3 - 4 bilder */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 1.5,
            }}
          >
            {picturesRow3.map((src) => (
              <Box
                key={src}
                sx={smallTile}
                onClick={() => handleImageClick(src)}
              >
                <Box
                  component="img"
                  src={src}
                  alt="Miljöbild rad 3"
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            ))}
          </Box>

          {/* === PRODUKTFOTO === */}
          <Box
            sx={{
              width: "100%",
              ml: { xs: 4, md: 18, xl: 25 },
              mt: { xs: 2, md: 6, xl: 8 },
            }}
          >
            <Texting
              variant="h3"
              sx={{ fontSize: { xs: 18, md: 24, xl: 32 } }}
              fontWeight={400}
              textAlign={"left"}
            >
              Produktfoto
            </Texting>
          </Box>

          {/* produktbilder med scroll + klick för fullscreen */}
          <Box
            sx={{
              width: "100%",
              mt: { xs: 2, md: 4 },
              overflowX: "auto",
              px: { xs: 2, md: 4 },
              pb: 2,
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 2,
                width: "max-content",
                alignItems: "flex-start",
              }}
            >
              {[
                { src: "https://i.imgur.com/7Wzwovd.png", alt: "Randig dyna" },
                {
                  src: "https://i.imgur.com/sJIprVk.png",
                  alt: "Mönstrad kudde",
                },
                { src: "https://i.imgur.com/IV6KnVm.png", alt: "Rund dyna" },
                { src: "https://i.imgur.com/vNs4Eu3.png", alt: "Brun pläd" },
                { src: "https://i.imgur.com/4XiRHyL.png", alt: "Inredning" },
                {
                  src: "https://i.imgur.com/DucNLSf.png",
                  alt: "Liggande kudde",
                },
              ].map((img) => (
                <Box
                  key={img.src}
                  component="img"
                  src={img.src}
                  alt={img.alt}
                  onClick={() => handleImageClick(img.src)}
                  sx={{
                    width: { xs: 160, sm: 200, md: 220, xl: 400 },
                    objectFit: "contain",
                    flexShrink: 0,
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>

        {/* === SOCIALA MEDIER === */}
        <Box
          sx={{
            width: "100%",
            ml: { xs: 4, md: 18, xl: 25 },
            mt: { xs: 4, md: 8 },
          }}
        >
          <Texting
            variant="h3"
            sx={{ fontSize: { xs: 18, md: 24, xl: 32 } }}
            fontWeight={400}
            textAlign={"left"}
          >
            Sociala medieannonser
          </Texting>
        </Box>

        <Box
          sx={{
            width: "100%",
            backgroundColor: "#d9d2cc",
            display: "flex",
            justifyContent: "center",
            mt: { xs: 4, md: 6 },
            py: { xs: 4, md: 6 },
          }}
        >
          <Box
            component="img"
            src="https://i.imgur.com/slQSDeR.png"
            alt="Sociala medieannonser"
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              display: "block",
            }}
          />
        </Box>
      </Box>

      {/* 🔍 FULLSCREEN-OVERLAY (mobil + desktop) */}
      {activeImage && (
        <Box
          onClick={() => setActiveImage(null)}
          sx={{
            position: "fixed",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.75)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2000,
            cursor: "zoom-out",
          }}
        >
          <Box
            component="img"
            src={activeImage}
            alt="Förstorad bild"
            sx={{
              maxWidth: "98%",
              maxHeight: "98%",
              // borderRadius: 2,
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            }}
          />
        </Box>
      )}
    </>
  );
}
