import React from 'react'
import Albums from "./../components/albums"
import Photos from "./../components/photos"
import Users from "./../components/users"
import Todos from "./../components/todos"
import Posts from "./../components/posts"

import { Route,BrowserRouter,Routes} from "react-router-dom"

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/users" element={<Users/>}/>
          <Route path="/albums" element={<Albums/>}/>
          <Route path="/photos" element={<Photos/>}/>
          <Route path="/todos" element={<Todos/>}/>
          <Route path="/posts" element={<Posts/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
