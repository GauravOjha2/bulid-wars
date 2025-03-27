import { motion } from "framer-motion";

export default function NextSection() {
  return (
    <section
      id="exploration-section"
      className="relative w-full max-w-full overflow-hidden py-16 px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col items-center text-center"
      style={{
        background: "linear-gradient(135deg, #FFE4B5, #FFFACD)", // Lighter gradient colors
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Decorative Elements */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 bg-orange-300 rounded-full opacity-20 blur-3xl"
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-300 rounded-full opacity-20 blur-3xl"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Section Heading */}
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-wide" // Increased text size
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 2, color: "#ff6347" }} // Added color change on hover
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          fontFamily: "'Playfair Display', serif", // Updated font family
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Added text shadow
        }}
      >
        Explore India's Timeless Cultural Wonders
      </motion.h2>

      {/* Section Subtext */}
      <motion.p
        className="text-lg md:text-xl text-gray-600 max-w-3xl mb-8 leading-relaxed px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Delve into the rich history, architectural marvels, and fascinating stories behind India's diverse cultural sites, traditions, and festivals.
      </motion.p>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center transform transition hover:scale-105 duration-300 ease-in-out"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <motion.img
              src={feature.image}
              alt={feature.title}
              className="w-56 h-56 md:w-32 md:h-32 mb-4" // Increased sizes
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <h3 className="text-2xl font-semibold text-gray-800">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const features = [
  {
    title: "Ancient Temples",
    description: "Experience the grandeur of India's sacred temples and their centuries-old traditions.",
    image: "https://tirupatitirumalainfo.com/wp-content/uploads/2020/05/Jagannath-Temple.pictureimageindia.blogspot.com_.jpg",
  },
  {
    title: "Cultural Festivals",
    description: "Celebrate vibrant festivals that showcase India's diverse heritage and unity.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxdOTFCennOXaqFZgFeSqpcBu-jYtoMRsnYA&s",
  },
  {
    title: "Architectural Marvels",
    description: "Explore India's breathtaking palaces, forts, and monuments that tell stories of the past.",
    image: "https://img.freepik.com/premium-photo/majestic-fusion-taj-mahal-architectural-marvel-ink-wash-collage_908344-28505.jpg ",
  },
  {
    title: "Traditional Rituals",
    description: "Immerse yourself in India's unique spiritual practices and cultural ceremonies.",
    image: "https://fairgaze.com/images/UploadedImages/thumbs/0295145_0295145_inhihfg.jpg",
  },
  {
    title: "Regional Cuisine",
    description: "Taste the incredible variety of regional Indian dishes with deep-rooted traditions.",
    image: "https://wordsofuru.art.blog/wp-content/uploads/2020/10/16032762719453072496982744929771.jpg",
  },
  {
    title: "Mythological Tales",
    description: "Unravel fascinating stories from India's epics, legends, and folklore.",
    image: "https://rukminim1.flixcart.com/image/300/300/l1fc0i80/regionalbooks/f/k/b/tales-from-indian-myths-and-legends-bhim-arjun-bhishm-karna-original-imagdy6cynbpcdqy.jpeg",
  },
];
