import React from 'react'

const Header = (elem) => {

  const logOut = ()=>{
    localStorage.setItem('loggedInUser','')
    window.location.reload()
  }
  return (
         <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium text-white'>Hello <br /> <span className='text-3xl font-semibold text-white'>{elem.firstname} 👋</span></h1> 
      <button onClick={logOut} className='bg-red-600 text-white py-1 px-3 font-medium text-lg rounded-sm hover:bg-red-500 cursor-pointer active:scale-95'>Log Out</button>
    </div>
        )
}

export default Header
