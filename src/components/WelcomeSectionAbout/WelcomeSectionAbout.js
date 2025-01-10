'use client';
import { motion } from 'framer-motion';

const animateParagraph = (text) => {
    const words = text.split(" ");
    return (
      <motion.p
        className="text-gray-600 text-sm sm:text-base leading-relaxed flex flex-wrap"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
        }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="mr-1"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.3 }}
          >
            {word}
          </motion.span>
        ))}
      </motion.p>
    );
};

export default function WelcomeSection() {
  return (
    <div className="flex flex-col w-full">
      {/* Top Banner */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full bg-[#FFD55F] py-6 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20"
      >
        <h1 className="text-white text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          WELCOME TO ABRAM GENERAL TRADING
        </h1>
      </motion.div>

      {/* Content Section */}
      <div className="w-full mx-auto px-6 sm:px-8 md:px-12 py-12 md:py-16 lg:py-20" style={{ maxWidth: '90rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Heading Section */}
          <div className="space-y-4 text-center md:text-left">
            <motion.h2
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="text-3xl font-bold leading-tight"
            >
              We build bridges between
              <br />
              <span className="text-emerald-600 font-bold text-2xl">
                suppliers and customers
              </span>
            </motion.h2>
            {animateParagraph("To build bridges that serve customer needs based on trust and satisfaction between the ability to create fruitful and enduring relationships with customers.")}
          </div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-justify"
          >
            {animateParagraph(`"ABRAM GENERAL TRADING L.L.C." was established in the year 2005, with its operating unit located in New Delhi, India. The company is engaged in offering a wide variety of Agri-Products in overseas markets. Within a short span of time, we find ourselves at a dignified place in the industry by nurturing best practices and innovations through extensive investment in technology, resources, and logistics. We occupy a prominent position in the arena of India's rice export, achieving more than 100 thousand metric tons per annum.`)}

            {animateParagraph(`Global Agro Corporation Pvt. Ltd. (GACPL) has established a true business model that has led to a widening of the global customer base. Our continuous improvement in quality standards with both existing and new products has significantly contributed to India's agro-economy. We offer an extensive range of products suited for the most judicious of customers, with continuous development and improvement in production techniques adhering to European standards. Food safety and quality are assured through the latest state-of-the-art technology and machinery.`)}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
