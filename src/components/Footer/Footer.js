import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

import Logo from "../../app/logo.png"

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 py-8 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <Card className="p-6 md:p-8 shadow-sm border-radius[20px]">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Logo Column */}
            <div className="flex flex-col items-center justify-center lg:items-center">
              <div className="relative h-24 w-24 overflow-hidden">
                <Image
                  src={Logo}
                  alt="Company Logo"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Quick Links Column */}
            <nav className="flex flex-col items-center justify-center ml-12 lg:items-start space-y-3">
              <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                HOME
              </Link>
              <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                ABOUT US
              </Link>
              <Link href="/products" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                OUR PRODUCTS
              </Link>
              <Link href="/recipes" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                RECIPES
              </Link>
              <Link href="/gallery" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                PHOTO GALLERY
              </Link>
              <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                CONTACT US
              </Link>
            </nav>

            {/* Reach Us Button Column */}
            <div className="flex justify-center items-center lg:justify-center">
              <Button className="bg-[#FCCD4E] hover:bg-[#FCCD4E]/90 text-white rounded-md px-8 py-2">Reach Us</Button>
            </div>

            {/* Contact Details Column */}
            <div className="flex flex-col items-center justify-center lg:items-start space-y-3">
              <h3 className="font-semibold text-gray-900">ARIRAM GENERAL TRADING</h3>
              <p className="text-sm text-gray-600 text-center lg:text-left">
                Shop Number - 5, AL-Ras Building, Arris,Deira
                <br />
                P.o. Box: 120510, Dubai - U.A.E
              </p>
              <div className="space-y-1">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Contact</span>
                  <br />
                  00971-4-2252424
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Mail</span>
                  <br />
                  <Link href="mailto:ariramgeneraltrading@gmail.com" className="hover:text-gray-900 transition-colors">
                    ariramgeneraltrading@gmail.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Copyright Section */}
        <div className="mt-8 text-center sm:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-gray-600">Copyright by ARIRAM GENERAL TRADING {new Date().getFullYear()}</p>
            <p className="text-xs text-gray-600">Design & Developed by PITAMAAS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

