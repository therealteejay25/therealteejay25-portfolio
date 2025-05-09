import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="scroll max-w-screen overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
