import React from 'react'
import { url } from '../assets/url'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className={`bg-cover bg-[url(${url})] w-full pt-8 h-screen flex justify-between flex-col`}>
        <img className='w-16 ml-8' src="src\assets\Uber_logo_2018.svg.png" alt="" />
        <div className='py-4 px-4 bg-white'>
            <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
            <Link to={'/signup'} className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-4'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
