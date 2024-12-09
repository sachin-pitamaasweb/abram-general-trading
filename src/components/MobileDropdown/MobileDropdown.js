'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export function MobileDropdown({ label, items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="flex items-center justify-between w-full text-lg font-medium text-gray-800 hover:text-primary transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <div
          className={`transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <ChevronDown className="h-5 w-5" />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pl-4 mt-2 space-y-2">
          {Object.entries(items).map(([category, subItems]) => (
            <div key={category} className="space-y-2">
              <div className="font-medium">{category}</div>
              {subItems.length > 0 && (
                <div className="pl-4 space-y-2">
                  {subItems.map((subItem) => (
                    <div key={subItem} className="transition-transform hover:translate-x-2">
                      <Link
                        href={`/products/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block text-gray-600 hover:text-primary transition-colors"
                      >
                        {subItem}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
