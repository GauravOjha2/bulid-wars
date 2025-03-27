import { motion } from "framer-motion";

export default function Temple3() {
  return (
    <motion.div
      className="p-8 bg-gray-100 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl font-bold text-purple-700 mb-4">
        Meenakshi Temple
      </h1>
      <p className="text-2xl text-gray-700 leading-relaxed">
        The Meenakshi Temple, located in Madurai, Tamil Nadu, is one of the most
        iconic temples in India. Dedicated to Goddess Meenakshi and Lord
        Sundareswarar, the temple is renowned for its stunning architecture,
        intricate carvings, and vibrant gopurams (towering gateways). It is a
        symbol of Tamil culture and spirituality, attracting millions of
        devotees and tourists every year.
      </p>
    </motion.div>
  );
}
