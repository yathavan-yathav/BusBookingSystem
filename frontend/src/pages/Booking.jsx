// 
import React, { useState } from 'react';

function Booking() {
  const [form, setForm] = useState({ name: '', age: '', contact: '', seat: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateField = (name, value) => {
    let error = '';
    
    switch (name) {
      case 'name':
        if (!value.trim()) {
          error = 'Name is required.';
        }
        break;
      case 'age':
        if (!value) {
          error = 'Age is required.';
        } else if (value <= 0) {
          error = 'Age must be greater than zero.';
        }
        break;
      case 'contact':
        if (!value) {
          error = 'Contact number is required.';
        } else if (!/^\d{10}$/.test(value)) {
          error = 'Contact number must be exactly 10 digits.';
        }
        break;
      case 'seat':
        if (!value.trim()) {
          error = 'Seat number is required.';
        }
        break;
      default:
        break;
    }
    
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleBlur = (e) => {
    validateField(e.target.name, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    Object.keys(form).forEach((field) => {
      validateField(field, form[field]);
      if (errors[field]) {
        valid = false;
      }
    });
    if (valid) {
      console.log(form);
      alert('Booking successful!');
      setForm({ name: '', age: '', contact: '', seat: '' }); // Reset form after successful submission
      setErrors({});
    } else {
      alert('Please fix the errors in the form.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Book Your Ticket</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              className={`border rounded p-2 w-full ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={form.age}
              className={`border rounded p-2 w-full ${errors.age ? 'border-red-500' : 'border-gray-300'}`}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
          </div>

          <div>
            <input
              type="text"
              name="contact"
              placeholder="Contact"
              value={form.contact}
              className={`border rounded p-2 w-full ${errors.contact ? 'border-red-500' : 'border-gray-300'}`}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact}</p>}
          </div>

          <div>
            <input
              type="text"
              name="seat"
              placeholder="Seat Number"
              value={form.seat}
              className={`border rounded p-2 w-full ${errors.seat ? 'border-red-500' : 'border-gray-300'}`}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.seat && <p className="text-red-500 text-sm mt-1">{errors.seat}</p>}
          </div>

          <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booking;
