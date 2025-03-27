import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "../Components/Button";
import clsx from "clsx";
import Herosection from "./Herosection";

const filters = [
  { name: "State", options: ["All", "Tamil Nadu", "Uttar Pradesh", "Rajasthan"] },
  { name: "Religion", options: ["All", "Hindu", "Muslim", "Christian", "Sikh", "Buddhist"] },
  { name: "Time of Year", options: ["All", "Spring", "Summer", "Autumn", "Winter"] },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    State: "All",
    Religion: "All",
    "Time of Year": "All",
  });
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleFilterChange = (filter, value) => {
    setSelectedFilters((prev) => ({ ...prev, [filter]: value }));
  };
  const handleDropdownToggle = (filterName) => {
    setOpenDropdown((prev) => (prev === filterName ? null : filterName));
  };

  return (
    <>
      <Herosection />

      {/* Navbar Container */}
      <motion.nav
        className={clsx(
          "fixed top-0 w-full z-50 transition-all duration-500 p-4",
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6">
          {/* Logo */}
          <motion.h1
            className="text-2xl font-bold cursor-pointer tracking-wide text-gray-700" // Changed from text-gray-900 to text-gray-700
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9 }}
          >
            Cultural Discovery Map
          </motion.h1>

          {/* Filters for Desktop */}
          <div className="hidden md:flex space-x-6">
            {filters.map((filter) => (
              <motion.div key={filter.name} className="relative group">
                <button
                  className="flex items-center space-x-2 text-gray-700 font-semibold transition-colors duration-300 hover:text-orange-600" // Changed from text-gray-800 to text-gray-700
                  onClick={() => handleDropdownToggle(filter.name)}
                >
                  {filter.name}
                  <motion.span
                    animate={{ rotate: openDropdown === filter.name ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={18} />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openDropdown === filter.name && (
                    <motion.ul
                      className="absolute top-full left-0 mt-2 w-48 bg-gradient-to-r from-orange-100 via-white to-orange-100 shadow-xl rounded-lg p-2 border border-orange-200" // Added gradient background, shadow, and border
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                    >
                      {filter.options.map((option) => (
                        <motion.li
                          key={option}
                          className="cursor-pointer p-2 text-sm text-gray-700 hover:bg-orange-200 hover:text-orange-700 rounded-lg transition duration-300" // Improved hover effect
                          whileHover={{ scale: 1.05 }}
                          onClick={() => handleFilterChange(filter.name, option)}
                        >
                          {option}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden">
            {isOpen ? <X size={28} className="text-gray-900" /> : <Menu size={28} className="text-gray-900" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-white shadow-lg z-50 flex flex-col items-center justify-center"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            {/* Close Button */}
            <button onClick={toggleMenu} className="absolute top-6 right-6">
              <X size={32} className="text-gray-800" />
            </button>

            {/* Mobile Filters */}
            <div className="flex flex-col space-y-6 text-lg font-semibold text-gray-700"> {/* Changed from text-gray-800 to text-gray-700 */}
              {filters.map((filter) => (
                <motion.div key={filter.name} className="relative">
                  <button
                    className="flex items-center space-x-2 text-xl font-semibold text-gray-700 hover:text-orange-600"
                    onClick={() => handleDropdownToggle(filter.name)}
                  >
                    {filter.name}
                    <ChevronDown size={20} />
                  </button>
                  {openDropdown === filter.name && (
                    <ul className="mt-2 space-y-3 text-center bg-gradient-to-r from-orange-100 via-white to-orange-100 shadow-xl rounded-lg p-2 border border-orange-200"> {/* Added gradient background, shadow, and border */}
                      {filter.options.map((option) => (
                        <motion.li
                          key={option}
                          className="cursor-pointer text-lg text-gray-700 hover:bg-orange-200 hover:text-orange-700 rounded-lg transition duration-300" // Improved hover effect
                          whileHover={{ scale: 1.1 }}
                          onClick={() => handleFilterChange(filter.name, option)}
                        >
                          {option}
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
