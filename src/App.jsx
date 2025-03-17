import React from 'react'
import Nav from './component/Nav'
import Routing from './utils/Routing'

const App = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 text-white'>
      <Nav/>
      <Routing/>
    </div>
  )
}

export default App