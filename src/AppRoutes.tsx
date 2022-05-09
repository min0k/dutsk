import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Free } from "./Free";

import { Home } from "./Home";
import { Settings } from "./Settings";
import { About } from "./About";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/free" element={<Free />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
