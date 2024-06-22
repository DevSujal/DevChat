import React from 'react'
import Navbar from './Navbar'
import Search from './Search'

function SideBar({className}) {
  return (
    <div className={` bg-indigo-900 ${className}`}>
      <Navbar />
      <Search />
    </div>
  )
}

export default SideBar
