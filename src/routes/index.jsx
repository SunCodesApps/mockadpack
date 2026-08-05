import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import OgImagePage from "../pages/OgImagePage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/mockadpack" element={<Home />} />
      <Route path="/ogimage" element={<OgImagePage />} />
    </Routes>
  );
}