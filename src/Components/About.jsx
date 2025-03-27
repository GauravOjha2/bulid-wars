import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-center bg-gradient-to-b from-white to-gray-100">
      {/* Animated Heading with Different Effects */}
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold text-gray-900"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.span
          className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text"
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
        >
          Explore
        </motion.span>{" "}
        India’s Cultural Treasures
      </motion.h2>

      <motion.p
        className="mt-6 text-2xl md:text-3xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
      >
        Dive into the rich heritage of India’s temples, festivals, and rituals through an interactive journey.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <motion.div
          className="bg-white shadow-xl rounded-xl p-8 transform hover:scale-105 transition duration-700"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src="https://tirupatitirumalainfo.com/wp-content/uploads/2020/05/Jagannath-Temple.pictureimageindia.blogspot.com_.jpg "
            alt="Temple"
            className="w-full h-64 object-cover rounded-xl shadow-md"
          />
          <motion.h3
            className="text-3xl font-bold mt-6 text-gray-800"
            initial={{ scale: 0.8, rotate: -5 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Temples & Architecture
          </motion.h3>
          <p className="text-lg text-gray-600 mt-4">
            Explore ancient temples that tell the story of India’s spiritual past.
          </p>
        </motion.div>

        <motion.div
          className="bg-white shadow-xl rounded-xl p-8 transform hover:scale-105 transition duration-700"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src="https://rms.svkm.org.in/wp-content/uploads/2016/03/1405489615Festival-Of-India-2013.jpg "
            alt="Festival"
            className="w-full h-64 object-cover rounded-xl shadow-md"
          />
          <motion.h3
            className="text-3xl font-bold mt-6 text-gray-800"
            initial={{ scale: 0.8, rotate: 5 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Festivals & Celebrations
          </motion.h3>
          <p className="text-lg text-gray-600 mt-4">
            Experience the vibrancy of India’s festivals across all religions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}


