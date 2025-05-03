import "./App.css";
import Hero from "./components/Hero";
import BackGround from "./assets/hero.svg";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Education from "./components/Education";
import { useEffect } from "react";
import Certificates from "./components/Certificates";
import SnackBar from "./components/SnackBar";
// import Testimonial from "./components/Testimonial";

function App() {
  // To scroll to the specific section
  const sec = window.location.hash;
  useEffect(() => {
    if (sec) {
      const element = document.querySelector(sec);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [sec]);

  return (
    <main>
      <img
        src={BackGround}
        className="h-screen w-screen full object-contain absolute top-0 left-0 z-0 hero-image"
      />
      <section className="h-screen w-screen overflow-y-scroll absolute top-0 left-0 z-1 snap-y snap-mandatory snap-always">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        {/* <Testimonial /> */}
        <Certificates />
        <Contact />

        {/* for redirecting to blog pages */}
        <SnackBar />
      </section>
    </main>
  );
}

export default App;
