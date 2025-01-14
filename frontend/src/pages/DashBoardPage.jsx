import React from 'react';

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Your Bookings</h1>
      <div className="grid grid-cols-1 gap-4">
        {[1, 2].map((booking) => (
          <div key={booking} className="bg-white p-4 shadow-md rounded-md">
            <p className="font-semibold">Booking {booking} - Details</p>
            <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md">
              Cancel
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
