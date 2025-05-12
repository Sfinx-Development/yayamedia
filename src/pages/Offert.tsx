import { Box } from "@mui/material";
import OffertForm from "../components/OffertForm";
// import HelmetWrapper from "../components/HelmetWrapper";

export default function Offert() {
  return (
    <>
      {/* <HelmetWrapper
        title="Städtjänster i Borås | Pris & Offert – Städtjejerna"
        description="Få ett kostnadsfritt prisförslag för hemstäd, flyttstäd eller företagsstäd i Borås. Vi skräddarsyr en lösning utifrån dina behov."
        url="https://www.stadtjejerna.se/offert"
        image="https://i.imgur.com/bo2l48Z.jpeg"
      /> */}

      <Box
        style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            padding: 0,
            margin: 0,
            overflowX: "hidden",
            width: "100%",
            alignItems: "start",
            flexGrow: 1,
        }}
      >
        {/* <OffertForm /> */}
        <Box
                sx={{ width: "100%", position: "relative", backgroundColor: "#F7F7F7" }}
              >
                <OffertForm />
              </Box>
      </Box>
    </>
  );
}
