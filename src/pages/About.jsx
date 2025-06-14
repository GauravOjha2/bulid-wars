import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="min-h-screen mt-16 p-6 sm:p-10 text-center bg-gradient-to-r from-yellow-200 to-orange-300 text-gray-800">
      {/* Added mt-16 to provide space below the navigation */}
      <motion.h1
        className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Us
      </motion.h1>

      <motion.p
        className="text-base sm:text-lg max-w-2xl sm:max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        The Indian Cultural Discovery Map is designed to help users explore the rich heritage of India, including its temples, rituals, and festivals across different religions. Our mission is to create an interactive and educational platform that brings Indian culture closer to everyone.
      </motion.p>
    </section>
  );
}
