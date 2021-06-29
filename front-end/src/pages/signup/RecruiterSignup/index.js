import React, { useState } from 'react'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'
import Navbar from '../../../components/Navbar/index'

const RecruiterSignup = (props) => {
  const history = useHistory()
  const [credentials, setCredentials] = useState({})

  
const onSubmitClick = async (event) => {
  event.preventDefault()
  await Axios.post('http://localhost:1111/admin/signup', credentials)
    .then(({ data }) => {
      console.info(data)
      localStorage.setItem('admin', JSON.stringify(data))
      history.push('/AdminDash')
    })
    .catch((error) => {
      console.error(error)
    })
    .finally(() => {
      console.info('Login API call finished.')
    })
  }
  return (
    <div className='login'>
      <Navbar />
      <div className='container'>
        <div className='title'>Sign Up</div>
        <div className='row'>
          <div className='col-md-4'></div>
          <div className='col-md-4 form-container'>
            <form>
              <div className='mb-3'>
                <label className='form-label'>First Name</label>
                <input
                  type='text'
                  className={'form-control'}
                  onChange={(e) => {
                    setCredentials({
                      ...credentials,
                      firstName: e.target.value,
                    })
                  }}
                />
              </div>

              <div className='mb-3'>
                <label className='form-label'>Last Name</label>
                <input
                  type='text'
                  className={'form-control'}
                  onChange={(e) => {
                    setCredentials({
                      ...credentials,
                      lastName: e.target.value,
                    })
                  }}
                />
              </div>

              <div className='mb-3'>
                <label className='form-label'>Date of Birth</label>
                <input
                  type='date'
                  className={'form-control'}
                  onChange={(e) => {
                    setCredentials({
                      ...credentials,
                      dateOfBirth: e.target.value,
                    })
                  }}
                />
              </div>

              <div className='mb-3'>
                <label className='form-label'>Email address</label>
                <input
                  type={'email'}
                  className={'form-control'}
                  onChange={(e) => {
                    setCredentials({
                      ...credentials,
                      email: e.target.value,
                    })
                  }}
                />
              </div>

              <div className='mb-3'>
                <label className='form-label'>Password</label>
                <input
                  type='password'
                  className={'form-control'}
                  onChange={(e) => {
                    setCredentials({
                      ...credentials,
                      password: e.target.value,
                    })
                  }}
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Company Name</label>
                <input
                  type='text'
                  className={'form-control'}
                  onChange={(e) => {
                    setCredentials({
                      ...credentials,
                      companyName: e.target.value,
                    })
                  }}
                />
              </div>
              

              

              <button
                type='submit'
                className={'btn btn-success w-100'}
                 onClick={onSubmitClick}
              >
                Sign in
              </button>
            </form>
          </div>
          <div className='col-md-4'></div>
        </div>
        <div className='text-center link-container'>
          Already have an Account? <br /> <a href='/login'>Signin</a>
        </div>
      </div>
    </div>
  )
}

export default RecruiterSignup
