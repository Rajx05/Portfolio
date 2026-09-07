import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Movies from "./components/Movies";
import Home from "./pages/Home.jsx";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

("use client");
import { useRef } from "react";
import { RadiantLines } from "@/components/ui/radiant-lines";

function App() {
  const ref = useRef(null);
  // console.log(movies);
  return (
    <BrowserRouter>
      {/* Radiant lines background */}
      <Navbar />
      <div ref={ref} className="relative h-svh overflow-y-auto">
        <RadiantLines containerRef={ref} className="sticky top-0 h-svh" />
        <div className="flex flex-col items-center justify-center z-10  border-6 ">
          {/* All Components */}
          <div className="z-15 p-4 mb-80 bg-blue-400 border text-center">
            Hello
          </div>

          {/* Home Page */}
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
