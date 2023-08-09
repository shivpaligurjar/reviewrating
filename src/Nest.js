import React from 'react'
import {  Link, Outlet } from 'react-router-dom'


function Nest() {
  return (
    <div>
      <h1>welcome</h1>
      
      <Link to='/Nest/Login'> Login</Link>
      <Link to='/Nest/Signup'> Login</Link>
      <Outlet/>
    </div>
  )
}

export default Nest