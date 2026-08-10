import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import OgImagePage from "../pages/OgImagePage";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/mockadpack" element={<Home />} />
      <Route path="/og-image" element={<OgImagePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}