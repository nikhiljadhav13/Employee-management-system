import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='h-full'>
       <div className='shrink-0 bg-yellow-500 h-full w-[300px] rounded-xl p-5'>
        <div className='flex justify-between  items-center text-white'>
            <h2 className='py-1 px-3 bg-red-600 rounded text-sm font-medium '>{data.category}</h2>
            <h3 className='text-sm '>{data.date}</h3>
        </div>
        <h2 className='mt-3 text-white text-lg font-semibold'>{data.taskTitle} </h2>
        <p className='text-white text-sm pt-2'>{data.description}
        </p>
        <div className='flex justify-between mt-4'>
            <button className='text-white py-1 px-2 text-sm bg-green-500 rounded'>Mark as completed</button>
            <button className='text-white py-1 px-2 text-sm bg-red-500 rounded'>Mark as failed</button>
        </div>
      </div>
    </div>
  )
}

export default AcceptTask
