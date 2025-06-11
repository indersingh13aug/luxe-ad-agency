import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-[#0f172a] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-wide text-white">
            Vibrant Ads
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-cyan-400 transition-colors">About Us</Link>

            <div className="relative group">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="hover:text-cyan-400 transition-colors"
              >
                Services
              </button>
              {isServicesOpen && (
                <ul
                  className="absolute left-0 top-full mt-2 bg-white text-black rounded-md shadow-lg z-50 w-56 py-2"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {[
                    { name: "RWA Advertising", path: "/services/rwa" },
                    { name: "Commercial Advertising", path: "/services/commercial" },
                    { name: "Metro Advertising", path: "/services/metro" },
                    { name: "Multiplex Advertising", path: "/services/multiplex" }
                  ].map(service => (
                    <li key={service.path}>
                      <Link
                        to={service.path}
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact Us</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Menu">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#1e293b] rounded-md py-4 px-4 space-y-2 shadow-inner animate-fade-in">
            <Link to="/" className="block text-white py-2 hover:text-cyan-400">Home</Link>
            <Link to="/about" className="block text-white py-2 hover:text-cyan-400">About Us</Link>

            <details className="text-white">
              <summary className="cursor-pointer py-2 hover:text-cyan-400">Services</summary>
              <ul className="pl-4 mt-1 space-y-1 text-sm text-gray-300">
                <li><Link to="/services/rwa" className="block hover:text-white">RWA Advertising</Link></li>
                <li><Link to="/services/commercial" className="block hover:text-white">Commercial Advertising</Link></li>
                <li><Link to="/services/metro" className="block hover:text-white">Metro Advertising</Link></li>
                <li><Link to="/services/multiplex" className="block hover:text-white">Multiplex Advertising</Link></li>
              </ul>
            </details>

            <Link to="/contact" className="block text-white py-2 hover:text-cyan-400">Contact Us</Link>
          </div>
        )}
      </div>
    </nav>
  )
}
