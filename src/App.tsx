import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import AISystems from "./sections/AISystems";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";
import Footer from "./components/layout/Footer";
import Timeline from "./sections/Timeline";
import OpenTo from "./sections/OpenTo";

function App() {
  return (
    <>
      <Navbar />

      <main className="space-y-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <AISystems />
        <Resume />
        <OpenTo />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;