import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import SinglePages from './SinglePages'

function First() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
      {/* <SinglePages/> */}
    </>
  )
}

export default First