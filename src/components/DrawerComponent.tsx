import { Box, Drawer, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export interface DrawerComponentProps {
  drawerOpen: boolean;
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const Texting = styled(Typography)`
  font-family: "H2", sans-serif;
  font-variation-settings: "wght" 300;
`;

const Atyp = styled(Typography)`
  font-family: "atyp-bl-variable", sans-serif;
  font-variation-settings: "ital" 0, "opsz" 6, "wght" 280;
`;

const CrossLine = styled(Box)`
  background-color: #363434;
  height: 2px; // Justera höjden
  width: 30px; // Justera bredden
  margin: 0 2px;
  transition: transform 0.3s ease;

  &:hover {
    cursor: pointer; // Markera att det är klickbart
  }
`;

export default function DrawerComponent(props: DrawerComponentProps) {
  return (
    // <Drawer
    //   anchor="right"
    //   open={props.drawerOpen}
    //   onClose={props.toggleDrawer(false)}
    // >
    <Drawer
      anchor="right"
      open={props.drawerOpen}
      onClose={props.toggleDrawer(false)}
      sx={{
        "& .MuiDrawer-paper": {
          height: {
            xs: "100%",
            md: "85%",
            xl: "80%",
          },
          top: "auto",
        },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: 260 }, // Full bredd på små skärmar, 250px på större
          padding: 3,
          backgroundColor: "#F7F7F7",
          height: "100%",
          paddingLeft: { xs: 3, sm: 3, md: 3, xl: 3 },
        }}
        role="presentation"
        onClick={props.toggleDrawer(false)} // Stänger drawern när man klickar inuti
        onKeyDown={props.toggleDrawer(false)} // Stänger drawern med tangentbordet
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            alignItems: "flex-end",
            paddingBottom: 4,
            marginTop: 4,
            marginRight: 15,
          }}
        >
          <CrossLine
            sx={{
              transform: "rotate(20deg) translateY(0px)",
              marginBottom: "3px",
              borderRadius: 20,
              width: 25,
              // marginRight: 8,
              marginRight: { xs: 7, md: 3, xl: 3 },
            }}
          />
          <CrossLine
            sx={{
              transform: "rotate(-15deg) translateY(-6px)",
              width: 45,
              borderRadius: 20,
              marginRight: { xs: 5, md: 1, xl: 1 },
              // marginRight: 6,
            }}
          />
          <Atyp
            sx={{
              marginRight: { xs: 5, md: 1, xl: 1 },
              fontSize: { xs: 16, md: 16, xl: 20 },
            }}
          >
            Stäng
          </Atyp>
        </Box>
        <Link to="/#case" style={{ textDecoration: "none", color: "#363434" }}>
          <Texting sx={{ paddingY: 2, fontSize: { xs: 18, sm: 20, xl: 30 } }}>
            Case
          </Texting>
        </Link>
        <Link
          to="/tjanster"
          style={{ textDecoration: "none", color: "#363434" }}
        >
          <Texting
            sx={{ fontSize: { xs: 18, sm: 20, xl: 30 }, paddingBottom: 0.5 }}
          >
            Tjänster
          </Texting>
        </Link>
        <Link
          to="/tjanster#socialamedier"
          style={{ textDecoration: "none", color: "#363434" }}
        >
          <Atyp sx={{ fontSize: { xs: 14, sm: 16, xl: 20 } }}>
            Sociala medier
          </Atyp>
        </Link>
        <Link
          to="/tjanster#webbdesign"
          style={{ textDecoration: "none", color: "#363434" }}
        >
          <Atyp sx={{ fontSize: { xs: 14, sm: 16, xl: 20 } }}>Webdesign</Atyp>
        </Link>
        <Link
          to="/tjanster#konceptutveckling"
          style={{ textDecoration: "none", color: "#363434" }}
        >
          <Atyp sx={{ fontSize: { xs: 14, sm: 16, xl: 20 } }}>
            Konceptutveckling
          </Atyp>
        </Link>
        <Link
          to="/tjanster#copywriting"
          style={{ textDecoration: "none", color: "#363434" }}
        >
          <Atyp sx={{ fontSize: { xs: 14, sm: 16, xl: 20 } }}>Copywriting</Atyp>
        </Link>
        <Link
          to="/tjanster#grafisk-profil"
          style={{ textDecoration: "none", color: "#363434" }}
        >
          <Atyp
            sx={{ paddingBottom: 0.5, fontSize: { xs: 14, sm: 16, xl: 20 } }}
          >
            Grafisk profil
          </Atyp>
        </Link>
        <Link to="/yaya" style={{ textDecoration: "none", color: "#363434" }}>
          <Texting sx={{ paddingY: 2, fontSize: { xs: 18, sm: 20, xl: 30 } }}>
            Om oss
          </Texting>
        </Link>
      </Box>
    </Drawer>
  );
}
