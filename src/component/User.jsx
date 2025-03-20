import React, { useContext } from 'react'
import Userdetails from './Userdetails'
import { UserContext } from '../context/Context'
import { Link } from 'react-router-dom'

const User = () => {
  const {users,setusers} = useContext(UserContext)
 
  
  return (
    <div className='flex flex-col gap-5 w-[500px]'>
     {users.map(u=><Link key={u.id} to={`/user/${u.id}`} className='border'>{u.name}</Link>)}
    </div>
  )
}

export default User