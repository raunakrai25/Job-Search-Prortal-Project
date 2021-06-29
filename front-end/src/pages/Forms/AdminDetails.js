import React, { useState } from 'react'
import Axios from 'axios'
import Navbar from '../../components/Navbar/Nav'
import { useHistory } from 'react-router-dom'

const RecruiterDetails = (props) => {
  const [credentials, setCredentials] = useState({})
  const history = useHistory();
  
const onSubmitClick = async (event) => {
  event.preventDefault()
  await Axios.post('http://localhost:1111/admin/details', credentials)
    .then(({ data }) => {
      console.info(data)
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
        <div className='title'>Enter Require Input To Post Job</div>
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-6 form-container'>
            <form>
              <div className='mb-5'>
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

              <div className='mb-5'>
                <label className='form-label'>Profile</label>
                <input
                  type='text'
                  placeholder='eg-Full Stack Developer'
                  className={'form-control'}
                  onChange={(e) => {
                    setCredentials({
                      ...credentials,
                      profile : e.target.value,
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
                <label className='form-label'>Salary</label>
                <input
                  type='text'
                  className={'form-control'}
                  onChange={(e) => {
                    setCredentials({
                      ...credentials,
                      salary: e.target.value,
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
      </div>
    </div>
  )
}

export default RecruiterDetails
