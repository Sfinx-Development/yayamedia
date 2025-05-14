import { Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import Index from "./pages/Index";
import RootLayout from "./pages/Rootlayout";
import Services from "./pages/Services";
import Yaya from "./pages/Yaya";

import AsundsholmProject from "./pages/Projects";
// import SleipnerUppdrag from "./components/SleipnerUppdrag";

import SleipnerProject from "./pages/SleipnerProject";
// import OffertForm from "./components/OffertForm";
import Offert from "./pages/Offert";

const Navigation = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Index />}></Route>
        <Route path="yaya" element={<Yaya />}></Route>
        <Route path="tjanster" element={<Services />}></Route>
        <Route path="asundsholm" element={<AsundsholmProject />}></Route>
        <Route path="sleipner" element={<SleipnerProject />} />
        <Route path="/offert" element={<Offert />} />

      
        <Route path="*" element={<Error />}></Route>

 
</Route>



        {/* <Route path="projects" element={<AsundsholmProject />}></Route>
        <Route path="sleipner" element={<SleipnerUppdrag />}></Route> */}
      
   
    </Routes>
  );
};

export default Navigation;
