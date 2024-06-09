import React from 'react'
import { useNavigate } from 'react-router-dom'

const Aside = () => {

  const navigate = useNavigate()

    const handleSubmit = (type) =>{
        if(type === "task1"){
          navigate("/task1")
        }else if(type === "task2"){
          navigate("/task2")
        }
    }

  return (
    <>
    <aside id="aside" className="bg-[#0d0c0ce0] w-[240px] vr p-[20px]">
        <button onClick={()=>handleSubmit("task1")} className="py-[7px] mt-[15px] px-[15px] bg-[#fff] text-[#000] w-[200px] rounded-[7px] duration-150 hover:bg-[#ffffffd4] active:bg-[#fff]">TASK-1</button>
        <button onClick={()=>handleSubmit("task2")} className="py-[7px] mt-[15px] px-[15px] bg-[#fff] text-[#000] w-[200px] rounded-[7px] duration-150 hover:bg-[#ffffffd4] active:bg-[#fff]">TASK-2</button>
    </aside>
    </>
  )
}

export default Aside
