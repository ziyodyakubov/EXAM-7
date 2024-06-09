import './index.css'
import { Outlet } from "react-router-dom"
import {Aside,Header} from "@components"


function App() {

  return (
    <>
    <Header/>

    <div className="flex gap-[30px] min-h-[710px]">
        <Aside/>
        <Outlet/>
    </div>
    </>
  )
}

export default App
