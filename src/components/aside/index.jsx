import React from 'react'
import axios from 'axios';
import "./../../routes"
import { useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Aside = () => {

    const [users,setUsers] = useState([])
    const [page,setPage] = useState(1)

    const navigate = useNavigate


    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=2`).then(response=>{
            console.log(response.data)
            setUsers(response.data)
        })
    },[page])

    const handleSubmit = (type) =>{
        if(type === "comments"){
          console.log("ishladi")
        }else if(type === "albums"){
      console.log("ishladi")
        }else if(type === "photos"){
      console.log("ishladi")
        }else if(type === "todos"){
    console.log("ishladi")
        }else if(type === "users"){
    console.log("ishladi")
        }
    }

  return (
    <>
    <aside id="aside" className="bg-[#0d0c0ce0] h-[730px] w-[260px] vr p-[20px]">
        <button onClick={()=>handleSubmit("comments")} className="py-[7px] mt-[15px] px-[15px] bg-[#fff] text-[#000] w-[200px] rounded-[7px] duration-150 hover:bg-[#ffffffd4] active:bg-[#fff]">TASK-1</button>
        <button onClick={()=>handleSubmit("albums")} className="py-[7px] mt-[15px] px-[15px] bg-[#fff] text-[#000] w-[200px] rounded-[7px] duration-150 hover:bg-[#ffffffd4] active:bg-[#fff]">TASK-2</button>
    </aside>
    </>
  )
}

export default Aside
