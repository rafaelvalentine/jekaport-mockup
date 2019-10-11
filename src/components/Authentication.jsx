import React from 'react'

const Authentication = ({ children }) => {
  return (
      <>
        <section className='container mt-4' >
          <div className='row' > { children } </div> 
        </section>
      </>
  )
}

export default Authentication
