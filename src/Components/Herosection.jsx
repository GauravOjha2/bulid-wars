import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-cover bg-center" 
      style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?india,culture')" }}>
      
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
          Discover the <span className="text-orange-400">Soul</span> of India
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

        {/* Call-to-Action Button */}
        <motion.button
          className="mt-8 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-lg shadow-lg transition-transform transform hover:scale-105"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Start Exploring
        </motion.button>
      </div>

      {/* Floating Elements */}
      <motion.img 
        src="https://source.unsplash.com/200x200/?indian-festival" 
        alt="Festival"
        className="absolute top-20 left-10 w-24 md:w-32 rounded-full shadow-lg"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 1.2 }}
      />
      
      <motion.img 
        src="https://source.unsplash.com/200x200/?indian-temple" 
        alt="Temple"
        className="absolute bottom-20 right-10 w-24 md:w-32 rounded-full shadow-lg"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 1.2 }}
      />
    </section>
  );
}
