import React from 'react';

const SearchResultsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Available Buses</h1>
      <div className="grid grid-cols-1 gap-4">
        {[1, 2, 3].map((bus) => (
          <div key={bus} className="bg-white p-4 shadow-md rounded-md">
            <p className="font-semibold">Bus {bus} - Route Details</p>
            <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResultsPage;