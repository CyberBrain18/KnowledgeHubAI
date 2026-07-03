import { Routes, Route } from "react-router-dom";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer"
import Home from "@/pages/Home";
import Library from "@/pages/Library";
import About from "@/pages/About";

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}