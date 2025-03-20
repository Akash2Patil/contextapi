import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    return (
        <div className='flex justify-between px-3 py-3'>
            <h1 className='text-2xl'>Logo</h1>
            <nav className='flex gap-5 text-white'>
                <NavLink style={(e) => {
                    return {
                        color: e.isActive ? "red" : ""
                    }
                }} to="/">Home</NavLink>
                <div className='relative' onMouseEnter={()=>setIsDropdownOpen(true)} onMouseLeave={()=>setIsDropdownOpen(false)}>
                    <NavLink style={(e) => {
                        return {
                            color: e.isActive ? "red" : ""
                        }
                    }} to="/user">User</NavLink>
                    {
                        isDropdownOpen && (
                            <div className="absolute top-8 left-0 bg-gray-700 py-2 px-4 rounded shadow-lg flex flex-col gap-2 min-w-[150px]">
                                <NavLink
                                    to="/userdetails"
                                    style={(e) => {
                                        return {
                                            color: e.isActive ? "red" : ""
                                        }
                                    }}
                                >
                                    User Details
                                </NavLink>
                            </div>
                        )
                    }
                </div>
                <NavLink style={(e) => {
                    return {
                        color: e.isActive ? "red" : ""
                    }
                }} to="/about">About</NavLink>
                <NavLink style={(e) => {
                    return {
                        color: e.isActive ? "red" : ""
                    }
                }} to="/contact">Contact</NavLink>
            </nav>
        </div>
    )
}

export default Nav