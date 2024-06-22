import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'

function SideBar({className}) {
  return (
    <div className={` bg-indigo-900 ${className}`}>
      <Navbar />
      <Search className="border-b-2 mb-2"/>
      <Chats />
    </div>
  )
}

export default SideBar
