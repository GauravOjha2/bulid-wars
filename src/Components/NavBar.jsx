import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 w-full bg-white shadow-md z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-orange-600">Cultural Discovery Map</h1>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <NavLinks />
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-white shadow-lg py-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <NavLinks isMobile />
        </motion.div>
      )}
    </motion.nav>
  );
}
