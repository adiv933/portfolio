import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavigationIconTray from "./components/NavigationIconTray";
import CustomCursor from "./components/CustomCursor";
import useChangeWallpaper from "./hooks/useChangeWallpaper";

const App = () => {
  const [wallpaper, setWallpaper] = useChangeWallpaper();

  return (
    <div
      className={`min-h-screen w-screen transition-colors duration-300 ${wallpaper}`}
    >
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <NavigationIconTray setWallpaper={setWallpaper} />
      {/* <CustomCursor /> */}
    </div >
  );
};

export default App;
