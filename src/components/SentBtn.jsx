import React from 'react'
import Input from './Input'

function SentBtn({className}) {
  return (
    <div className={` ${className}`}>
      <Input className = "w-full rounded-none py-3" placeholder = "Enter your response"/>
    </div>
  )
}

export default SentBtn
