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
      
    

      
    </div>
  )
}

export default TaskList
