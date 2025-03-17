import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='flex justify-between px-3 py-3'>
            <h1 className='text-2xl'>Logo</h1>
            <nav className='flex gap-5 text-white'>
                <NavLink style={(e)=>{
                    return{
                        color:e.isActive ? "red" : ""
                    }
                }} to="/">Home</NavLink>
                <NavLink style={(e)=>{
                    return{
                        color:e.isActive ? "red" : ""
                    }
                }} to="/user">User</NavLink>
                <NavLink style={(e)=>{
                    return{
                        color:e.isActive ? "red" : ""
                    }
                }} to="/about">About</NavLink>
                <NavLink style={(e)=>{
                    return{
                        color: e.isActive ? "red" : ""
                    }
                }} to="/contact">Contact</NavLink>
            </nav>
        </div>
    )
}

export default Nav