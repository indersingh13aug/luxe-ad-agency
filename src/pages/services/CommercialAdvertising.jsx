export default function CommercialAdvertising() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center text-black">Commercial Advertising</h1>

      <p className="text-lg text-gray-700 mb-6 text-center">
        Empower your brand visibility with our premium commercial advertising solutions.
      </p>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
        {/* Description Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Why Choose Commercial Advertising?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Reach your target customers where they work, shop, and relax</li>
            <li>Drive sales with high-impact visual placements</li>
            <li>Customizable solutions for malls, retail outlets, corporate spaces, and more</li>
            <li>Perfect for product launches, seasonal offers, or brand awareness</li>
          </ul>
        </div>

        {/* Image or Illustration */}
        <div>
          <img
            src="/images/commercial-ad.jpg"
            alt="Commercial Advertising Example"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 p-6 rounded-lg text-center">
        <h3 className="text-xl font-semibold mb-2">Ready to Promote Your Business?</h3>
        <p className="text-gray-700 mb-4">
          Contact us today to get a tailored commercial advertising package.
        </p>
        <a
          href="/contact"
          className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          Contact Us
        </a>
      </div>
    </div>
  )
}
