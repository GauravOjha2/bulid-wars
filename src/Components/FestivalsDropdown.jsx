import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function FestivalsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const festivals = [
    { name: "Diwali", link: "/festivals/diwali" },
    { name: "Holi", link: "/festivals/holi" },
    { name: "Navratri", link: "/festivals/navratri" },
    { name: "Christmas", link: "/festivals/christmas" },
  ];

  return (
    <div className="relative group">
      <button
        className="flex items-center text-lg font-semibold text-gray-700 hover:text-orange-600 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        Festivals <ChevronDown className="ml-1 transition-transform" size={18} />
      </button>

      {isOpen && (
        <motion.ul
          className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden p-4 space-y-2 transition-transform transform scale-0 group-hover:scale-100"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {festivals.map((festival, index) => (
            <li
              key={index}
              className="px-4 py-2 text-gray-700 hover:bg-orange-100 cursor-pointer rounded-md transition"
            >
              <Link to={festival.link} className="block hover:text-orange-600 transition">
                {festival.name}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
}
