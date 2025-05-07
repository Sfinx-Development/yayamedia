import { Box } from "@mui/material";
// import ParallaxYaya from "../components/ParallaxYaya";

// import YellowComponent from "../components/YellowComponent";
// import AsundsholmInfo from "../components/AsundsholmInfo";

import AsundsholmUppdrag from "../components/AsundsholmUppdrag";

import ParallaxImg from "../components/ParallaxImg";

export default function AsundsholmProject() {
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
         <ParallaxImg />
    

    {/* Scrollinnehåll under hero */}
    <Box
      sx={{
        width: "100%",
        position: "relative",
        zIndex: 10,
        marginTop: "-2px", // Istället för height: "100vh"
      //  height: "100vh", // viktigt! så vi scrollar ned från heron
      }}
    >
      <AsundsholmUppdrag />
    </Box>
  </Box>
);
}
