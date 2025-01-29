'use client';

import { Eye, Flag } from 'lucide-react';
import { motion } from 'framer-motion';

export default function VisionMissionSection() {
  return (
    <div className="w-full mx-auto px-4 py-12 bg-white">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        {/* Vision Section */}
        <motion.div 
          className="flex flex-col items-center text-center space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <motion.div 
            className="w-24 h-24 rounded-full bg-emerald-600 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            transition={{ scale: { duration: 0.3 } }}
          >
            <Eye className="w-12 h-12 text-white" />
          </motion.div>
          <div className="max-w-sm">
            <h2 className="font-medium text-lg mb-3">OUR VISION IS TO MAKE</h2>
            <p className="text-gray-800">
              ABRAM GENERAL TRADING L.L.C. THE MOST TRUSTED AND PROMISING FOOD BRAND GLOBALLY.
            </p>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div 
          className="flex flex-col items-center text-center space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <motion.div 
            className="w-24 h-24 rounded-full bg-emerald-600 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            transition={{ scale: { duration: 0.3 } }}
          >
            <Flag className="w-12 h-12 text-white" />
          </motion.div>
          <div className="max-w-sm">
            <h2 className="font-medium text-lg mb-3">OUR MISSION IS TO MAKE</h2>
            <p className="text-gray-800">
              THE WORLD EXPERIENCE THE TRUE AROMATIC FLAVOUR IN INDIA THAT BRINGS JOY AND HAPPINESS TO THE PALATES OF GLOBAL CONSUMERS.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
