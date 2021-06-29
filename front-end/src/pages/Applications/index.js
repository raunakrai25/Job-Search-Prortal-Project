import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Nav'
import './style.css'
import Axios from 'axios'
import Container from '../../components/applicationsContainer'

const Applications = (props) => {
  const [application, setApplication] = useState([])
  let ID = window.location.search.split('ID=')[1]
  console.log(ID)

  useEffect(() => {
    Axios.post(`http://localhost:1111/admin/getApplications/${ID}`)
      .then(({ data }) => {
        console.log(data)
        setApplication(data)
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        console.info('search successful')
      })
  }, [])

  const renderApplications = application.map((application, index) => {
    return <Container applicationDetails={application} key={index} />
  })

  return (
    <div className='applications'>
      <Navbar />
      <h1>Applications for: {ID}</h1>
      <div className='container p-3'>{renderApplications}</div>
    </div>
  )
}

export default Applications
