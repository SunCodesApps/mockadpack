import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Packs from "../pages/Packs";

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packs" element={<Packs />} />
    </Routes>
  );
}