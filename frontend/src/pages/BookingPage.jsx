import React from 'react';

const BookingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Passenger Details</h1>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="border px-4 py-2 w-full rounded-md" />
        <input type="number" placeholder="Age" className="border px-4 py-2 w-full rounded-md" />
        <input type="text" placeholder="Contact Information" className="border px-4 py-2 w-full rounded-md" />
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingPage;