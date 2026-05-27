import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AlltTask = (data) => {
 const authdata = useContext(AuthContext)
  return (
    <div id='alltask' className='p-5 rounded h-44 overflow-auto bg-[#1c1c1c] mt-4'>
      <div className='flex mb-2 justify-between bg-red-400 py-3 px-4 rounded '>
        <h2 className='w-1/5 bg-amber-300 '>name</h2>
        <h3  className='w-1/5 bg-amber-300 '>Make a UI design</h3>
        <h3 className='w-1/5 bg-amber-300 '>Status</h3>
        <h3 className='w-1/5 bg-amber-300 '>Status</h3>
        <h3 className='w-1/5 bg-amber-300 '>Status</h3>

      
      </div>
      {authdata.employees.map((elem)=>{

        return <div className='flex mb-2 justify-between bg-blue-400 py-3 px-4 rounded '>
        <h2 className='w-1/5 bg-amber-300 '>{elem.firstname}</h2>
        <h3  className='w-1/5 bg-amber-300 '>Make a UI design</h3>
        <h3 className='w-1/5 bg-amber-300 '>Status</h3>
        <h3 className='w-1/5 bg-amber-300 '>Status</h3>
        <h3 className='w-1/5 bg-amber-300 '>Status</h3>

      
      </div>
      })}
       
    </div>
  )
}

export default AlltTask
