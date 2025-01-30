'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CloseButton } from '../CloseButton/CloseButton'

import logo from '../../app/logo.png'
import menuIcon from '../../app/menu.png' // Mobile menu icon

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

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
    <header className="w-full p-4 fixed top-0 left-0 right-0 z-50 bg-white shadow-md container">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src={logo}
            alt="ABRAM General Trading LLC"
            width={120}
            height={50}
            className="w-auto h-12"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
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
          <Image src={menuIcon} alt="Menu" width={30} height={30} className="w-8 h-8" />
        </Button>
      </div>

      {/* Mobile Navigation (Drawer) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white lg:hidden overflow-y-auto transition-transform transform h-[56vh] shadow-lg">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center mb-6">
              <CloseButton onClick={() => setIsMenuOpen(false)} className="order-2" />
              <h2 className="text-2xl font-bold text-gray-800">Menu</h2>
              <div className="w-10" />
            </div>
            <div className="border-b border-gray-300 mb-4" />
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-lg font-medium transition-all ${
                    pathname === item.href
                      ? 'text-black font-bold text-2xl'
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
