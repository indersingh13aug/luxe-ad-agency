export default function RWAAdvertising() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center text-black">RWA Advertising</h1>

      <p className="text-lg text-gray-700 mb-6 text-center">
        Directly reach residential communities through trusted, localized advertising in Resident Welfare Associations (RWAs).
      </p>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
        {/* Description Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Why RWA Advertising Works</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Hyperlocal targeting for better engagement and response</li>
            <li>Build trust by associating with community-driven platforms</li>
            <li>Effective for retail stores, education, health, finance, and services</li>
            <li>Formats include notice boards, gate banners, events, and pamphlets</li>
          </ul>
        </div>

        {/* Image or Illustration */}
        <div>
          <img
            src="/images/rwa-ad.jpg"
            alt="RWA Advertising Example"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 p-6 rounded-lg text-center">
        <h3 className="text-xl font-semibold mb-2">Connect with Local Communities</h3>
        <p className="text-gray-700 mb-4">
          Launch your RWA advertising campaign and build visibility right where people live.
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
