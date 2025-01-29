"use client";
import React from 'react';
import Link from 'next/link';

export default function SupportSection() {
  return (
    <section className="bg-[#FCCD4E] w-full min-h-[300px] flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16">
      <div className="w-full mx-auto flex flex-col items-start text-left">
        <h2 className="text-black text-2xl sm:text-3xl md:text-4xl" style={{ fontWeight: 800 }}>
          Have a question?
        </h2>
        <h3 className="text-black text-lg sm:text-xl md:text-2xl mt-2" style={{ fontWeight: 800 }}>
          Our team is happy to assist you
        </h3>

        <p className="text-black/90 text-sm sm:text-base md:text-lg mt-4 max-w-lg">
          Get direct support from our expert team on anything about our products.
          Our highly trained team is standing by, ready to help.
        </p>
        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 pt-6">
          <Link href="/contact">
            <button className="bg-green-500 text-white text-sm sm:text-base md:text-lg font-medium border border-green-500 px-6 py-2 rounded-md transition-all duration-300 hover:bg-green-600 hover:scale-105">
              Contact Us
            </button>
          </Link>
          <span className="text-black text-sm sm:text-base md:text-lg">
            or call +00971-4-2202424
          </span>
        </div>
      </div>
    </section>
  );
}
