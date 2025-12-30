import { useState } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-blue-900/95 backdrop-blur-md border-b border-yellow-400/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="text-2xl font-black text-yellow-400">
            KSP<span className="text-orange-500">WAY</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="hover:text-yellow-400 transition">Home</a>
            <a href="#services" className="hover:text-yellow-400 transition">Services</a>
            <a href="#quote" className="hover:text-yellow-400 transition">Get Quote</a>
            <a href="#shop" className="hover:text-yellow-400 transition">Shop</a>
            <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
            <ConnectButton />
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <a href="#hero" className="block hover:text-yellow-400">Home</a>
            <a href="#services" className="block hover:text-yellow-400">Services</a>
            <a href="#quote" className="block hover:text-yellow-400">Get Quote</a>
            <a href="#shop" className="block hover:text-yellow-400">Shop</a>
            <a href="#contact" className="block hover:text-yellow-400">Contact</a>
            <div className="pt-4">
              <ConnectButton />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
