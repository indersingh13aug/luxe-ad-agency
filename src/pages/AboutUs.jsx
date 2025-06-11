export default function AboutUs() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-6 text-center text-black">About Us</h1>

      {/* Intro Paragraph */}
      <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
        We are one of the largest and most vibrant advertising companies in the industry, known for delivering the finest and most impactful advertising solutions across urban and community spaces. With innovation, creativity, and precision, we help brands reach the right audience at the right time.
      </p>

      {/* Two-column Section */}
      <div className="grid md:grid-cols-2 gap-10 mb-12">
        {/* Mission and Vision */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="text-gray-700 mb-5">
            To empower brands by offering them powerful and targeted advertising platforms that deliver measurable results. We aim to become a trusted partner for businesses of all sizes.
          </p>

          <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
          <p className="text-gray-700">
            To revolutionize out-of-home advertising through creativity, technology, and strategic placement — becoming the go-to name in high-impact public and residential advertising.
          </p>
        </div>

        {/* Image or Illustration */}
        <div>
          <img
            src="/images/about-us.jpg"
            alt="Team working on advertising strategy"
            className="rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-gray-100 p-6 rounded-lg mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-center">Our Core Values</h3>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-700 list-disc list-inside">
          <li>Creativity with Purpose</li>
          <li>Client-Centric Approach</li>
          <li>Transparency and Trust</li>
          <li>Community Engagement</li>
          <li>Data-Driven Strategy</li>
          <li>Consistent Quality Delivery</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h4 className="text-xl font-medium mb-2">Want to work with us or learn more?</h4>
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
