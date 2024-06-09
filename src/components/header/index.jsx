import React from 'react'
import 'boxicons'
import {logo} from "@images"
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  const click = () =>{
    navigate("/")
  }
  return (
    <>
    <header className="p-[20px] bg-[#999] z-20">
        <div className="header-wrapper container flex items-center justify-between">
            <a href="#"><img width="30px" onClick={click} src={logo} alt="logo" /></a>

            <h3 className='cursor-pointer'><box-icon name='menu'></box-icon></h3>
        </div>   
    </header>
    </>
  )
}

export default Header
