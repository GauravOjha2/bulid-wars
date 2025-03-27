import { useState } from "react";
import { motion } from "framer-motion";

const Herosection = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{ backgroundImage: "url('/images/indian-culture.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <motion.h1
            className="text-4xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Discover India’s Rich Cultural Heritage
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Explore temples, festivals, and rituals in an interactive way.
          </motion.p>
          <motion.button
            className="mt-6 px-6 py-3 bg-orange-500 rounded-lg text-lg hover:bg-orange-600 transition"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Start Exploring
          </motion.button>
        </div>
      </section>
    </>
  );
};

export default Herosection;
