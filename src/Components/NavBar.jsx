import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "../Components//Button";
import clsx from "clsx";
import Herosection from "./Herosection";

const filters = [
  {
    name: "State",
    options: ["All", "Tamil Nadu", "Uttar Pradesh", "Rajasthan"],
  },
  {
    name: "Religion",
    options: ["All", "Hindu", "Muslim", "Christian", "Sikh", "Buddhist"],
  },
  {
    name: "Time of Year",
    options: ["All", "Spring", "Summer", "Autumn", "Winter"],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    State: "All",
    Religion: "All",
    "Time of Year": "All",
  });

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleFilterChange = (filter, value) => {
    setSelectedFilters((prev) => ({ ...prev, [filter]: value }));
  };

  return (
    <>
      <Herosection />
      <motion.nav
        className="fixed top-0 w-full bg-white shadow-md z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
          {/* Logo */}
          <h1 className="text-xl font-bold">Cultural Discovery Map</h1>

          {/* Desktop Filters */}
          <div className="hidden md:flex space-x-4">
            {filters.map(({ name, options }) => (
              <div key={name} className="relative group">
                <Button className="flex items-center space-x-1">
                  <span>{selectedFilters[name]}</span>
                  <ChevronDown size={16} />
                </Button>
                <motion.ul
                  className="absolute left-0 mt-2 w-40 bg-white border rounded-md shadow-lg hidden group-hover:block"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {options.map((option) => (
                    <li
                      key={option}
                      className={clsx(
                        "px-4 py-2 hover:bg-gray-100 cursor-pointer",
                        selectedFilters[name] === option && "font-bold"
                      )}
                      onClick={() => handleFilterChange(name, option)}
                    >
                      {option}
                    </li>
                  ))}
                </motion.ul>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden flex flex-col bg-white shadow-md p-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filters.map(({ name, options }) => (
              <div key={name} className="mb-4">
                <h3 className="text-lg font-semibold mb-2">{name}</h3>
                <div className="flex flex-wrap gap-2">
                  {options.map((option) => (
                    <Button
                      key={option}
                      className={clsx(
                        "text-sm",
                        selectedFilters[name] === option &&
                          "bg-blue-500 text-white"
                      )}
                      onClick={() => handleFilterChange(name, option)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}
