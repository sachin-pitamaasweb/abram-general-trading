"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"; // Import framer-motion for animations

import logo from "../../app/logo.png";

export default function Footer() {
  // Animation Variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <footer className="w-full py-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          className="bg-white rounded-[20px] p-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={fadeInVariants}
        >
          {/* Logo Section */}
          <div className="flex items-center justify-center">
            <Image
              src={logo}
              alt="Abram Logo"
              width={120}
              height={120}
              className="h-auto w-auto"
            />
          </div>

          {/* Quick Links Section */}
          <nav className="flex flex-col items-center justify-center space-y-3">
            {[
              { href: "/", label: "HOME" },
              { href: "/about", label: "ABOUT US" },
              { href: "/products", label: "OUR PRODUCTS" },
              // { href: "/recipes", label: "RECIPES" },
              // { href: "/quality", label: "OUR QUALITY" },
              // { href: "/gallery", label: "PHOTO GALLERY" },
              // { href: "/career", label: "CAREER" },
              { href: "/contact", label: "CONTACT US" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-green-600 transition-colors relative group"
              >
                <span className="group-hover:font-bold">{link.label}</span>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Reach Us Button Section */}
          <div className="flex items-center justify-center">
            <Button className="bg-[#FCCD4E] hover:bg-[#FCCD4E] text-white px-8">
              Reach Us
            </Button>
          </div>

          {/* Contact Information Section */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h3 className="font-bold text-xl">ABRAM GENERAL TRADING</h3>
            <div className="flex items-center space-x-2 text-gray-600">
              <p>Shop Number:- 5, AL-Ras Building, Alras, Deira P.o. Box: 120510, Dubai - U.A.E.</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-600">
                <p>00971-4-2202424</p>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <a
                  href="mailto:abramgeneraltrading@gmail.com"
                  className="hover:text-green-600 transition-colors"
                >
                  abramgeneraltrading@gmail.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
