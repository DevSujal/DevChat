import React from 'react'
import Input from './Input'

function Search({className}) {
  return (
    <div className={`${className}`}>
    <Input className = "w-full rounded-none bg-transparent" placeholder = "Find a User"/>
    </div>
  )
}

export default Search
