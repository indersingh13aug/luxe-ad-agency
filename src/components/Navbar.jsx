import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo / Brand */}
          <Link to="/" className="text-2xl font-bold">
            Vibrant Ads
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-6 items-center">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/about" className="hover:text-gray-300">About Us</Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="hover:text-gray-300"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services
              </button>
              {isServicesOpen && (
                <ul
                  className="absolute left-0 top-full bg-white text-black shadow-md p-2 w-48 space-y-1 z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <li><Link to="/services/rwa" className="block px-2 py-1 hover:bg-gray-100">RWA Advertising</Link></li>
                  <li><Link to="/services/commercial" className="block px-2 py-1 hover:bg-gray-100">Commercial Advertising</Link></li>
                  <li><Link to="/services/metro" className="block px-2 py-1 hover:bg-gray-100">Metro Advertising</Link></li>
                  <li><Link to="/services/multiplex" className="block px-2 py-1 hover:bg-gray-100">Multiplex Advertising</Link></li>
                </ul>
              )}
            </div>

            <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Links */}
        {isMobileMenuOpen && (
          <div className="md:hidden space-y-2 pb-4">
            <Link to="/" className="block px-2 py-1 hover:bg-gray-800">Home</Link>
            <Link to="/about" className="block px-2 py-1 hover:bg-gray-800">About Us</Link>

            {/* Services on Mobile */}
            <div>
              <p className="px-2 py-1 font-semibold">Services</p>
              <ul className="ml-4 space-y-1">
                <li><Link to="/services/rwa" className="block px-2 py-1 hover:bg-gray-800">RWA Advertising</Link></li>
                <li><Link to="/services/commercial" className="block px-2 py-1 hover:bg-gray-800">Commercial Advertising</Link></li>
                <li><Link to="/services/metro" className="block px-2 py-1 hover:bg-gray-800">Metro Advertising</Link></li>
                <li><Link to="/services/multiplex" className="block px-2 py-1 hover:bg-gray-800">Multiplex Advertising</Link></li>
              </ul>
            </div>

            <Link to="/contact" className="block px-2 py-1 hover:bg-gray-800">Contact Us</Link>
          </div>
        )}
      </div>
    </nav>
  )
}
