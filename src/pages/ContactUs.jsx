export default function ContactUs() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center text-black">Contact Us</h1>

      {/* Contact Info */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {/* Left Side - Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side - Info + Map */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Details</h2>
          <p className="text-gray-700 mb-2">
            <strong>Address:</strong> 123 Vibrant Avenue, New Delhi, India
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Email:</strong> contact@vibrantads.in
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Phone:</strong> +91 98765 43210
          </p>

          <div className="rounded overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.56401796066!2d77.2167212!3d28.6448001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd4bd4cf2e4f%3A0x86ab0fa531aebcb4!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1686243993422!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Company Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
