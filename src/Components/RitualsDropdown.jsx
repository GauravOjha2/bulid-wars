import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function RitualsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const rituals = [
    { name: "Puja", link: "/rituals/puja" },
    { name: "Havan", link: "/rituals/havan" },
    { name: "Aarti", link: "/rituals/aarti" },
  ];

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
              <Link to={ritual.link} className="hover:text-orange-600 transition">
                {ritual.name}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
}
