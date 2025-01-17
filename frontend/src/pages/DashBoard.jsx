import React from 'react';

function Dashboard() {
  const bookings = [
    { id: 1, bus: 'Bus A', date: '2025-01-15', seat: '12A' },
    { id: 2, bus: 'Bus B', date: '2025-01-16', seat: '5B' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Your Bookings</h2>
      <ul className="mt-4">
        {bookings.map((booking) => (
          <li key={booking.id} className="border p-4 mb-2">
            <h3 className="text-xl font-semibold">{booking.bus}</h3>
            <p>Date: {booking.date}</p>
            <p>Seat: {booking.seat}</p>
            <button className="bg-red-500 text-white p-2 rounded mt-2">
              Cancel Booking
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;