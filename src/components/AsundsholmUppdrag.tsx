// import { Box, Button, Typography } from "@mui/material";
// import React from "react";

// const AsundsholmUppdrag: React.FC = () => {
//   return (
//     <Box
//     // position: "relative",
//     // width: "100%",
//     // minHeight: "100vh",
//     // overflowX: "hidden",
//     // backgroundColor: "#f8f8f8",
//       sx={{
//         position: "relative",
//         width: "100%",
//         minHeight: "100vh",
//         overflowX: "hidden",
//         backgroundColor: "#f8f8f8",
//         // backgroundColor: "#f8f8f8",
//          display: "flex",
//          flexDirection: { xs: "column", md: "row" },
//          justifyContent: "space-between",
//          alignItems: "center",
//         //    overflowX: "hidden",
//         px: { xs: 2, md: 8 },
//         py: { xs: 6, md: 12 },
//          gap: 4,
//       }}
//     >
//       {/* TEXT */}
//       <Box sx={{ flex: 1, maxWidth: 600,   marginTop: { xs: -8, md: -40 },  }}>
//         <Typography variant="h4" fontWeight={300} gutterBottom>
//           Åsundsholm
//         </Typography>
//         <Typography variant="h6" fontWeight={400} gutterBottom>
//           Uppdrag
//         </Typography>
//         <Typography variant="body1" paragraph>
//           Åsundsholm är mer än bara en plats för golfentusiaster – det är en
//           destination för möten, vila och njutning...
//         </Typography>
//         <Typography variant="body1" paragraph>
//           Vi fick även förmånen att ta ett större grepp om Åsundsholms visuella
//           identitet...
//         </Typography>
//         <Button variant="outlined" sx={{ mt: 2 }}>Skapa ett resultat</Button>
//       </Box>

//       {/* BILD */}
//       <Box
//         sx={{
//           flex: 1,
//           display: "flex",
//           justifyContent: "center",
//           marginTop: { xs: -8, md: -40 }, 
//         }}
//       >
//         <Box
//           sx={{
//             width: "100%",
//             maxWidth: 500,
//             height: 300,
//             backgroundImage: "url('https://i.imgur.com/1B3ye3I.png')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             borderRadius: 4,
//           }}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default AsundsholmUppdrag;
import { Box, Button, Typography } from "@mui/material";
import React from "react";

const AsundsholmUppdrag: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#f8f8f8",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: { xs: 2, md: 8 },
        pt: { xs: 6, md: 12 },
      }}
    >
      {/* Text + laptop-sektion */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: "1200px",
          gap: 4,
        }}
      >
        {/* TEXT */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" fontWeight={300} gutterBottom>
            Åsundsholm
          </Typography>
          <Typography variant="h6" fontWeight={400} gutterBottom>
            Uppdrag
          </Typography>
          <Typography variant="body1" paragraph>
            Åsundsholm är mer än bara en plats för golfentusiaster – det är en destination för möten, vila och njutning. Vi ville skapa en hemsida som speglar platsens själ och samtidigt lockar både nya och återkommande besökare.
          </Typography>
          <Typography variant="body1" paragraph>
            Vi fick även förmånen att ta ett större grepp om Åsundsholms visuella identitet – och skapa en logotyp och grafisk profil som matchar den fantastiska platsen.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              mt: 2,
              borderColor: "#aaa",
              color: "#333",
              textTransform: "none",
              px: 3,
              py: 1,
              fontWeight: 500,
              "&:hover": {
                borderColor: "#000",
                backgroundColor: "#f2f2f2",
              },
            }}
          >
            Skapa ett resultat
          </Button>
        </Box>

        {/* LAPTOP-BILD */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            maxWidth: 500,
            mt: { xs: 4, md: 0 },
          }}
        >
          <Box
            component="img"
            src="https://i.imgur.com/1B3ye3I.png"
            alt="Laptop"
            sx={{
              width: "100%",
              borderRadius: 2,
            }}
          />
        </Box>
      </Box>


      <Box
  sx={{
    width: "100%",
    backgroundColor: "#f8f8f8",
    display: "flex",
    justifyContent: "center",
    px: 2,
    mt: { xs: 12, md: 16 },
  }}
>
  <Box
    sx={{
      width: "100%",
      maxWidth: 700,           // lite bredare
      textAlign: "center",     // 👈 centrera texten
      ml: { xs: 0, md: -20 },   // 👈 förskjut sektionen lite åt vänster
    }}
  >
    <Typography variant="h6" fontWeight={500} gutterBottom>
      En liten bonus!
    </Typography>
    <Typography variant="body1">
      Vi fick även förtroendet att uppdatera deras logotyp. Grunden består av
      samma motiv som tidigare, men med justerad stilren känsla.
    </Typography>

    <Box
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
    </Box>
  </Box>
</Box>


</Box>





  );
};

export default AsundsholmUppdrag;
