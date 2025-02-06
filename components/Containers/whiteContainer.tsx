import React from 'react'

const whiteContainer = ({children}) => {
  return (
    <div className='px-20 max-md:px-5 my-10 py-5 bg-white'>
      {children}
    </div>
  )
}

export default whiteContainer
