import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function RitualsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const rituals = ["Aarti", "Chhath Puja", "Ram Navami"];

  return (
    <div className="relative">
      <button
        className="flex items-center text-lg font-semibold text-gray-700 hover:text-orange-600 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        Rituals <ChevronDown className="ml-1 transition-transform" size={18} />
      </button>

      {isOpen && (
        <motion.ul
          className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {rituals.map((ritual, index) => (
            <li
              key={index}
              className="px-4 py-2 text-gray-700 hover:bg-orange-100 cursor-pointer"
            >
              {ritual}
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
}
