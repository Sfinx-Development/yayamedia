import { Box, styled, Typography, TypographyProps } from "@mui/material";

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

  return (
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
            component="img"
            src="https://i.imgur.com/LJiTONO.jpeg"
            alt="Del av soffa"
            sx={{
              flex: "1 1 calc(50% - 16px)",
              maxWidth: "calc(50% - 16px)",
              objectFit: "cover",
            }}
          />
          <Box
            component="img"
            src="https://i.imgur.com/gqdt0Kh.jpeg"
            alt="Dukat utebord"
            sx={{
              flex: "1 1 calc(50% - 16px)",
              maxWidth: "calc(50% - 16px)",
              objectFit: "cover",
            }}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 1.5,
          }}
        >
          {picturesRow2.map((i) => (
            <Box
              key={i}
              component="img"
              src={i}
              alt={`Bild ${i}`}
              sx={{
                flex: "1 1 calc(25% - 16px)",
                maxWidth: "calc(25% - 16px)",
                objectFit: "cover",
              }}
            />
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
          {picturesRow3.map((i) => (
            <Box
              key={i}
              component="img"
              src={i}
              alt={`Bild ${i}`}
              sx={{
                flex: "1 1 calc(25% - 16px)",
                maxWidth: "calc(25% - 16px)",
                objectFit: "cover",
              }}
            />
          ))}
        </Box>
        <Box
          sx={{
            // backgroundColor: "red",
            width: "100%",
            ml: { xs: 2, md: 20 },
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
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            mt: { xs: 2, md: 4 },
          }}
        >
          <Box
            sx={{
              width: "100%",
              // maxWidth: "1600px",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              // px: { xs: 3, md: 8, xl: 14 },
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            <Box
              component="img"
              src="https://i.imgur.com/7Wzwovd.png"
              alt="Randig dyna"
              sx={{
                width: { xs: "45%", sm: "30%", md: "14%" },
                objectFit: "contain",
              }}
            />
            <Box
              component="img"
              src="https://i.imgur.com/sJIprVk.png"
              alt="Mönstrad kudde"
              sx={{
                width: { xs: "45%", sm: "30%", md: "14%" },
                objectFit: "contain",
              }}
            />
            <Box
              component="img"
              src="https://i.imgur.com/IV6KnVm.png"
              alt="Rund dyna"
              sx={{
                width: { xs: "45%", sm: "30%", md: "14%" },
                objectFit: "contain",
              }}
            />
            <Box
              component="img"
              src="https://i.imgur.com/vNs4Eu3.png"
              alt="Brun pläd"
              sx={{
                width: { xs: "45%", sm: "30%", md: "14%" },
                objectFit: "contain",
              }}
            />
            <Box
              component="img"
              src="https://i.imgur.com/4XiRHyL.png"
              alt="Inredning"
              sx={{
                width: { xs: "45%", sm: "30%", md: "14%" },
                objectFit: "contain",
              }}
            />
            <Box
              component="img"
              src="https://i.imgur.com/DucNLSf.png"
              alt="Liggande kudde"
              sx={{
                width: { xs: "45%", sm: "30%", md: "14%" },
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          // backgroundColor: "red",
          width: "100%",
          ml: { xs: 2, md: 20 },
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
  );
}
