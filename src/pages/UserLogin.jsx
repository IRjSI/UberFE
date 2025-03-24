import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';

function UserLogin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const { user, setUser } = useContext(UserDataContext);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const user = {
      email,
      password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, user);

    if (response.status === 200) {
      const data = response.data;

      setUser(data.user);
      localStorage.setItem('token', JSON.stringify(data.token));
      
      navigate('/home');
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
        <p className='text-center'>New here? <Link to='/signup' className='text-blue-500'>Create Account</Link></p>
      </div>

      <div>
        <Link   
          to='/captain-login'          
          className='flex items-center justify-center rounded mb-5 font-semibold bg-[#ff9f43] text-[#eeeeee] px-4 py-2 w-full text-lg placeholder:text-base'
        >
          Sign in as Captain
        </Link>
      </div>

    </div>
  )
}

export default UserLogin
