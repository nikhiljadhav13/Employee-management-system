import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex justify-between mt-4 screen gap-5'>
        <div className=' w-[45%] text-white py-5 px-9 bg-red-500 rounded-xl'>
            <h2 className=' text-white text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
            <h3 className=' text-white text-lg font-medium  '>New Task</h3>
        </div>
         <div className=' w-[45%] text-white py-5 px-9 bg-blue-500 rounded-xl'>
            <h2 className=' text-white text-3xl font-semibold'>{data.taskCounts.completed}</h2>
            <h3 className=' text-white text-lg font-medium  '>Completed Task</h3>
        </div>
         <div className=' w-[45%] text-white py-5 px-9 bg-green-500 rounded-xl'>
            <h2 className=' text-white text-3xl font-semibold'>{data.taskCounts.active}</h2>
            <h3 className=' text-white text-lg font-medium  '>Accepted Task</h3>
        </div> 
         <div className=' w-[45%] text-white py-5 px-9 bg-yellow-500 rounded-xl'>
            <h2 className=' text-white text-3xl font-semibold'>{data.taskCounts.failed}</h2>
            <h3 className=' text-white text-lg font-medium  '>Failed Task</h3>
        </div>
      
    </div>
  )
}

export default TaskListNumbers
