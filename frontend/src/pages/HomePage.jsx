import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to Bus Ticket Booking</h1>
        <input 
          type="text" 
          placeholder="Enter source, destination, or date" 
          className="border px-4 py-2 w-full mb-4 rounded-md"
        />
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
          Search Buses
        </button>
      </div>
    </div>
  );
};

export default HomePage;