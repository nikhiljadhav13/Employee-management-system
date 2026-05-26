import React from 'react'

const Header = () => {
  return (
         <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium text-white'>Hello <br /> <span className='text-3xl font-semibold text-white'>Nikhil 👋</span></h1> 
      <button className='bg-red-600 text-white py-1 px-3 font-medium text-lg rounded-sm'>Log Out</button>
    </div>
        )
}

export default Header
