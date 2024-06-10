import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ShowPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seat) => {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seat)
        ? prevSelectedSeats.filter((s) => s !== seat)
        : [...prevSelectedSeats, seat]
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle booking submission
    console.log("Booking details submitted!");
    navigate('/confirm');
  };

  const showDetails = {
    title: `Amazing Show ${id}`,
    description: "An amazing show that you won't forget!",
    time: "7:00 PM",
    date: "June 20, 2024",
  };

  const seats = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Theatre Ticket Booking</h1>
          <nav>
            <a href="/" className="px-3 py-2 rounded hover:bg-gray-700">Home</a>
            <a href="/account" className="px-3 py-2 rounded hover:bg-gray-700">My Profile</a>
            <a href="/contact" className="px-3 py-2 rounded hover:bg-gray-700">Contact</a>
          </nav>
        </div>
      </header>

      <section className="container mx-auto py-8">
        <h2 className="text-4xl font-bold mb-4">{showDetails.title}</h2>
        <p className="text-gray-700 mb-2">{showDetails.description}</p>
        <p className="text-gray-700 mb-2">Time: {showDetails.time}</p>
        <p className="text-gray-700 mb-2">Date: {showDetails.date}</p>
      </section>

      <section className="container mx-auto py-8">
        <h3 className="text-2xl font-semibold mb-4">Select Your Seats</h3>
        <div className="grid grid-cols-5 gap-2">
          {seats.map((seat) => (
            <button
              key={seat}
              className={`p-2 rounded ${selectedSeats.includes(seat) ? 'bg-blue-500' : 'bg-gray-300'} hover:bg-blue-300`}
              onClick={() => handleSeatClick(seat)}
            >
              {seat}
            </button>
          ))}
        </div>
      </section>

      <section className="container mx-auto py-8">
        <h3 className="text-2xl font-semibold mb-4">Booking Details</h3>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Book Now
            </button>
          </div>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>Contact us: 123-456-7890 | info@theatrebooking.com</p>
          <p>&copy; 2024 Theatre Booking. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ShowPage;
