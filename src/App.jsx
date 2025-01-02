import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavigationIconTray from "./components/NavigationIconTray";
import CustomCursor from "./components/CustomCursor";
import useChangeWallpaper from "./hooks/useChangeWallpaper";
import useScreenSize from "./hooks/useScreenSize";

const App = () => {
  const [wallpaper, setWallpaper] = useChangeWallpaper();
  const location = useLocation();
  const isSmallScreen = useScreenSize();

  if (isSmallScreen) {
    return (
      <div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999] bg-black bg-opacity-80 text-white p-4 md:p-6 rounded-lg text-center text-sm md:text-lg w-11/12 md:w-auto">
        For the best experience, please switch to a PC or larger screen device.
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen w-screen transition-all duration-300 ${wallpaper}`}
    >
      <Navbar currentPath={location.pathname} />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <NavigationIconTray setWallpaper={setWallpaper} currentPath={location.pathname} />
      {/* <CustomCursor /> */}
    </div >
  );
};

export default App;
