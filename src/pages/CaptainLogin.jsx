import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext';

function CaptainLogin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const captain = {
      email,
      password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);
    if (response.status === 200) {
      const data = response.data;

      setCaptain(data.captain);
      localStorage.setItem('token', JSON.stringify(data.token));

      navigate('/captain-home');
    }

    setEmail('');
    setPassword('');
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>

      <div>
        <img className='w-16 mb-10' src="src\assets\Uber_logo_2018.svg.png" alt="" />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className='text-lg mb-2'>What's your email?</h3>
          <input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='rounded mb-7 bg-[#eeeeee] px-4 py-2 w-full text-lg placeholder:text-base'
            type="email" 
            required 
            placeholder='email@example.com'
          />
          <h3 className='text-lg mb-2'>Enter Password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='rounded mb-7 bg-[#eeeeee] px-4 py-2 w-full text-lg placeholder:text-base'
            type="password" 
            required 
            placeholder='password'
          />
          <button 
            className='rounded mb-3 bg-[#111111] text-[#eeeeee] font-semibold px-4 py-2 w-full text-lg placeholder:text-base'
          >Login</button>

        </form>
        <p className='text-center'>Register as a Captain? <Link to='/captain-signup' className='text-blue-500'>Create Account</Link></p>
      </div>

      <div>
        <Link   
          to='/login'          
          className='flex items-center justify-center rounded mb-5 font-semibold bg-[#1ed760] text-[#eeeeee] px-4 py-2 w-full text-lg placeholder:text-base'
        >
          Sign in as User
        </Link>
      </div>

    </div>
  )
}

export default CaptainLogin
