import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import AboutPage from "./pages/About";
import Diwali from "./Pages/Festivals/Diwali";
import Holi from "./Pages/Festivals/Holi";
import Navratri from "./Pages/Festivals/Navratri";
import Christmas from "./Pages/Festivals/Christmas";
import NextSection from "./Components/Section2";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/festivals/diwali" element={<Diwali />} />
        <Route path="/festivals/holi" element={<Holi />} />
        <Route path="/festivals/navratri" element={<Navratri />} />
        <Route path="/festivals/christmas" element={<Christmas />} />
      </Routes>
    </Router>
  );
}

export default App;
