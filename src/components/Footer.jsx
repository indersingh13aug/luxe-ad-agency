import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-12">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Vibrant Ads</h2>
          <p className="text-sm text-gray-400">
            Largest. Vibrant. Finest Advertising solutions that drive visibility and results.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-300">About Us</Link></li>
            <li><Link to="/services/rwa" className="hover:text-gray-300">RWA Advertising</Link></li>
            <li><Link to="/services/commercial" className="hover:text-gray-300">Commercial Advertising</Link></li>
            <li><Link to="/services/metro" className="hover:text-gray-300">Metro Advertising</Link></li>
            <li><Link to="/services/multiplex" className="hover:text-gray-300">Multiplex Advertising</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Contact</h3>
          <p className="text-sm">
            📞 +91-9876543210<br />
            📧 contact@vibrantads.com<br />
            🏢 Delhi, India
          </p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 py-4 border-t border-gray-700">
        &copy; {new Date().getFullYear()} Vibrant Ads. All rights reserved.<br />
        Developed by <a href="https://webcoreai.netlify.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400">WebCore AI Solutions</a>
      </div>
    </footer>
  );
}
