import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex justify-between mt-4 screen gap-5'>
        <div className=' w-[45%] py-4 px-9 bg-red-500 rounded-xl'>
            <h2 className=' text-white text-3xl font-semibold'>0</h2>
            <h3 className=' text-white text-lg font-medium  '>New Task</h3>
        </div>
         <div className=' w-[45%] py-4 px-9 bg-blue-500 rounded-xl'>
            <h2 className=' text-white text-3xl font-semibold'>0</h2>
            <h3 className=' text-white text-lg font-medium  '>New Task</h3>
        </div>
         <div className=' w-[45%] py-4 px-9 bg-green-500 rounded-xl'>
            <h2 className=' text-white text-3xl font-semibold'>0</h2>
            <h3 className=' text-white text-lg font-medium  '>New Task</h3>
        </div> <div className=' w-[45%] py-4 px-9 bg-yellow-500 rounded-xl'>
            <h2 className=' text-white text-3xl font-semibold'>0</h2>
            <h3 className=' text-white text-lg font-medium  '>New Task</h3>
        </div>
      
    </div>
  )
}

export default TaskListNumbers
