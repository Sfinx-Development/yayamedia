import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const RootLayout = () => {
  //   const isMobile = window.innerWidth <= 820;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        minHeight: "100vh",
        backgroundColor: "red",
        alignItems: "center",
        width: "100%",
        margin: 0,
        padding: 0,
        flexGrow: 1,
      }}
    >
      <Header />

      <main
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          minHeight: "100vh",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Outlet />
      </main>

      <footer
        style={{
          width: "100%",
          display: "flex",
          flex: 1,
          flexDirection: "column",
          padding: 0,
          margin: 0,
          maxWidth: "none",
        }}
      >
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
