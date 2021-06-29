import React, { useState } from 'react'
import Axios from 'axios'
import Navbar from '../../../components/Navbar'

const UserSignup = (props) => {
  const { setUserState } = props
  const [credentials, setCredentials] = useState({})
  // setCredentials({ ...credentials, type: 'user' })

  const onSubmitClick = async (event) => {
    event.preventDefault()
    await Axios.post('http://localhost:1111/user/signup', credentials)
      .then(({ data }) => {
        console.info(data)
        localStorage.setItem('user', JSON.stringify(data))
        setUserState(data.user)
        window.location.replace('/Dashboard')
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

export default UserSignup
