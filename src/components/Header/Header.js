'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CloseButton } from '../CloseButton/CloseButton'

import logo from '../../app/logo.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname() // Get current route

  const navItems = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT US', href: '/about' },
    { label: 'OUR PRODUCTS', href: '/products' },
    { label: 'BRANDS', href: '/brands' },
    { label: 'RECIPES', href: '/recipes' },
    { label: 'PHOTO GALLERY', href: '/gallery' },
    { label: 'CONTACT US', href: '/contact' },
  ]

  return (
    <header className="w-full p-4 fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-white to-transparent">
      <div className="container mx-auto">
        <div className="bg-white rounded-full px-6 py-3 shadow-lg">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src={logo}
                alt="Company Logo"
                width={60}
                className="w-[60px]"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 lg:mr-[29px]">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative text-sm font-medium transition-all ${
                    pathname === item.href
                      ? 'text-primary border-b-2 border-primary pb-1'
                      : 'text-gray-800 hover:text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white lg:hidden overflow-y-auto transition-transform transform h-[50vh] translate-y-0 ease-in-out shadow-lg">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center mb-8">
              <CloseButton onClick={() => setIsMenuOpen(false)} className="order-2" />
              <h2 className="text-2xl font-bold text-gray-800">Menu</h2>
              <div className="w-10" />
            </div>
            <div className="border-b border-gray-500 mb-4" />
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-lg font-medium transition-all ${
                    pathname === item.href
                      ? 'pb-1 text-black text-bold text-2xl'
                      : 'text-gray-800 hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}


