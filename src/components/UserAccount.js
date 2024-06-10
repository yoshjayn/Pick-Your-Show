import React from 'react';

const UserAccount = () => {
  const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
  };

  const pastBookings = [
    {
      id: 1,
      showTitle: "Amazing Show",
      date: "June 20, 2024",
      time: "7:00 PM",
      seats: ["A1", "A2"],
    },
    {
      id: 2,
      showTitle: "Thrilling Experience",
      date: "July 15, 2024",
      time: "8:00 PM",
      seats: ["B3", "B4", "B5"],
    },
    {
      id: 3,
      showTitle: "Wonderful Story",
      date: "August 10, 2024",
      time: "9:00 PM",
      seats: ["C1", "C2", "C3"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Theatre Ticket Booking</h1>
          <nav>
            <a href="/" className="px-3 py-2 rounded hover:bg-gray-700">Home</a>
            <a href="/shows" className="px-3 py-2 rounded hover:bg-gray-700">Shows</a>
            <a href="/admin" className="px-3 py-2 rounded hover:bg-gray-700">Admin</a>
            <a href="/contact" className="px-3 py-2 rounded hover:bg-gray-700">Contact</a>
          </nav>
        </div>
      </header>

      {/* User Profile */}
      <section className="container mx-auto py-8">
        <h2 className="text-4xl font-bold mb-4">User Profile</h2>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <p className="text-gray-700 mb-2"><strong>Name:</strong> {userProfile.name}</p>
          <p className="text-gray-700 mb-2"><strong>Email:</strong> {userProfile.email}</p>
          <p className="text-gray-700 mb-2"><strong>Phone:</strong> {userProfile.phone}</p>
        </div>
      </section>

      {/* Past Bookings */}
      <section className="container mx-auto py-8">
        <h3 className="text-2xl font-semibold mb-4">Past Bookings</h3>
        <div className="space-y-4">
          {pastBookings.map(booking => (
            <div key={booking.id} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <p className="text-gray-700 mb-2"><strong>Show:</strong> {booking.showTitle}</p>
              <p className="text-gray-700 mb-2"><strong>Date:</strong> {booking.date}</p>
              <p className="text-gray-700 mb-2"><strong>Time:</strong> {booking.time}</p>
              <p className="text-gray-700 mb-2"><strong>Seats:</strong> {booking.seats.join(', ')}</p>
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

export default UserAccount;

