import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-black to-gray-800 text-white rounded-xl mb-10">
        <h1 className="text-5xl font-bold mb-4">Largest, Vibrant, Finest Advertising Solutions</h1>
        <p className="text-xl mb-6">Transform your brand with impactful outdoor, digital & residential advertising</p>
        <Link
          to="/contact"
          className="bg-white text-black font-semibold px-6 py-3 rounded hover:bg-gray-200 transition"
        >
          Get in Touch
        </Link>
      </section>

      {/* About Section */}
      <section className="mb-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-4">Who We Are</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto">
          We are a leading advertising agency with a footprint in metros, multiplexes, RWAs, and commercial spaces.
          Our mission is to provide high-impact, location-based advertising tailored to your brand's goals.
        </p>
      </section>

      {/* Services Preview */}
      <section className="mb-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Core Services</h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 text-center">
          <Link to="/services/rwa" className="p-6 border rounded hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">RWA Advertising</h3>
            <p className="text-gray-600 text-sm">Target gated communities and residents effectively.</p>
          </Link>
          <Link to="/services/commercial" className="p-6 border rounded hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Commercial Advertising</h3>
            <p className="text-gray-600 text-sm">Boost your presence in malls, shops, and business areas.</p>
          </Link>
          <Link to="/services/metro" className="p-6 border rounded hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Metro Advertising</h3>
            <p className="text-gray-600 text-sm">Capture attention in metro stations and moving trains.</p>
          </Link>
          <Link to="/services/multiplex" className="p-6 border rounded hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Multiplex Advertising</h3>
            <p className="text-gray-600 text-sm">Promote inside cinemas where audiences are engaged.</p>
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center mb-20">
        <h3 className="text-2xl font-semibold mb-4">Ready to Elevate Your Brand?</h3>
        <p className="text-gray-700 mb-6">Partner with us and experience impactful advertising like never before.</p>
        <Link
          to="/contact"
          className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  )
}
