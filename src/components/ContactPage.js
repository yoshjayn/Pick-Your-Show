import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Theatre Ticket Booking</h1>
          <nav>
            <a href="/" className="px-3 py-2 rounded hover:bg-gray-700">Home</a>
            <a href="/shows" className="px-3 py-2 rounded hover:bg-gray-700">Shows</a>
            <a href="/account" className="px-3 py-2 rounded hover:bg-gray-700">My Account</a>
            <a href="/contact" className="px-3 py-2 rounded hover:bg-gray-700">Contact</a>
          </nav>
        </div>
      </header>

      {/* Contact Information */}
      <section className="container mx-auto py-8">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <p className="text-gray-700 mb-2"><strong>Address:</strong> 123 Theatre Lane, Broadway, NY 10036</p>
          <p className="text-gray-700 mb-2"><strong>Phone:</strong> (123) 456-7890</p>
          <p className="text-gray-700 mb-2"><strong>Email:</strong> info@theatrebooking.com</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto py-8">
        <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="5"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <a href="https://facebook.com" className="mx-2 h-4 w-4 text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://twitter.com" className="mx-2 text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" className="mx-2 text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <p>Contact us: (123) 456-7890 | info@theatrebooking.com</p>
          <p>&copy; 2024 Theatre Booking. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
