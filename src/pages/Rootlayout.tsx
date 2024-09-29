import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function RootLayout() {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        flexDirection: "column",
        minHeight: "100vh", // Sätter min höjd till 100% av viewport
        backgroundColor: "red",
        width: "100%",
      }}
    >
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

      <footer
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          padding: 0,
          margin: 0,
          maxWidth: "none",
          zIndex: 3,
          position: "relative", // Använd relativ positionering
        }}
      >
        <Footer />
      </footer>
    </div>
  );
}
