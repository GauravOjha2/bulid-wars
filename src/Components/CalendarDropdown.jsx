import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function CalendarDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="flex items-center text-lg font-semibold text-gray-700 hover:text-orange-600 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        Calendar <ChevronDown className="ml-1 transition-transform" size={18} />
      </button>

      {isOpen && (
        <motion.div
          className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md p-4 text-gray-700"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Festival Calendar coming soon!
        </motion.div>
      )}
    </div>
  );
}
