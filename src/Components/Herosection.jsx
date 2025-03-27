import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://source.unsplash.com/1600x900/?india,culture')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 text-center text-white px-6">
        {/* Animated Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <span className="bg-gradient-to-r from-orange-400 to-red-600 text-transparent bg-clip-text">
            Discover
          </span>{" "}
          the <span className="text-yellow-400">Soul</span> of India
        </motion.h1>

        {/* Animated Subtext */}
        <motion.p
          className="mt-6 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
        >
          Immerse yourself in India's rich cultural heritage, from ancient temples to grand festivals.
        </motion.p>

        {/* Enhanced Animated Button */}
        <motion.button
          className="mt-8 px-8 py-4 text-xl md:text-2xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold rounded-full shadow-lg transition-transform transform hover:scale-110 relative overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          whileHover={{
            scale: 1.15,
            boxShadow: "0px 0px 20px rgba(255, 140, 0, 0.8)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-red-600 opacity-30"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          ></motion.span>
          Start Exploring
        </motion.button>
      </div>
    </section>
  );
}
