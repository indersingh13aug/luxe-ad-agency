export default function MultiplexAdvertising() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center text-black">Multiplex Advertising</h1>

      <p className="text-lg text-gray-700 mb-6 text-center">
        Deliver your message in a cinematic experience — high engagement, high retention, premium impact.
      </p>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
        {/* Description Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Why Advertise in Multiplexes?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Target a captive and attentive audience in a relaxed setting</li>
            <li>High recall rates due to large-format and immersive ads</li>
            <li>Options include on-screen ads, standees, seat backs, and digital panels</li>
            <li>Perfect for brands looking to build a premium perception</li>
          </ul>
        </div>

        {/* Image or Illustration */}
        <div>
          <img
            src="/images/multiplex-ad.jpg"
            alt="Multiplex Advertising Example"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 p-6 rounded-lg text-center">
        <h3 className="text-xl font-semibold mb-2">Advertise Where Entertainment Begins</h3>
        <p className="text-gray-700 mb-4">
          Connect with your audience inside premium multiplex environments. Start today.
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
