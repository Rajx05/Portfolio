import Hero from "../components/Hero";
import Projects from "../components/Projects";
import { Element, Link } from "react-scroll";

export default function Home() {
  return (
    <div id="mainPage">
      <Hero />
      <Projects />
      <Element name="third">third</Element>
      <Element name="second">second</Element>
    </div>
  );
}
