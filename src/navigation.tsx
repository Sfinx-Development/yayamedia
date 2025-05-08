import { Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import Index from "./pages/Index";
import RootLayout from "./pages/Rootlayout";
import Services from "./pages/Services";
import Yaya from "./pages/Yaya";
import { Navigate } from "react-router-dom";
import AsundsholmProject from "./pages/Projects";
// import SleipnerUppdrag from "./components/SleipnerUppdrag";
import ProjectsLayout from "./pages/ProjectsLayout";
import SleipnerProject from "./pages/SleipnerProject";

const Navigation = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Index />}></Route>
        <Route path="yaya" element={<Yaya />}></Route>
        <Route path="tjanster" element={<Services />}></Route>

        {/* Nestade projektsidor */}
        <Route path="projects" element={<ProjectsLayout />}>
  {/* <Route index element={<AsundsholmProject />} /> */}
  <Route index element={<Navigate to="asundsholm" replace />} />
  <Route path="asundsholm" element={<AsundsholmProject />} />
  <Route path="sleipner" element={<SleipnerProject />} />
</Route>


        {/* <Route path="projects" element={<AsundsholmProject />}></Route>
        <Route path="sleipner" element={<SleipnerUppdrag />}></Route> */}
        <Route path="*" element={<Error />}></Route>
      </Route>
    </Routes>
  );
};

export default Navigation;
