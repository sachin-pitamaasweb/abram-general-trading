'use client';

import { Eye, Flag } from 'lucide-react';
import { motion } from 'framer-motion';

export default function VisionMissionSection() {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-14 md:gap-16 lg:gap-20 xl:gap-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        {/* Vision Section */}
        <motion.div
          className="flex flex-col items-center text-center space-y-8 sm:space-y-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <motion.div
            className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full bg-emerald-600 flex items-center justify-center shadow-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ scale: { duration: 0.3 } }}
          >
            <Eye className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 text-white" />
          </motion.div>
          <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Our Vision
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
              Empowering a healthier world, one bite at a time, as the trusted leader in premium food solutions.
            </p>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          className="flex flex-col items-center text-center space-y-8 sm:space-y-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <motion.div
            className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full bg-emerald-600 flex items-center justify-center shadow-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ scale: { duration: 0.3 } }}
          >
            <Flag className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 text-white" />
          </motion.div>
          <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Our Mission
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
              Establishing ABRAM as the most trusted food brand globally, delivering quality & excellence.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
