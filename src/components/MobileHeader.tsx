import { Box } from "@mui/material";

export default function CustomHeader2(): JSX.Element {
  //   const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        width: "100%",
      }}
      component={"header"}
    >
      <Box
        sx={{
          paddingY: 0,
          paddingX: { xs: 0, md: 3 },
          marginX: { xs: 0, md: 1 },
          display: "flex",
          alignItems: "center",
        }}
      ></Box>
    </Box>
  );
}
