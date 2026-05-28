import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AlltTask = () => {

  const { userData } = useContext(AuthContext)

  return (
    <div id='alltask' className='p-5 rounded bg-[#1c1c1c] mt-4'>

      <div className='text-white flex mb-2 justify-around bg-red-400 py-1 px-4 rounded'>
        <h2 className='font-bold'>Employee Name</h2>
        <h3 className='font-bold'>New Task</h3>
        <h3 className='font-bold'>Active</h3>
        <h3 className='font-bold'>Completed</h3>
        <h3 className='font-bold'>Failed</h3>
      </div>

      <div className='h-[80%] overflow-auto'>

        {userData?.employees?.map((elem, idx) => {

          return (
            <div
              key={idx}
              className='flex mb-2 justify-around bg-transparent py-2 px-4 rounded border-2 border-emerald-600 text-white'
            >
              <h2 className='font-semibold text-lg'>{elem.firstname}</h2>

              <h3 className='font-semibold text-lg'>
                {elem.taskCounts.newTask}
              </h3>

              <h3 className='font-semibold text-lg'>
                {elem.taskCounts.active}
              </h3>

              <h3 className='font-semibold text-lg text-green-500'>
                {elem.taskCounts.completed}
              </h3>

              <h3 className='font-semibold text-lg text-red-500'>
                {elem.taskCounts.failed}
              </h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AlltTask