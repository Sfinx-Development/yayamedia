import { Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import Index from "./pages/Index";
import RootLayout from "./pages/Rootlayout";
import Services from "./pages/Services";
import Yaya from "./pages/Yaya";

const Navigation = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Index />}></Route>
        <Route path="yaya" element={<Yaya />}></Route>
        <Route path="tjanster" element={<Services />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Route>
    </Routes>
  );
};

export default Navigation;
