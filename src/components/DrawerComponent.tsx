import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, Drawer, IconButton, styled, Typography } from "@mui/material";
import { useState } from "react";
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
  background-color: #f3d9df;
  height: 3px;
  width: 40px;
  margin: 0 2px;
  transition: transform 0.3s ease;

  &:hover {
    cursor: pointer;
  }
`;

export default function DrawerComponent(props: DrawerComponentProps) {
  const [isOpen, setIsopen] = useState(false);

  return (
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
          width: { xs: 260, sm: 260 },
          padding: 3,
          backgroundColor: "#363434",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
        role="presentation"
        onKeyDown={props.toggleDrawer(false)}
      >
        {/* Stäng-knapp högst upp */}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            alignItems: "flex-end",
            paddingBottom: 4,
            marginTop: 2,
            marginRight: 15,
          }}
        >
          <CrossLine
            sx={{
              transform: "rotate(0deg) translateY(0px)",
              marginBottom: "3px",
              borderRadius: 20,
              width: { xs: 35, xl: 42 },
            }}
          />
          <Atyp
            onClick={props.toggleDrawer(false)}
            sx={{
              cursor: "pointer",
              color: "#F7F7F7",
              fontSize: { xs: 14, md: 14, xl: 18 },
            }}
          >
            Stäng
          </Atyp>
        </Box>

        {/* Navigationslänkar */}
        <Link to="/#case" style={{ textDecoration: "none", color: "#F7F7F7" }}>
          <Texting
            sx={{
              fontSize: { xs: 18, sm: 20, xl: 30 },
              paddingBottom: 0.5,
              paddingLeft: { xs: 0.5, md: 2 },
            }}
          >
            Case
          </Texting>
        </Link>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingLeft: { xs: 0.5, md: 2 },
            paddingBottom: 0.5,
          }}
        >
          <Link
            to="/tjanster"
            style={{ textDecoration: "none", color: "#F7F7F7" }}
          >
            <Texting sx={{ fontSize: { xs: 18, sm: 20, xl: 30 } }}>
              Tjänster
            </Texting>
          </Link>
          <IconButton onClick={() => setIsopen(!isOpen)}>
            <KeyboardArrowDown sx={{ color: "white" }} />
          </IconButton>
        </Box>

        {isOpen && (
          <>
            <Link
              to="/tjanster#socialamedier"
              style={{
                textDecoration: "none",
                color: "#F7F7F7",
                paddingTop: 0.5,
              }}
            >
              <Atyp
                sx={{
                  fontSize: { xs: 14, sm: 16, xl: 20 },
                  paddingLeft: { xs: 0.5, md: 2 },
                }}
              >
                Sociala medier
              </Atyp>
            </Link>
            <Link
              to="/tjanster#webbdesign"
              style={{
                textDecoration: "none",
                color: "#F7F7F7",
                paddingTop: 0.5,
              }}
            >
              <Atyp
                sx={{
                  fontSize: { xs: 14, sm: 16, xl: 20 },
                  paddingLeft: { xs: 0.5, md: 2 },
                }}
              >
                Webdesign
              </Atyp>
            </Link>
            <Link
              to="/tjanster#konceptutveckling"
              style={{
                textDecoration: "none",
                color: "#F7F7F7",
                paddingTop: 0.5,
              }}
            >
              <Atyp
                sx={{
                  fontSize: { xs: 14, sm: 16, xl: 20 },
                  paddingLeft: { xs: 0.5, md: 2 },
                }}
              >
                Konceptutveckling
              </Atyp>
            </Link>
            <Link
              to="/tjanster#copywriting"
              style={{
                textDecoration: "none",
                color: "#F7F7F7",
                paddingTop: 0.5,
              }}
            >
              <Atyp
                sx={{
                  fontSize: { xs: 14, sm: 16, xl: 20 },
                  paddingLeft: { xs: 0.5, md: 2 },
                }}
              >
                Copywriting
              </Atyp>
            </Link>
            <Link
              to="/tjanster#grafisk-profil"
              style={{
                textDecoration: "none",
                color: "#F7F7F7",
                paddingTop: 0.5,
              }}
            >
              <Atyp
                sx={{
                  paddingBottom: 0.5,
                  fontSize: { xs: 14, sm: 16, xl: 20 },
                  paddingLeft: { xs: 0.5, md: 2 },
                }}
              >
                Grafisk profil
              </Atyp>
            </Link>
          </>
        )}

        <Link to="/yaya" style={{ textDecoration: "none", color: "#F7F7F7" }}>
          <Texting
            sx={{
              paddingLeft: { xs: 0.5, md: 2 },
              fontSize: { xs: 18, sm: 20, xl: 30 },
              paddingBottom: 0.5,
            }}
          >
            Om oss
          </Texting>
        </Link>
        <Link to="/yaya" style={{ textDecoration: "none", color: "#F7F7F7" }}>
          <Texting
            sx={{
              fontSize: { xs: 18, sm: 20, xl: 30 },
              paddingLeft: { xs: 0.5, md: 2 },
            }}
          >
            Kontakt
          </Texting>
        </Link>

        {/* Flexibel mellanrum för att trycka ner loggan */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Loggan längst ner */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 2,
          }}
        >
          <img
            src="https://i.imgur.com/bOoA1jT.png"
            alt="Yaya Media logo"
            style={{ height: 40 }}
          />
        </Box>
      </Box>
    </Drawer>
  );
}
