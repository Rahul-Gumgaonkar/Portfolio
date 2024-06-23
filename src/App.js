import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Project from "./components/project/Project";
import Projects from "./components/projects/Projects";
import Home from "./pages/home/Home";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="main">
      <Navbar />
      <Profile />
      <About />
      <Skills />
      <Projects />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
