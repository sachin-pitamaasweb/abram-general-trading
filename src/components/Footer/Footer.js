import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { Mail, Phone, MapPin } from "lucide-react";

import logo from "../../app/logo.png";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="bg-white rounded-[20px] p-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
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
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
              HOME
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary transition-colors">
              ABOUT US
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-primary transition-colors">
              OUR PRODUCTS
            </Link>
            <Link href="/recipes" className="text-gray-700 hover:text-primary transition-colors">
              RECIPES
            </Link>
            <Link href="/quality" className="text-gray-700 hover:text-primary transition-colors">
              OUR QUALITY
            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-primary transition-colors">
              PHOTO GALLERY
            </Link>
            <Link href="/career" className="text-gray-700 hover:text-primary transition-colors">
              CAREER
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors">
              CONTACT US
            </Link>
          </nav>

          {/* Reach Us Button Section */}
          <div className="flex items-center justify-center">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8">
              Reach Us
            </Button>
          </div>

          {/* Contact Information Section */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h3 className="font-bold text-xl">ABRAM GENERAL TRADING</h3>
            <div className="flex items-center space-x-2 text-gray-600">
              {/* <MapPin className="h-5 w-5 mt-1 flex-shrink-0" /> */}
              <p>Shop Number:- 5, AL-Ras Building, Alras, Deira P.o. Box: 120510, Dubai - U.A.E.</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-600">
                {/* <Phone className="h-5 w-5" /> */}
                <p>00971-4-2202424</p>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                {/* <Mail className="h-5 w-5" /> */}
                <a
                  href="mailto:abramgeneraltrading@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  abramgeneraltrading@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
