import React from 'react'

function Card({children,bgColor='bg-light'}) {
  return (
    <div className={`card ${bgColor} mb-3`}>
      {children}
    </div>
  )
}

export default Card