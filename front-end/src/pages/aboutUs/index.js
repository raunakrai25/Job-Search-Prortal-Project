import React from 'react'
import Navbar from '../../components/Navbar/index'

const Aboutus = () => {
  return (
    <div>
      <div className='HomePage'>
        <Navbar />
        <div className='d-flex flex-column'>
          <div className='p-5'></div>
          <div className='p-2'>
            <h1>About Job Search Portal</h1>
          </div>
          <div className='p-5'></div>
        </div>
        <div className='d-flex flex-column'>
          <div className='p-1'></div>
          <div className='p-2'>
            <h3>This is Our About Us HomePage </h3>
          </div>
          <div className='p-9'></div>
        </div>
      </div>
    </div>
  )
}

export default Aboutus
