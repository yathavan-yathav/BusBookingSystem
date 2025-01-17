import React from 'react';

function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Welcome to Bus Booking App</h1>
      <p className="mt-4">Find and book your bus tickets with ease.</p>
      <form className="mt-6">
        <input
          type="text"
          placeholder="Source"
          className="border rounded p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Destination"
          className="border rounded p-2 mr-2"
        />
        <input
          type="date"
          className="border rounded p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </form>
    </div>
  );
}

export default Home;