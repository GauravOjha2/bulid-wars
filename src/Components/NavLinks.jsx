import { useState } from "react";
import FestivalsDropdown from "./FestivalsDropdown";
import TemplesDropdown from "./TemplesDropdown";
import RitualsDropdown from "./RitualsDropdown";
import CalendarDropdown from "./CalendarDropdown";
import { Link } from "react-router-dom";

export default function NavLinks({ isMobile }) {
  const [isFestivalsOpen, setIsFestivalsOpen] = useState(false);
  const [isTemplesOpen, setIsTemplesOpen] = useState(false); // Added state for TemplesDropdown

  const toggleFestivalsDropdown = () => {
    setIsFestivalsOpen((prev) => !prev);
  };

  const toggleTemplesDropdown = () => {
    setIsTemplesOpen((prev) => !prev); // Toggle function for TemplesDropdown
  };

  return (
    <ul className={`flex ${isMobile ? "flex-col space-y-4" : "space-x-6"}`}>
      <Link to="/" className="hover:text-orange-600 transition">Home</Link>
      <Link to="/about" className="hover:text-orange-600 transition">About</Link>
      
      <li className="relative">
        <button
          onClick={toggleFestivalsDropdown}
          className="hover:text-orange-600 transition mb-2" // Added margin-bottom for breathing space
        >
          <FestivalsDropdown />
        </button>
        {isFestivalsOpen}
      </li>
      <li className="relative">
        <button
          onClick={toggleTemplesDropdown}
          className="hover:text-orange-600 transition mb-2"
        >
          <TemplesDropdown />
        </button>
        {isTemplesOpen}
      </li>
      <RitualsDropdown />
      <CalendarDropdown />
    </ul>
  )
}