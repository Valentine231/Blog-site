import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="bg-blue-400 w-full min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg w-full max-w-sm p-6">
        <form className="flex flex-col items-center w-full gap-4">
          <h2 className="text-2xl font-semibold">Login</h2>
          <input
            type="email"
            placeholder="Email"
            className="p-3 focus-visible:outline-purple-300 rounded-lg w-full max-w-xs bg-gray-100"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 focus-visible:outline-purple-300 rounded-lg w-full max-w-xs bg-gray-100"
          />
          <button className="bg-purple-500 hover:bg-purple-600 text-white rounded-lg p-2 w-full max-w-xs">
            Login
          </button>
          <p className="text-center text-sm">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
