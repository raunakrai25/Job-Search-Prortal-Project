import React from 'react'
import Navbar from '../../components/Navbar/index'
import './style.css'

const HomePage = () => {
  return (
    <div>
      <div className={HomePage}>
        <Navbar />
        <div className='d-flex flex-column'>
          <div className='p-5'></div>
          <div className='p-2'>
            <h1>Welcome To Job Search Portal</h1>
          </div>
          <div className='p-5'></div>
        </div>
        <div className='d-flex flex-column'>
          <div className='p-1'></div>
          <div className='p-2'>
            <h3>This is Our Landing HomePage </h3>
          </div>
          <div className='p-9'></div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
