import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Navbar from '../../components/Navbar/Nav'

const UserDetails = () => {
  let ID = window.location.search.split('?')[1]
  ID = ID.split('=')[1]

  let company = window.location.search.split('?')[2]
  company = company.split('=')[1]

  let profile = window.location.search.split('?')[3]
  profile = decodeURIComponent(profile.split('=')[1])
  console.log(ID, company, profile)

  let user = JSON.parse(localStorage.getItem('user'))
  let fn = user.user.firstName
  let ln = user.user.lastName
  let name = fn + ' ' + ln

  let email = user.user.email

  const [credentials, setCredentials] = useState({
    id: ID,
    name: name,
    email: email,
    company: company,
    profile: profile,
  })

  const onSubmitClick = async (event) => {
    event.preventDefault()
    console.log(credentials)

    await Axios.post('http://localhost:1111/user/details', credentials)
      .then(({ data }) => {
        console.info(data)
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
        <div className='title'>Enter Require Input To Apply Job</div>
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-6 form-container'>
            <form>
              <div className='mb-5'>
                <label className='form-label'>Experience</label>
                <input
                  type='text'
                  className={'form-control'}
                  onChange={(e) => {
                    setCredentials({
                      ...credentials,
                      experience: e.target.value,
                    })
                  }}
                />
              </div>

              <div className='mb-5'>
                <label className='form-label'>Graduation</label>
                <input
                  type='text'
                  placeholder='eg-b.tech'
                  className={'form-control'}
                  onChange={(e) => {
                    setCredentials({
                      ...credentials,
                      graduation: e.target.value,
                    })
                  }}
                />
              </div>

              <div className='mb-5'>
                <label className='form-label'>Date Of Birth</label>
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

              <div className='mb-5'>
                <label className='form-label'>Phone Number</label>
                <input
                  type='text'
                  className={'form-control'}
                  onChange={(e) => {
                    setCredentials({
                      ...credentials,
                      phone_number: e.target.value,
                    })
                  }}
                />
              </div>

              <button
                type='submit'
                className={'btn btn-success w-100'}
                onClick={onSubmitClick}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className='backBtn' style={{ width: '80px' }}>
          <a href='/Dashboard'>
            <button type='submit' className={'btn btn-success w-100'}>
              Back
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default UserDetails
