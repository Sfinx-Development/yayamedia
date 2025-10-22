import { Box, styled, Typography, TypographyProps } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CaseScroller() {
  const caseImages = [
    {
      src: "https://i.imgur.com/YXRP2MD.jpeg",
      label: "Swedteam",
      url: "/case/swedteam",
    },
    {
      src: "https://i.imgur.com/dKFIC1b.jpeg",
      label: "Pr Home/Svanefors",
      url: "/case/prhome&svanefors",
    },
    {
      src: "https://i.imgur.com/ZlM4ulM.jpeg",
      label: "Salusso",
      url: "/case/salusso",
    },
    {
      src: "https://i.imgur.com/ADTyziN.jpeg",
      label: "Sleipnertandvården",
      url: "/case/sleipner",
    },
    {
      src: "https://i.imgur.com/pDMM8Je.png",
      label: "Åsundsholm",
      url: "/case/asundsholm",
    },
  ];

  const Texting = styled(Typography)<TypographyProps>`
    font-family: "H3", sans-serif;
    font-variation-settings: "wght" 300;
  `;
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
        overflowX: "auto",
        whiteSpace: "nowrap",
        paddingY: 4,
        paddingX: 2,
        backgroundColor: "#F7F7F7",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 3,
        }}
      >
        {caseImages.map((src, index) => {
          const isSleipner = src.label === "Sleipnertandvården";
          return (
            <Box
              key={index}
              onClick={() => navigate(src.url)}
              sx={{
                position: "relative",
                minWidth: { xs: 300, md: 550, xl: 800 },
                minHeight: { xs: 300, md: 550, xl: 800 },
                aspectRatio: "1 / 1",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              <Box
                component="img"
                src={src.src}
                alt={src.label}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.5s ease, filter 0.5s ease",
                  "&:hover": {
                    transform: "scale(1.08)",
                    filter: "brightness(1.15)",
                  },
                }}
              />
              <Texting
                variant="h3"
                sx={{
                  fontSize: { xs: 18, md: 28, xl: 40 },
                  position: "absolute",
                  bottom: 12,
                  left: { xs: 8, md: 30 },
                  color: isSleipner ? "#363333" : "white",
                  zIndex: 2,
                }}
                fontWeight={400}
                gutterBottom
              >
                {src.label}
              </Texting>
            </Box>
          );
        })}
        <Box sx={{ minWidth: { xs: 24, md: 48 } }} />
      </Box>
    </Box>
  );
}
