import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const shows = [
    { id: 1, title: "Show 1", description: "An amazing show", time: "7:00 PM" },
    { id: 2, title: "Show 2", description: "A thrilling experience", time: "8:00 PM" },
    { id: 3, title: "Show 3", description: "A wonderful story", time: "9:00 PM" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Theatre Ticket Booking</h1>
          <nav>
            <Link to="/" className="px-3 py-2 rounded hover:bg-gray-700">Home</Link>
            <Link to="/shows" className="px-3 py-2 rounded hover:bg-gray-700">Shows</Link>
            <Link to="/admin" className="px-3 py-2 rounded hover:bg-gray-700">Admin</Link>
            <Link to="/account" className="px-3 py-2 rounded hover:bg-gray-700">My Profile</Link>
            <Link to="/contact" className="px-3 py-2 rounded hover:bg-gray-700">Contact</Link>

          </nav>
        </div>
      </header>

      <section className="bg-cover bg-center h-64" style={{ backgroundImage: 'url("https://example.com/banner.jpg")' }}>
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
          <h2 className="text-4xl text-white font-bold">Current Shows</h2>
        </div>
      </section>

      <main className="container mx-auto py-8 flex-1">
        <h3 className="text-2xl font-semibold mb-4">Available Shows</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shows.map(show => (
            <div key={show.id} className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-bold mb-2">{show.title}</h4>
              <p className="text-gray-700 mb-4">{show.description}</p>
              <span className="text-gray-900 font-semibold">{show.time}</span>
              <Link to={`/shows/${show.id}`} className="text-blue-500 hover:underline">Details</Link>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>Contact us: 123-456-7890 | info@theatrebooking.com</p>
          <p>&copy; 2024 Theatre Booking. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
