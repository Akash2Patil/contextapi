import React, { useContext } from 'react'
import { UserContext } from '../context/Context'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

const Userdetails = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const {users} = useContext(UserContext)
  return (
    <div>
      <h1>{users[id].name}</h1>
      <h1>{users[id].city}</h1>
      <button onClick={()=> navigate(-1)} className='border mt-3'>Go Back</button>
    </div>
  )
}

export default Userdetails