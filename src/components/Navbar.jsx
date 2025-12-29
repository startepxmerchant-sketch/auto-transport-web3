import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Phone, Wallet } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-blue-900/95 backdrop-blur-sm border-b border-yellow-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-black text-gradient-yellow">AUTO TRANSPORT USA</h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-yellow-400 font-semibold transition">Home</Link>
            <Link to="/tracking" className="hover:text-yellow-400 font-semibold transition">Tracking</Link>
            <Link to="/about" className="hover:text-yellow-400 font-semibold transition">About</Link>
            <Link to="/blog" className="hover:text-yellow-400 font-semibold transition">Blog</Link>
            <Link to="/contact" className="hover:text-yellow-400 font-semibold transition">Contact</Link>
            <a href="tel:3052095099" className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900 px-6 py-3 rounded-full font-bold hover:scale-105 transition">
              <Phone className="w-5 h-5" />
              305-209-5099
            </a>
            <button className="flex items-center gap-2 border-2 border-yellow-400 px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-blue-900 transition">
              <Wallet className="w-5 h-5" />
              Connect Wallet
            </button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <Link to="/" className="block py-2 hover:text-yellow-400">Home</Link>
            <Link to="/tracking" className="block py-2 hover:text-yellow-400">Tracking</Link>
            <Link to="/about" className="block py-2 hover:text-yellow-400">About</Link>
            <Link to="/blog" className="block py-2 hover:text-yellow-400">Blog</Link>
            <Link to="/contact" className="block py-2 hover:text-yellow-400">Contact</Link>
            <a href="tel:3052095099" className="block bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900 px-6 py-3 rounded-full font-bold text-center">
              📞 Call: 305-209-5099
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
