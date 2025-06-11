export default function MetroAdvertising() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center text-black">Metro Advertising</h1>

      <p className="text-lg text-gray-700 mb-6 text-center">
        Capture attention where the city moves — high-traffic, high-impact advertising in metro stations and trains.
      </p>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
        {/* Description Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Benefits of Metro Advertising</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Massive footfall ensures high visibility</li>
            <li>Target daily commuters with repetitive brand impressions</li>
            <li>Options include station hoardings, train wraps, digital screens, and escalator ads</li>
            <li>Ideal for both local reach and city-wide brand campaigns</li>
          </ul>
        </div>

        {/* Image or Illustration */}
        <div>
          <img
            src="/images/metro-ad.jpg"
            alt="Metro Advertising Example"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 p-6 rounded-lg text-center">
        <h3 className="text-xl font-semibold mb-2">Make Every Commute Count</h3>
        <p className="text-gray-700 mb-4">
          Get in touch to launch your metro advertising campaign with us.
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
