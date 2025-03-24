import React from 'react'
import { url } from '../assets/url'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className={`bg-cover bg-[url("https://images.unsplash.com/photo-1587307293162-2fb7a3ebfc75?q=80&w=1892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] w-full pt-8 h-screen flex justify-between flex-col`}>
        <img className='w-16 ml-8' src="src\assets\Uber_logo_2018.svg.png" alt="" />
        <div className='py-4 px-4 bg-white'>
            <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
            <Link to={'/login'} className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-4'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
