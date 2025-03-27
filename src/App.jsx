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
import Temple1 from "./Pages/Temple1";
import Temple2 from "./Pages/Temple2";
import Temple3 from "./Pages/Temple3";
import Puja from "./Pages/Puja";
import Havan from "./Pages/Havan";
import Aarti from "./Pages/Aarti";

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
        <Route path="/temples/kashi-vishwanath" element={<Temple1 />} />
        <Route path="/temples/golden-temple" element={<Temple2 />} />
        <Route path="/temples/meenakshi-temple" element={<Temple3 />} />
        <Route path="/rituals/puja" element={<Puja />} />
        <Route path="/rituals/havan" element={<Havan />} />
        <Route path="/rituals/aarti" element={<Aarti />} />
      </Routes>
    </Router>
  );
}

export default App;
