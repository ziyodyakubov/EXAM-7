import React from 'react'
import {Task1,Task2,Header} from "@components"
import App from "./../App"
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"



const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App/>}>
        <Route path="task1" element={<Task1 />}/>
        <Route path="task2" element={<Task2 />} />
      </Route>
    )
  )

  return <RouterProvider router={router}/>
}

export default Router