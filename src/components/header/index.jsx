import React from 'react'
import 'boxicons'
import Logo from "./../../assets/examlogo2.svg"

const Header = () => {
  return (
    <>
    <header className="p-[20px] bg-[#999]">
        <div className="header-wrapper container flex items-center justify-between">
            <a href="#"><img width="30px" src={Logo} alt="logo" /></a>

            <h3 className='cursor-pointer'><box-icon name='menu'></box-icon></h3>
        </div>   
    </header>
    </>
  )
}

export default Header
