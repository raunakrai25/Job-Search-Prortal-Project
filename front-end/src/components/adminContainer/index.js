import React from 'react'

const adminContainer = (props) => {
  const { postDetails } = props
  let id = postDetails._id

  const redirect = (event) => {
    window.location.replace(`/admin/appplications?ID=${id}`)
    // console.log('holaa')
  }

  return (
    <div class='card text-white bg-success mb-3'>
      <div class='card-header'>Company Name : {postDetails.companyName} </div>
      <div class='card-body'>
        <h5 class='card-title'>Porfile : {postDetails.profile}</h5>
        <h5 class='card-title'>Graduation : {postDetails.graduation}</h5>
        <h5 class='card-title'>Experience : {postDetails.experience}</h5>
        <h5 class='card-title'>Salary : {postDetails.salary}</h5>
        <div className='btn btn-light col-md-2 btn-lg' onClick={redirect}>
          Check Application
        </div>
      </div>
    </div>
  )
}

export default adminContainer
