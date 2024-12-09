import { X } from 'lucide-react';
import { motion } from 'framer-motion';

export function CloseButton({ onClick, className = '' }) {
  return (
    <motion.button
      className={`p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <X className="w-6 h-6 text-gray-800" />
    </motion.button>
  );
}
