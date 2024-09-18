import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import image from "./assets/dark2.jpg";
import About from "./components/About";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import Contact from "./components/contact";
import ResumePage from "./components/Resume";
import image2 from "./assets/pexels-pixabay-531767.jpg";
import { useTheme } from "./ThemeContext";
import Project from "./components/Project";

function App() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className="app "
      style={{ backgroundImage: `url(${!isDarkMode ? image2 : image})` }}
    >
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Project />}></Route>
          <Route path="/resume" element={<ResumePage />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
