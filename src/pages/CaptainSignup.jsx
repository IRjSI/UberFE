import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext';

function CaptainSignup() {

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const newCaptain = {
      fullname: {
        firstname,
        lastname
      },
      email,
      password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        vehicleType: vehicleType,
        capacity: vehicleCapacity
      }
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, newCaptain);
    if (response.status === 201) {
      const data = response.data;

      setCaptain(data.captain);
      localStorage.setItem('token', JSON.stringify(data.token));

      navigate('/captain-home');
    }

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleCapacity('');
    setVehicleType('');
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>

      <div>
        <img className='w-16 mb-10' src="src\assets\Uber_logo_2018.svg.png" alt="" />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className='text-lg mb-2'>What's your name?</h3>
          <div className='flex gap-2'>
            <input 
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              className='rounded mb-7 bg-[#eeeeee] px-4 py-2 w-full text-lg placeholder:text-base'
              type="text" 
              required 
              placeholder='First Name'
            />
            <input 
              value={lastname}
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
          <h3 className='text-lg mb-2'>Enter Vehicle Details</h3>
          <div className='grid grid-cols-2 gap-2'>
            <input
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              className='rounded bg-[#eeeeee] px-4 py-2 w-full text-lg placeholder:text-base'
              type="text" 
              required 
              placeholder='Color'
            />
            <input
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              className='rounded bg-[#eeeeee] px-4 py-2 w-full text-lg placeholder:text-base'
              type="text" 
              required 
              placeholder='Plate'
            />
            <input
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              className='rounded mb-7 bg-[#eeeeee] px-4 py-2 w-full text-lg placeholder:text-base'
              type="number" 
              required 
              placeholder='Capacity'
            />
            <select
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className='rounded mb-7 bg-[#eeeeee] px-4 py-2 w-full text-lg placeholder:text-base'
              type="text" 
              required 
            >
              <option value="" disabled>Select type</option>
              <option value="car">car</option>
              <option value="auto">auto</option>
              <option value="bike">bike</option>
            </select>
          </div>
          <button 
            className='rounded mb-3 bg-[#111111] text-[#eeeeee] font-semibold px-4 py-2 w-full text-lg placeholder:text-base'
          >Signup</button>

        </form>
        <p className='text-center'>Already a Captain? <Link to='/captain-login' className='text-blue-500'>Login here</Link></p>
      </div>

      <div>
        <Link   
          to='/signup'          
          className='flex items-center justify-center rounded mb-5 font-semibold bg-[#1ed760] text-[#eeeeee] px-4 py-2 w-full text-lg placeholder:text-base'
        >
          Sign up as User
        </Link>
      </div>

    </div>
  )
}

export default CaptainSignup
