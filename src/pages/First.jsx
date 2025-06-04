import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function First() {
  return (<>
    <div className="navbar">
      <Navbar />
    </div>
    <div>
      <Outlet />
    </div>
  </>
  )
}

export default First