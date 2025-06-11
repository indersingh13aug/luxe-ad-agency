import { Link } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)

  return (
    <nav className="bg-[#0f172a] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-wide text-white">
            Vibrant Ads
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium relative">
            <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-cyan-400 transition-colors">About Us</Link>

            {/* Services Dropdown with Icon */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-cyan-400 transition-colors">
                Services
                <ChevronDown size={18} className="transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white text-black rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link to="/services/rwa" className="block px-4 py-2 hover:bg-gray-100">RWA Advertising</Link>
                <Link to="/services/commercial" className="block px-4 py-2 hover:bg-gray-100">Commercial Advertising</Link>
                <Link to="/services/metro" className="block px-4 py-2 hover:bg-gray-100">Metro Advertising</Link>
                <Link to="/services/multiplex" className="block px-4 py-2 hover:bg-gray-100">Multiplex Advertising</Link>
              </div>
            </div>

            <Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact Us</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col gap-2 pb-4">
            <Link to="/" className="block px-2 py-2 hover:bg-gray-800 rounded">Home</Link>
            <Link to="/about" className="block px-2 py-2 hover:bg-gray-800 rounded">About Us</Link>

            {/* Mobile Services Collapsible */}
            <div className="px-2">
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex items-center justify-between w-full py-2 hover:bg-gray-800 rounded px-2"
              >
                <span>Services</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isMobileServicesOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  <Link to="/services/rwa" className="block px-2 py-1 hover:bg-gray-800 rounded">RWA Advertising</Link>
                  <Link to="/services/commercial" className="block px-2 py-1 hover:bg-gray-800 rounded">Commercial Advertising</Link>
                  <Link to="/services/metro" className="block px-2 py-1 hover:bg-gray-800 rounded">Metro Advertising</Link>
                  <Link to="/services/multiplex" className="block px-2 py-1 hover:bg-gray-800 rounded">Multiplex Advertising</Link>
                </div>
              )}
            </div>

            <Link to="/contact" className="block px-2 py-2 hover:bg-gray-800 rounded">Contact Us</Link>
          </div>
        )}
      </div>
    </nav>
  )
}
