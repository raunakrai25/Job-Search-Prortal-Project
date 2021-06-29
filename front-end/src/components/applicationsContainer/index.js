import React from 'react'

const applicationContainer = (props) => {
  const { postDetails } = props

  return (
    <div class='card text-white bg-success mb-3'>
      <div class='card-header'>Applicant Name : {postDetails.name} </div>
      <div class='card-body'>
        <h5 class='card-title'>Experience : {postDetails.experience}</h5>
        <h5 class='card-title'>Graduation : {postDetails.graduation}</h5>
        <h5 class='card-title'>Email : {postDetails.email}</h5>
        <h5 class='card-title'>Phone Number : {postDetails.phone_number}</h5>
      </div>
    </div>
  )
}

export default applicationContainer
