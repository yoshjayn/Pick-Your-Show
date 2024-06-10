import React from 'react';

const BookingConfirmation = () => {
  const ticketDetails = {
    showTitle: "Amazing Show",
    date: "June 20, 2024",
    time: "7:00 PM",
    seats: ["A1", "A2", "A3"],
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890"
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Theatre Ticket Booking</h1>
          <nav>
            <a href="/" className="px-3 py-2 rounded hover:bg-gray-700">Home</a>
            <a href="/shows" className="px-3 py-2 rounded hover:bg-gray-700">Shows</a>
            <a href="/contact" className="px-3 py-2 rounded hover:bg-gray-700">Contact</a>
          </nav>
        </div>
      </header>

      {/* Confirmation Message */}
      <section className="container mx-auto py-8 flex-1">
        <h2 className="text-4xl font-bold mb-4">Booking Confirmation</h2>
        <p className="text-gray-700 mb-2">Thank you for your booking, {ticketDetails.name}!</p>
        <p className="text-gray-700 mb-2">Your tickets have been booked successfully.</p>
      </section>

      {/* Ticket Details */}
      <section className="container mx-auto py-8">
        <h3 className="text-2xl font-semibold mb-4">Ticket Details</h3>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <p className="text-gray-700 mb-2"><strong>Show:</strong> {ticketDetails.showTitle}</p>
          <p className="text-gray-700 mb-2"><strong>Date:</strong> {ticketDetails.date}</p>
          <p className="text-gray-700 mb-2"><strong>Time:</strong> {ticketDetails.time}</p>
          <p className="text-gray-700 mb-2"><strong>Seats:</strong> {ticketDetails.seats.join(', ')}</p>
          <p className="text-gray-700 mb-2"><strong>Name:</strong> {ticketDetails.name}</p>
          <p className="text-gray-700 mb-2"><strong>Email:</strong> {ticketDetails.email}</p>
          <p className="text-gray-700 mb-2"><strong>Phone:</strong> {ticketDetails.phone}</p>
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

export default BookingConfirmation;
