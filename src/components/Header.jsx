import React from 'react'
import { Link } from 'react-router'
export default function Header() {
  return (
    <div className='flex justify-between items-center bg-blue-500 p-4'>
          <img src="https://www.intellisoft.in/wp-content/uploads/2024/10/Intellisoft-.svg" alt='logo'/>

        <div className='flex justify-between gap-4 items-center'>
          <Link to='/home'>
          <p className='text-white'>Home </p>
          </Link>
          <Link to='/courses'>
          <p className='text-white'>Courses</p>
          </Link>
          <Link to='/dashboard'>
          <p className='text-white'>Dashboard</p>
          </Link>
          <div className='flex justify-between gap-4 items-center'>
          <input type="text" placeholder='Search...' className='text-white p-2 rounded-md'/>
          </div>
          <Link to='/login'>
          <button className=' bg-black text-white px-4 py-2 rounded-md'>Login</button>
          </Link>
        </div>
    </div>
  )
}
