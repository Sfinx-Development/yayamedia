import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { isTablet } from "../components/GreyComponent";

const ProjectsLayout = () => {
  const navigate = useNavigate();

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
        zIndex: 30,
      }}
    >
      {/* Innehållet (Åsundsholm eller Sleipner) */}
      <Box sx={{ width: "100%" }}>
        <Outlet />
      </Box>

      {/* Navigation mellan projekten */}
      {/* <Box
        sx={{
          width: "100%",
          backgroundColor: "#ffffff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 2, md: 6 },
          py: { xs: 2, md: 2 },
          borderTop: "1px solid #e0e0e0",
          mt: 6,
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
      </Box> */}
    </Box>
  );
};

export default ProjectsLayout;
