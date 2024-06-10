import React, { useState } from 'react';

const AdminPage = () => {
  const [shows, setShows] = useState([
    { id: 1, title: "Amazing Show", description: "An amazing show", time: "7:00 PM", date: "June 20, 2024" },
    { id: 2, title: "Thrilling Show", description: "A thrilling experience", time: "8:00 PM", date: "June 21, 2024" }
  ]);

  const [bookings, setBookings] = useState([
    { id: 1, showTitle: "Amazing Show", userName: "John Doe", seats: ["A1", "A2"] },
    { id: 2, showTitle: "Thrilling Show", userName: "Jane Smith", seats: ["B3", "B4"] }
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Theatre Ticket Admin</h1>
          <nav>
            <a href="/" className="px-3 py-2 rounded hover:bg-gray-700">Home</a>
            <a href="/shows" className="px-3 py-2 rounded hover:bg-gray-700">Shows</a>
            <a href="/contact" className="px-3 py-2 rounded hover:bg-gray-700">Contact</a>
          </nav>
        </div>
      </header>

      {/* Manage Shows */}
      <section className="container mx-auto py-8">
        <h2 className="text-4xl font-bold mb-4">Manage Shows</h2>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {shows.map(show => (
            <div key={show.id} className="mb-4">
              <h3 className="text-2xl font-semibold">{show.title}</h3>
              <p className="text-gray-700">{show.description}</p>
              <p className="text-gray-700">Date: {show.date}</p>
              <p className="text-gray-700">Time: {show.time}</p>
              <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
              <button className="mt-2 ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
            </div>
          ))}
        </div>
      </section>

      {/* Manage Bookings */}
      <section className="container mx-auto py-8">
        <h2 className="text-4xl font-bold mb-4">Manage Bookings</h2>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {bookings.map(booking => (
            <div key={booking.id} className="mb-4">
              <h3 className="text-2xl font-semibold">{booking.showTitle}</h3>
              <p className="text-gray-700">Booked by: {booking.userName}</p>
              <p className="text-gray-700">Seats: {booking.seats.join(', ')}</p>
              <button className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Cancel Booking</button>
            </div>
          ))}
        </div>
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

export default AdminPage;
