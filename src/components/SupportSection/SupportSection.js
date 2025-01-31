"use client";
import React from 'react';
import Link from 'next/link';

export default function SupportSection() {
  return (
    <section className="bg-[#FCCD4E] w-full min-h-[350px] flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 lg:py-20">
      <div className="w-full mx-auto flex flex-col items-start text-left">
        {/* Heading */}
        <h2 className="text-black text-3xl sm:text-4xl md:text-5xl font-extrabold">
          Have a question?
        </h2>
        <h3 className="text-black text-xl sm:text-2xl md:text-3xl mt-2 font-semibold">
          Our team is happy to assist you
        </h3>

        {/* Description */}
        <p className="text-black/90 text-lg sm:text-xl md:text-2xl mt-4 max-w-2xl leading-relaxed">
          Get direct support from our expert team on anything about our products. 
          Our highly trained team is standing by, ready to help.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-8">
          <Link href="/contact">
            <button className="bg-green-600 text-white text-lg sm:text-xl font-semibold border border-green-600 px-8 py-3 rounded-lg transition-all duration-300 hover:bg-green-700 hover:scale-105 shadow-md">
              Contact Us
            </button>
          </Link>
          <span className="text-black text-lg sm:text-xl font-medium">
            or call <span className="font-bold">+00971-4-2202424</span>
          </span>
        </div>
      </div>
    </section>
  );
}
