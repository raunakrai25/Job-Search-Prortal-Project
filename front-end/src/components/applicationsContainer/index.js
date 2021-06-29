import React from 'react'

const ApplicationContainer = (props) => {
  const { applicationDetails } = props

  return (
    <div className='card text-white bg-success mb-3'>
      <div className='card-header'>
        Applicant Name : {applicationDetails.name}{' '}
      </div>
      <div className='card-body'>
        <h5 className='card-title'>
          Experience : {applicationDetails.experience}
        </h5>
        <h5 className='card-title'>
          Graduation : {applicationDetails.graduation}
        </h5>
        <h5 className='card-title'>Email : {applicationDetails.email}</h5>
        <h5 className='card-title'>
          Phone Number : {applicationDetails.phone_number}
        </h5>
      </div>
    </div>
  )
}

export default ApplicationContainer
