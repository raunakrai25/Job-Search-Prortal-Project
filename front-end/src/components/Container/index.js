import React from 'react'

const Container = (props) => {
  const { postDetails } = props

  let ID = postDetails._id
  let companyName = postDetails.companyName
  let profile = postDetails.profile

  const redirect = (event) => {
    window.location.replace(
      `/user/apply?ID=${ID}?Comp=${companyName}?prof=${profile}`
    )
  }

  return (
    <div className='card text-white bg-success mb-3'>
      <div className='card-header'>
        Company Name : {postDetails.companyName}{' '}
      </div>
      <div className='card-body'>
        <h5 className='card-title'>Porfile : {postDetails.profile}</h5>
        <h5 className='card-title'>Graduation : {postDetails.graduation}</h5>
        <h5 className='card-title'>Experience : {postDetails.experience}</h5>
        <h5 className='card-title'>Salary : {postDetails.salary}</h5>
        <div className='btn btn-light col-md-2 btn-lg' onClick={redirect}>
          Apply
        </div>
      </div>
    </div>
  )
}

export default Container
