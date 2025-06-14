import { motion } from "framer-motion";

export default function Temple1() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 font-sans">
      <motion.h1
        className="text-5xl font-extrabold text-purple-700 mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Kashi Vishwanath Temple
      </motion.h1>
      <motion.p
        className="text-lg text-gray-700 text-center max-w-2xl leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        The Kashi Vishwanath Temple is one of the most famous Hindu temples
        dedicated to Lord Shiva. Located in Varanasi, it stands on the western
        bank of the holy river Ganga. The temple has been a central place of
        worship for Hindus and holds immense cultural and spiritual significance.
      </motion.p>
    </div>
  );
}
