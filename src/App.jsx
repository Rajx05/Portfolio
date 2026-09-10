import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Movies from "./components/Movies";
import Home from "./pages/Home.jsx";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import {
  Events,
  scrollSpy,
  animateScroll as scroll,
  Element,
  Link,
} from "react-scroll";

("use client");
import { useEffect, useRef } from "react";
import { RadiantLines } from "@/components/ui/radiant-lines";

function App() {
  const ref = useRef(null);

  useEffect(() => {
    Events.scrollEvent.register("begin", function (to, element) {
      console.log("begin", to, element);
    });

    Events.scrollEvent.register("end", function (to, element) {
      console.log("end", to, element);
    });

    scrollSpy.update();
  }, []);
  // console.log(movies);
  return (
    <BrowserRouter>
      {/* Radiant lines background */}
      <div ref={ref} id="page" className="relative h-svh overflow-y-auto">
        <RadiantLines containerRef={ref} className="sticky top-0 h-svh" />
        <div className="absolute flex flex-col gap-16 lg:gap-36 top-0 left-0 right-0 mt-0 z-10">
          {/* All Components */}
          <Navbar />

          {/* Home Page */}
          <div id="1">
            <Hero />
          </div>
          <div id="2">
            <Projects />
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
