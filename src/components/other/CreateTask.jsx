import React from "react";
import  { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskDiscription, setTaskDiscription] = useState("");
  const [category, setCategory] = useState("");
  const [assignto, setAssignto] = useState("");
  const { userData, setUserData } = useContext(AuthContext)

  const submitHandler = (e) => {
  e.preventDefault();

  const newTask = {
    taskTitle,
    taskDiscription,
    taskDate,
    category,
    active: false,
   newTask: true,
    completed: false,
    failed: false,
  };

  const data = JSON.parse(localStorage.getItem("employees"));
data.forEach((elem) => {
  if (assignto === elem.firstname) {

    elem.tasks.push(newTask)
    elem.taskCounts.newTask += 1
    elem.taskCounts.active += 1
  }
})

 localStorage.setItem("employees", JSON.stringify(data))

setUserData({
  ...userData,
  employees: data
})

  setAssignto("");
  setCategory("");
  setTaskDiscription("");
  setTaskTitle("");
  setTaskDate("");

  console.log(data);
};
  return (
    <div>
      <div className="p-5 rounded mt-7 bg-[#1c1c1c]">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-wrap w-full items-start justify-between "
        >
          <div className="w-1/2">
            <div>
              <h3 className=" text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
                value={taskTitle}
                onChange={(e) => {
                  setTaskTitle(e.target.value);
                }}
                className="text-sm py-1 text-white px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="Make a UI design"
              />
            </div>
            <div>
              <h3 className=" text-sm text-gray-300 mb-0.5">Date</h3>
              <input
                value={taskDate}
                onChange={(e) => {
                  setTaskDate(e.target.value);
                }}
                className="text-sm text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="date"
                name=""
                id=""
              />
            </div>
            <div>
              <h3 className=" text-sm text-gray-300 mb-0.5">Assign To</h3>
              <input
                value={assignto}
                onChange={(e) => {
                  setAssignto(e.target.value);
                }}
                className="text-sm text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="Employee name"
              />
            </div>
            <div>
              <h3 className=" text-sm text-gray-300 mb-0.5">Category</h3>
              <input
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                className="text-sm text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="design,dev,etc"
              />
            </div>
          </div>
          <div className="w-2/5 flex flex-col items-start">
            <h3 className=" text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
              value={taskDiscription}
              onChange={(e) => {
                setTaskDiscription(e.target.value);
              }}
              className="w-full text-white h-46 text-sm py-2 px-4 outline-none bg-transparent border-[1px] border-gray-400"
              rows={"5"}
              cols={"20"}
            ></textarea>
            <button className="bg-emerald-600 px-5 py-1 rounded text-sm mt-4 w-full  active:scale-95 text-white">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
