"use client"
import React, { useState } from 'react'

const page = () => {
  const [Task, setTask] = useState("")
  const [desc, setdesc] = useState("")
  return (
    <>
    <h1 className=' text-white bg-purple-900 text-6xl text-center text-center font-extrabold' >TODO LIST</h1>
    <form>
      <input type='text' className=' border-4 p-4 m-4 border-cyan-900'placeholder='Enter Task' value={Task} onChange={(e)=>{
        setTask(e.target.value)}
        }></input>
      <input type='text' className=' border-4 p-4 m-4 border-cyan-900'placeholder='Enter Description' value={desc} onChange={(e)=>{
        setdesc(e.target.value)}
        }></input>
      <button className=' border-4 p-4 m-4 border-cyan-900 rounded bg-green-400'>Add Task</button>
    </form>

    </>
  )
}

export default page
