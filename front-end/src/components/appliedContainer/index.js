import React from 'react'

const AppliedContainer = (props) => {
  const { postDetails } = props

  let ID = postDetails._id

  const redirect = (event) => {
    window.location.replace(`/user/apply?ID=${ID}`)
  }

  return (
    <div className='card text-white bg-success mb-3'>
      <div className='card-header'>Company Name : {postDetails.company}</div>
      <div className='card-body'>
        <h5 className='card-title'>Porfile : {postDetails.profile}</h5>
        <h5 className='card-title'>Graduation : {postDetails.graduation}</h5>
        <h5 className='card-title'>Experience : {postDetails.experience}</h5>
      </div>
    </div>
  )
}

export default AppliedContainer
