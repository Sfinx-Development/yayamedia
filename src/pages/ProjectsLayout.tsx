import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import ParallaxImg from "../components/ParallaxImg";
import {  isTablet } from "../components/GreyComponent";

const ProjectsLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentPage = location.pathname.split("/").pop();

  const heroImageMap: Record<string, string> = {
    asundsholm: "https://i.imgur.com/pDMM8Je.png",
    sleipner: "https://i.imgur.com/BHWBALX.jpeg", // ← byt till Sleipner-bild
  };

  const image = heroImageMap[currentPage || "asundsholm"];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 0,
        margin: 0,
        backgroundColor: "#F7F7F7",
        overflowX: "hidden",
        width: "100%",
        alignItems: "start",
        flexGrow: 1,
      }}
    >
      <ParallaxImg image={image} />

      <Box
        sx={{
          width: "100%",
          backgroundColor: "#ffffff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: isTablet ? -40 :  { xs: -25, md: 0, sm: 25, lg: 0, xl: -40 },
          gap: { xs: 2, md: 6 },
          py: { xs: 2, md: 2, sm: 2, lg: 2, xl: 2 },
          borderBottom: "1px solid #e0e0e0",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        {[
          { label: "Åsundsholm", path: "asundsholm" },
          { label: "Sleipner", path: "sleipner" },
        ].map((proj) => (
          <Typography
            key={proj.label}
            variant="body2"
            onClick={() => navigate(`/projects/${proj.path}`)}
            sx={{
              cursor: "pointer",
              fontWeight: 500,
              color: "#363434",
              opacity: 0.7,
              "&:hover": { opacity: 1 },
            }}
          >
            {proj.label}
          </Typography>
        ))}
      </Box>

      <Outlet />
    </Box>
  );
};

export default ProjectsLayout;
