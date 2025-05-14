// import { Box } from "@mui/material";
// import Wave from "./Wave";

// const ParallaxImg = () => {
//   return (
//     <Box
//       sx={{
//         width: "100%",
//         height: "100vh",
//         position: "relative",
//         overflow: "hidden",
        
//       }}
//     >
//       {/* Bakgrundsbilden – FIXERAD */}
//       <Box
//           //  width: "100%",
//           //  backgroundColor: "#363434",
//           //  display: "flex",
//           //  justifyContent: "start",
//           //  // paddingY: isTablet ? 30 : { xs: 1, md: 4, xl: 0 },
//           //  paddingX: { xs: 1 },
//           //  alignItems: { xs: "center", xl: "start" },
//           //  position: "fixed",
//           //  zIndex: 2,
//           //  height: "100%",
//         sx={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100vh",
//           backgroundImage: "url('https://i.imgur.com/pDMM8Je.png')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           zIndex: 1,
//         }}
//       />

//       {/* Vågen – rör sig uppåt vid scroll */}
//       <Box
//         sx={{
//           position: "relative",
//           width: "100%",
//           paddingY: { xs: 40, md: 10 },
//           zIndex: 2,
//         }}
//       >
//         <Wave />
//       </Box>
//     </Box>
//   );
// };

// export default ParallaxImg;
import { Box} from "@mui/material";


interface ParallaxImgProps {
  image: string;
  bgPosition?: string | { [key: string]: string }; 
  bgSize?: string;     // ny prop
}

const ParallaxImg: React.FC<ParallaxImgProps> = ({ image, bgSize, bgPosition}) => {
  return (
    <Box
      sx={{
        width: "100%",
        background: "linear-gradient(to top, #EDC1D0, #F3D9DF)",
        display: "flex",
        justifyContent: "start",
        // paddingY: isTablet ? 30 : { xs: 1, md: 4, xl: 0 },
        paddingX: { xs: 1 },
        alignItems: { xs: "center", xl: "start" },
        position: "fixed",
        zIndex: 2,
         height: "100vh",
      }}
    >
      {/* Bakgrundsbild – fixerad i viewporten */}
      <Box
        sx={{
          position: "fixed",
          top: 0,         backgroundRepeat: "no-repeat",
          left: 0,
          width: "100%",
          minHeight: "100vh",
          backgroundImage: `url(${image})`,
          backgroundSize: bgSize || "cover", // standard: cover
          backgroundPosition: bgPosition || "center", // standard: center
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          // zIndex: 1,
        }}
      />

 
        
      </Box>

  );
};

export default ParallaxImg;
