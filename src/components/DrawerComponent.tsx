import { Box, Drawer, IconButton, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

import { KeyboardArrowDown } from "@mui/icons-material";

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
  background-color: #f3d9df;
  height: 3px; // Justera höjden
  width: 40px; // Justera bredden
  margin: 0 2px;
  transition: transform 0.3s ease;

  &:hover {
    cursor: pointer; // Markera att det är klickbart
  }
`;

export default function DrawerComponent(props: DrawerComponentProps) {
  const [isOpen, setIsopen] = useState(false);

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
          backgroundColor: "#363434",
          height: "100%",
          paddingLeft: { xs: 3, sm: 3, md: 3, xl: 3 },
        
       
        }}
        role="presentation"
       
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
              transform: "rotate(0deg) translateY(0px)",
              marginBottom: "3px",
              borderRadius: 20,

              width: {xs:35, xl:42},
              // marginRight: 8,
            }}
          />

          <Atyp onClick={props.toggleDrawer(false)} // Stänger drawern när man klickar inuti
            sx={{
              cursor: "pointer",
              color: "#F7F7F7",
              fontSize: { xs: 14, md: 14, xl: 18 },
            }}
          >
            Stäng
          </Atyp>
        </Box>
        <Link to="/#case" style={{ textDecoration: "none", color: "#F7F7F7" }}>
          <Texting
            sx={{ fontSize: { xs: 18, sm: 20, xl: 30 }, paddingBottom: 0.5,
            paddingLeft:2, }}
          >
            Case
          </Texting>
        </Link>
        <Box sx={{ display: "flex", alignItems: "center",paddingLeft:2 }}>
          <Link
            to="/tjanster"
            style={{ textDecoration: "none", color: "#F7F7F7" }}
          >
            <Texting
              sx={{ fontSize: { xs: 18, sm: 20, xl: 30 }, paddingBottom: 0.5 }}
            >
              Tjänster
            </Texting>
          </Link>
          <IconButton
            onClick={() => {
              setIsopen(!isOpen);
            }}
          >
            <KeyboardArrowDown
              sx={{
                color: "white",
                paddingLeft: "5px",
              }}
            />
          </IconButton>
        </Box>
        {isOpen && (
          <>
            <Link
              to="/tjanster#socialamedier"
              style={{ textDecoration: "none", color: "#F7F7F7" }}
            >
              <Atyp sx={{ fontSize: { xs: 14, sm: 16, xl: 20 } ,paddingLeft:2}}>
                Sociala medier
              </Atyp>
            </Link>
            <Link
              to="/tjanster#webbdesign"
              style={{ textDecoration: "none", color: "#F7F7F7" }}
            >
              <Atyp sx={{ fontSize: { xs: 14, sm: 16, xl: 20 },paddingLeft:2 }}>
                Webdesign
              </Atyp>
            </Link>
            <Link
              to="/tjanster#konceptutveckling"
              style={{ textDecoration: "none", color: "#F7F7F7" }}
            >
              <Atyp sx={{ fontSize: { xs: 14, sm: 16, xl: 20 },paddingLeft:2 }}>
                Konceptutveckling
              </Atyp>
            </Link>
            <Link
              to="/tjanster#copywriting"
              style={{ textDecoration: "none", color: "#F7F7F7" }}
            >
              <Atyp sx={{ fontSize: { xs: 14, sm: 16, xl: 20 },paddingLeft:2 }}>
                Copywriting
              </Atyp>
            </Link>
            <Link
              to="/tjanster#grafisk-profil"
              style={{ textDecoration: "none", color: "#F7F7F7" }}
            >
              <Atyp
                sx={{
                  paddingBottom: 0.5,
                  fontSize: { xs: 14, sm: 16, xl: 20 },paddingLeft:2
                }}
              >
                Grafisk profil
              </Atyp>
            </Link>
          </>
        )}

        <Link to="/yaya" style={{ textDecoration: "none", color: "#F7F7F7" }}>
          <Texting
            sx={{ paddingLeft:2,fontSize: { xs: 18, sm: 20, xl: 30 }, paddingBottom: 0.5 }}
          >
            Om oss
          </Texting>
        </Link>
        <Link to="/yaya" style={{ textDecoration: "none", color: "#F7F7F7" }}>
          <Texting sx={{ fontSize: { xs: 18, sm: 20, xl: 30 },paddingLeft:2 }}>
            Kontakt
          </Texting>
        </Link>
      </Box>
    </Drawer>
  );
}
