import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";
import Education from "./Pages/Education";
import Contact from "./Pages/Contact";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills/>
      <Projects/>
      <Experience/>
      <Education/>
      <Contact/>
      <footer>
      <p>© 2026 Rajeshwari P. All Rights Reserved.</p>
    </footer>
    </>
  );
}

export default App;