'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function MobileDropdown({ label, items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <motion.button
        className="flex items-center justify-between w-full text-lg font-medium text-gray-800 hover:text-primary transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ x: 10 }}
        whileTap={{ scale: 0.95 }}
      >
        {label}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="pl-4 mt-2 space-y-2"
          >
            {Object.entries(items).map(([category, subItems]) => (
              <motion.div key={category} className="space-y-2" whileHover={{ x: 10 }}>
                <div className="font-medium">{category}</div>
                {subItems.length > 0 && (
                  <div className="pl-4 space-y-2">
                    {subItems.map((subItem) => (
                      <motion.div key={subItem} whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
                        <Link
                          href={`/products/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block text-gray-600 hover:text-primary transition-colors"
                        >
                          {subItem}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
