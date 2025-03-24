import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function UserSignup() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullName: {
        firstName,
        lastName
      },
      email,
      password
    })
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>

      <div>
        <img className='w-16 mb-10' src="src\assets\Uber_logo_2018.svg.png" alt="" />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className='text-lg mb-2'>What's your name?</h3>
          <div className='flex gap-2'>
            <input 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className='rounded mb-7 bg-[#eeeeee] px-4 py-2 w-full text-lg placeholder:text-base'
              type="text" 
              required 
              placeholder='First Name'
            />
            <input 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className='rounded mb-7 bg-[#eeeeee] px-4 py-2 w-full text-lg placeholder:text-base'
              type="text" 
              required 
              placeholder='Last Name'
            />
          </div>
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
        <p className='text-center'>Already have an Account? <Link to='/login' className='text-blue-500'>Login here</Link></p>
      </div>

      <div>
        <Link   
          to='/captain-signup'          
          className='flex items-center justify-center rounded mb-5 font-semibold bg-[#ff9f43] text-[#eeeeee] px-4 py-2 w-full text-lg placeholder:text-base'
        >
          Sign up as Captain
        </Link>
      </div>

    </div>
  )
}

export default UserSignup
