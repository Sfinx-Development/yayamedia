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
// import styled from "@emotion/styled";

const AsundsholmUppdrag: React.FC = () => {
  //   const Texting = styled(Typography)<TypographyProps>`
  //   font-family: "H3", sans-serif;
  //   font-variation-settings: "wght" 300;
  // `;

  // const TextingATYP = styled(Typography)<TypographyProps>`
  //   font-family: "atyp-bl-variable", sans-serif;
  //   font-variation-settings: "ital" 0, "opsz" 6, "wght" 280;
  // `;
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
          px: { xs: 2, md: 4 },
        }}
      >
        {/* TEXT */}
        <Box
          sx={{
            flex: 1,
            maxWidth: { xs: "100%", md: 450 }, // smalare än tidigare
            pr: { md: 4 },
            mt: { md: -13 },
          }}
        >
          {/* <Texting component="h2" sx={{ fontSize: { xs: 18, md: 20, xl: 30 } }}>
        Åsundsholm
          </Texting> */}
          <Typography variant="h4" fontWeight={300} gutterBottom>
            Åsundsholm
          </Typography>
          <Typography variant="h6" fontWeight={400} gutterBottom>
            Uppdrag
          </Typography>
          <Typography variant="body1" paragraph>
            Åsundsholm är mer än bara en plats för golfentusiaster – det är en
            destination där upplevelser skapas och minnen formas. Vårt uppdrag
            var att skapa en modern och inspirerande hemsida som speglar hela
            Åsundsholms själ. Från den natursköna golfbanan vid Åsundens kant,
            till den hemtrevliga atmosfären i de nyrenoverade hotellrummen.
          </Typography>
          <Typography variant="body1" paragraph>
            Vi ville fånga känslan av att vakna upp till fågelkvitter, ta en
            morgonpromenad längs sjön och sedan njuta av en runda golf. Genom
            att använda stora, inbjudande bilder och ett språk som talar direkt
            till besökaren, skapade vi en hemsida som fungerar som en
            förlängning av den upplevelse du får på plats.
          </Typography>
          <Typography variant="body1" paragraph>
            Sammanfattningsvis, vårt mål var att leverera en hemsida som ger en
            försmak till allt det som gör Åsundsholm unikt – en plats där varje
            besök blir en personlig och minnesvärd upplevelse.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              mt: 2,
              backgroundColor: "#D6D0C6",
              borderColor: "#D6D0C6",
              color: "#333",
              textTransform: "none",
              px: 3,
              py: 1,
              fontWeight: 500,
              "&:hover": {
                borderColor: "#D6D0C6",
                backgroundColor: "#D6D0C6",
              },
            }}
          >
            Kika på resultatet!
          </Button>
        </Box>

        {/* LAPTOP-BILD */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            // justifyContent: "center",
            justifyContent: "flex-end", // högerjustera bilden
            maxWidth: 750,
            mt: { xs: 4, md: 0 }, // 👈 justeras så den kommer i samma höjd
            ml: { md: 2 },
            mr: { md: -20, xl: -12 },
            // 👈 förskjut mer åt höger på desktop
            // maxWidth: 500,
            // mt: { xs: 4, md: 0 },
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
    </Box>
  );
};

export default AsundsholmUppdrag;
