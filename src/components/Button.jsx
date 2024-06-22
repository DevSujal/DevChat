import React from 'react'

function Button({children, type = "submit", className = "", ...props}) {
  return (
    <button className={`p-3 bg-blue-700 text-white text-center ${className}`} {...props} type = {type}>
      {children}
    </button>
  )
}

export default Button
