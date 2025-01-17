import React from 'react';

function SearchResults() {
  const buses = [
    { id: 1, name: 'Bus A', price: 500, time: '10:00 AM' },
    { id: 2, name: 'Bus B', price: 600, time: '12:00 PM' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Available Buses</h2>
      <ul className="mt-4">
        {buses.map((bus) => (
          <li key={bus.id} className="border p-4 mb-2">
            <h3 className="text-xl font-semibold">{bus.name}</h3>
            <p>Price: ₹{bus.price}</p>
            <p>Time: {bus.time}</p>
            <button className="bg-green-500 text-white p-2 rounded mt-2">
              Book Now
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;