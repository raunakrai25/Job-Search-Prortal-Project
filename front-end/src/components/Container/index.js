import React from 'react'

const Container = (props) => {
  const { postDetails } = props

  let ID = postDetails._id

  const redirect = (event) => {
    window.location.replace(`/user/apply?ID=${ID}`)
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
          Apply
        </div>
      </div>
    </div>
  )
}

export default Container
