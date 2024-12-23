'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { MobileDropdown } from '../MobileDropdown/MobileDropdown';
import { CloseButton } from '../CloseButton/CloseButton';

import logo from '../../app/logo.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const productItems = {
    'Rice': [],
    'Pulses': [],
    'Spices': ['Black Pepper', 'Cardamom', 'Cinnamon'],
    'Chickpeas': [],
    'Oil Seeds': ['Mustard Seeds', 'Sesame Seeds', 'Sunflower Seeds'],
    'Edible Oil': ['Mustard Oil', 'Sunflower Oil', 'Soybean Oil'],
    'Dry Fruits': ['Almonds', 'Cashews', 'Raisins'],
    'Animal Feed': ['Cotton Seed Cake', 'Rapeseed Meal', 'Sorghum', 'Soybean Meal', 'Yellow Corn (Maize)'],
    'Organic Products': ['Organic Rice', 'Organic Pulses', 'Organic Spices']
  }

  const navItems = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT US', href: '/about' },
    { label: 'OUR PRODUCTS', href: '/products' },
    { label: 'OUR QUALITY', href: '/quality' },
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
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative text-sm font-medium text-gray-800 hover:text-primary transition-transform hover:scale-105 group"
                >
                  <span className="group-hover:font-bold">{item.label}</span>
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
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

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className={`fixed inset-0 z-50 bg-white lg:hidden overflow-y-auto transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center mb-8">
              <CloseButton onClick={() => setIsMenuOpen(false)} className="order-2" />
              <h2 className="text-2xl font-bold text-gray-800">Menu</h2>
              <div className="w-10" /> {/* Spacer for alignment */}
            </div>
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="text-lg font-medium text-gray-800 hover:text-primary transition-transform hover:translate-x-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
