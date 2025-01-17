import React, { useState } from 'react';

function Booking() {
  const [form, setForm] = useState({ name: '', age: '', contact: '', seat: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert('Booking successful!');
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Book Your Ticket</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border rounded p-2 mb-2 w-full"
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          className="border rounded p-2 mb-2 w-full"
          onChange={handleChange}
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          className="border rounded p-2 mb-2 w-full"
          onChange={handleChange}
        />
        <input
          type="text"
          name="seat"
          placeholder="Seat Number"
          className="border rounded p-2 mb-2 w-full"
          onChange={handleChange}
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

export default Booking;