import React from 'react';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-6 rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <form className="space-y-4">
          <input type="text" placeholder="Email" className="border px-4 py-2 w-full rounded-md" />
          <input type="password" placeholder="Password" className="border px-4 py-2 w-full rounded-md" />
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;