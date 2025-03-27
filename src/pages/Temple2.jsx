import { motion } from "framer-motion";

export default function Temple2() {
  return (
    <div className="bg-yellow-50 min-h-screen flex flex-col items-center justify-center p-6">
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold text-yellow-800 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Golden Temple
      </motion.h1>
      <motion.p
        className="text-lg md:text-2xl text-gray-700 text-center max-w-3xl leading-relaxed"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        The Golden Temple, also known as Sri Harmandir Sahib, is a stunning
        architectural marvel and a spiritual beacon for millions. Located in
        Amritsar, Punjab, it is the holiest shrine in Sikhism. The temple's
        golden facade reflects beautifully in the surrounding sacred pool,
        creating a serene and awe-inspiring atmosphere.
      </motion.p>
    </div>
  );
}
