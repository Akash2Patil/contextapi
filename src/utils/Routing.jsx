import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../component/Home'
import User from '../component/User'
import About from '../component/About'
import Contact from '../component/Contact'
import Userdetails from '../component/Userdetails'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/user" element={<User/>}/>
            <Route path="/user/:id" element={<Userdetails/>}>User Details</Route>
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />

        </Routes>
    </div>
  )
}

export default Routing