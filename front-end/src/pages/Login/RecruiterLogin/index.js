import React, { useState } from 'react'
import './style.css'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'
import Navbar from '../../../components/Navbar/index'


const Login = (props) => {
  
  const history = useHistory();
  const [credentials, setCredentials] = useState({});

  const onSubmitClick = async (event) => {
    event.preventDefault()
    await Axios.post('http://localhost:1111/admin/login', credentials)
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
    <div className={'login'}>
      <Navbar />
      <div className={'container'}>
        <div className={'title'}>Sign in</div>
        <div className={'row'}>
          <div className={'col-md-4'}></div>
          <div className={'col-md-4 form-container'}>
            <form>
              <div className={'mb-4'}>
                <label className={'form-label'}>Email address</label>
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
          Don't have an account? <br /> <a href='/signup'>Create an Account</a>
        </div>
      </div>
    </div>
  )
}

export default Login