import React from 'react'
import Navbar from '../../components/Navbar'
import './style.css'


const SignUp = () => {

  return (
    <div className='signup'>
      <Navbar />
      <div className='container'>
        <div className='title'>Sign in as:</div>
        <div className='btn-container'>
          <a href='/login/user-login'>
            <div className='btn btn-success col-md-2 mx-3 btn-lg'>
              Job searcher
            </div>
          </a>
          <a href='/login/recruiter-login'>
            <div className='btn btn-success col-md-2 btn-lg'>Recruiter</div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default SignUp