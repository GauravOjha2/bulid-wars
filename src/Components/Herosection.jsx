import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToSection = () => {
    const nextSection = document.getElementById("exploration-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center bg-gradient-to-r from-orange-500 to-red-600 text-white text-center p-6">
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold tracking-wide mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Discover India’s Cultural Heritage
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl max-w-3xl mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Explore the rich traditions, breathtaking temples, and vibrant festivals across India in an interactive way.
      </motion.p>

      <motion.button
        onClick={scrollToSection}
        className="px-8 py-4 text-lg md:text-xl font-bold bg-white text-orange-600 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
      >
        Start Exploration
      </motion.button>
    </section>
  );
}
