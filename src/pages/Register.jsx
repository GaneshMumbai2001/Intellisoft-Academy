import React from 'react'
import { Link } from 'react-router-dom'
export default function Register() {
  return (
    <div className='flex justify-center items-center'>
      <div className='w-1/2 bg-white flex flex-col gap-10 p-10 rounded-lg shadow-md'>
        <p className='text-2xl font-bold text-[#374151]'>Register</p>
        <div className='flex flex-col gap-5'>
          <input type="text" placeholder='Name' className='w-full h-10 border border-gray-300 rounded-lg p-2'/>
          <input type="email" placeholder='Email' className='w-full h-10 border border-gray-300 rounded-lg p-2'/>
          <input type="password" placeholder='Password' className='w-full h-10 border border-gray-300 rounded-lg p-2'/>
          <input type="password" placeholder='Confirm Password' className='w-full h-10 border border-gray-300 rounded-lg p-2'/>
        </div>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>Register</button>
      <Link to='/login'>
        <p className='text-sm text-gray-500'>Already have an account? <span className='text-blue-500'>Login</span></p>
      </Link>
      </div>
    </div>
  )
}
