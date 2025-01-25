import Navbar from "../components/NavBar";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
import "../styles/global.css";

export default function Home() {
  return (
    <div className="bg-background text-textLight h-screen snap-y snap-mandatory overflow-y-scroll">
      <Navbar />
      <div className="snap-container">
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
