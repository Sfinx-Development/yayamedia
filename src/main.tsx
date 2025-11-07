import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Navigation from "./navigation";
import { ScreenSizeProvider } from "./ScreenSizeContext";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
    <BrowserRouter>
    <ScreenSizeProvider>
      <Navigation />
      </ScreenSizeProvider>
    </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
