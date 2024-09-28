import { Box, Drawer, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export interface DrawerComponentProps {
  drawerOpen: boolean;
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}
export default function DrawerComponent(props: DrawerComponentProps) {
  const Texting = styled(Typography)`
    font-family: "H2", sans-serif;
    font-variation-settings: "wght" 300;
  `;

  const Atyp = styled(Typography)`
    font-family: "AtypRegularVariable", sans-serif;
    font-variation-settings: "wght" 300;
  `;

  return (
    <Drawer
      anchor="right"
      open={props.drawerOpen}
      onClose={props.toggleDrawer(false)}
    >
      <Box
        sx={{
          width: 250,
          padding: 2,
          backgroundColor: "#F7F7F7",
          height: "100%",
        }}
        role="presentation"
        onClick={props.toggleDrawer(false)} // Stänger drawern när man klickar inuti
        onKeyDown={props.toggleDrawer(false)} // Stänger drawern med tangentbordet
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-end",
            paddingBottom: 4,
          }}
        >
          <Atyp fontSize={15}>Stäng</Atyp>
        </Box>
        <Link href="/case" style={{ textDecoration: "none", color: "#363434" }}>
          <Texting sx={{ paddingY: 2, fontSize: 20 }}>Case</Texting>
        </Link>
        <Link
          href="/tjanster"
          style={{ textDecoration: "none", color: "#363434" }}
        >
          <Texting sx={{ fontSize: 20, paddingBottom: 0.5 }}>Tjänster</Texting>
        </Link>
        <Link
          href="/tjanster/socialamedier"
          style={{ textDecoration: "none", color: "#363434" }}
        >
          <Atyp sx={{ fontSize: 15 }}>Sociala medier</Atyp>
        </Link>
        <Link
          href="/tjanster/webdesign"
          style={{ textDecoration: "none", color: "#363434" }}
        >
          <Atyp sx={{ fontSize: 15 }}>Webdesign</Atyp>
        </Link>
        <Link
          href="/tjanster/konceptutveckling"
          style={{ textDecoration: "none", color: "#363434" }}
        >
          <Atyp sx={{ fontSize: 15 }}>Konceptutveckling</Atyp>
        </Link>
        <Link
          href="/tjanster/copywriting"
          style={{ textDecoration: "none", color: "#363434" }}
        >
          <Atyp sx={{ fontSize: 15 }}>Copywriting</Atyp>
        </Link>
        <Link
          href="/tjanster/grafisk-profil"
          style={{ textDecoration: "none", color: "#363434" }}
        >
          <Atyp sx={{ paddingBottom: 0.5, fontSize: 15 }}>Grafisk profil</Atyp>
        </Link>
        <Link
          href="/om-oss"
          style={{ textDecoration: "none", color: "#363434" }}
        >
          <Texting sx={{ paddingY: 2, fontSize: 20 }}>Om oss</Texting>
        </Link>
      </Box>
    </Drawer>
  );
}
