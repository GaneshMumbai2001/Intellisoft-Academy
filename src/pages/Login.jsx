import React from 'react'
import { Link } from 'react-router'

export default function Login() {
  return (
    <div className='flex justify-center  pt-10 '>
      <div className='w-1/2 bg-white flex flex-col gap-10 p-10 rounded-lg shadow-md'>
        <p className='text-2xl font-bold text-[#374151]'>Login</p>
        <div className='flex flex-col gap-5'>
        <input type="text" placeholder='Email' className='w-full h-10 border border-gray-300 rounded-lg p-2'/>
        <input type="password" placeholder='Password' className='w-full h-10 border border-gray-300 rounded-lg p-2'/>
        </div>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>Login</button>
        <p className='text-sm text-gray-500'>Don't have an account? <Link to='/register' className='text-blue-500'>Register</Link></p>

      </div>
    </div>
  )
}
