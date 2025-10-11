import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";

export default function RootLayout() {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#F7F7F7",
        width: "100%",
      }}
    >
      <ScrollToTop />
      <Header />

      <main
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          width: "100%",
          zIndex: 3,
          position: "relative",
          alignItems: "center",
        }}
      >
        <Outlet />
      </main>

      {/* <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          padding: 0,
          margin: 0,
          maxWidth: "none",
          // zIndex: 3,
          // position: "relative", // Använd relativ positionering
        }}
      > */}
      {/* <Footer /> */}
      {/* </div> */}
    </div>
  );
}
