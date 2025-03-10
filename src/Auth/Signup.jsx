import React, { useState } from 'react';
import useAuth from '../Store/Auth';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

const Signup = () => {
  const {  Signup, Loading, Error } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handlesignup = async (e) => {
    e.preventDefault();
    await Signup(email, password);
    navigate('/login');
  };

  return (
    <div className="bg-teal-400 w-full min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg w-full max-w-sm p-6">
        <form onSubmit={handlesignup} className="flex flex-col items-center justify-center w-full gap-4">
          <h2 className="text-2xl font-semibold">Signup</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 focus-visible:outline-purple-300 rounded-lg w-full max-w-sm bg-gray-100"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 focus-visible:outline-purple-300 rounded-lg w-full max-w-sm bg-gray-100"
          />
          <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white rounded-lg p-2 w-full max-w-xs">
            {Loading ? <ClipLoader color="#fff" size={20} /> : 'Signup'}
          </button>

          {Error && <p className="text-red-500">{Error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Signup;