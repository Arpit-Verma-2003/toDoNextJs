"use client"
import React, { useState } from 'react'

const page = () => {
  const [Task, setTask] = useState("");
  const [desc, setdesc] = useState("");
  const [taskarr, setTaskarr] = useState([]);
  const submitfunc = (e) => {
    e.preventDefault();
    setTaskarr([...taskarr,{Task,desc}]);
    setTask("");
    setdesc("");
  }
  const deleteHandler = (i)=>{
    let copyArr = [...taskarr]
    copyArr.splice(i,1)
    setTaskarr(copyArr)
  }
  let renderTask = "No Task Available";
  if(taskarr.length>0){
    renderTask = taskarr.map((t,i)=>{
      return( <li className='flex' key={i}>
        <div className=' flex justify-between items-center w-1/2'>
        <h4 className='p-1 m-1 text-2xl'>{t.Task}</h4>
        <h5 className='p-1 m-1 text-xl'>{t.desc}</h5>
      </div>
      <button onClick={()=> {
        deleteHandler(i)
        }}
         className=' border-4 p-4 m-4 border-blue-950 rounded bg-red-700 font-bold'>Delete Task</button>
      </li> );
    });
  }
  return (
    <>
    <h1 className=' text-white bg-purple-900 text-6xl text-center font-extrabold' >TODO LIST</h1>
    <form onSubmit={submitfunc}>
      <input type='text' className=' border-4 p-4 m-4 border-cyan-900'placeholder='Enter Task' value={Task} onChange={(e)=>{
        setTask(e.target.value)}
        }></input>
      <input type='text' className=' border-4 p-4 m-4 border-cyan-900'placeholder='Enter Description' value={desc} onChange={(e)=>{
        setdesc(e.target.value)}
        }></input>
      <button className=' border-4 p-4 m-4 border-cyan-900 rounded bg-green-400 font-bold'>Add Task</button>
      </form>
      <hr></hr>
      <div className='p-8 m-4 bg-slate-600 text-white font-bold'>
        <ul>{renderTask}</ul>
      </div>

    </>
  )
}

export default page
