import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  console.log(data)
  return (
    <div id='tasklist' className=' gap-5 h-[57%] flex items-center justify-start flex-nowrap w-full py-5 mt-5 overflow-x-auto'>
      {data.tasks.map((elem,idx)=>{
        if(elem.active){
          return <AcceptTask key={idx} data={elem}/>
        }
        if(elem.newTask){
          return <NewTask key={idx} data={elem}/>
        }
        if(elem.completed){
          return <CompleteTask key={idx} data={elem}/>
        }
        if(elem.FailedTask){
          return <FailedTask key={idx} data={elem}/>
        }
})}
      {/* <div className='shrink-0 bg-green-500 h-full w-[270px] rounded-xl p-5'>
        <div className='flex justify-between  items-center text-white'>
            <h2 className='py-1 px-3 bg-red-600 rounded text-sm font-medium '>High</h2>
            <h3 className='text-sm '>12 feb 2026</h3>
        </div>
        <h2 className='mt-3 text-white text-lg font-semibold'>Make a youtube video </h2>
        <p className='text-white text-sm pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, voluptate! Lorem ipsum dolor sit amet.
        </p>
      </div>
      
      <div className='shrink-0 bg-yellow-500 h-full w-[270px] rounded-xl p-5'>
        <div className='flex justify-between  items-center text-white'>
            <h2 className='py-1 px-3 bg-red-600 rounded text-sm font-medium '>High</h2>
            <h3 className='text-sm '>12 feb 2026</h3>
        </div>
        <h2 className='mt-3 text-white text-lg font-semibold'>Make a youtube video </h2>
        <p className='text-white text-sm pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, voluptate! Lorem ipsum dolor sit amet.
        </p>
      </div> */}

      
    </div>
  )
}

export default TaskList
