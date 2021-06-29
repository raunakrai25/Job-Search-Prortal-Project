import React, { useState, useEffect } from 'react'
import Container from '../../components/appliedContainer'
import Navbar from '../../components/Navbar/Nav'
import Axios from 'axios'
import './style.css'

const AppliedJobs = () => {
  const [post, setPost] = useState([])

  let user = JSON.parse(localStorage.getItem('user'))
  let email = user.user.email
  // email = 'asdf@asdf.asdf'

  console.log(email)

  useEffect(() => {
    Axios.post(`http://localhost:1111/user/user-details/${email}`)
      .then(({ data }) => {
        console.log(data)
        setPost(data)
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        console.info('search successful')
      })
  }, [])

  const renderPosts = post.map((post, index) => {
    return <Container postDetails={post} key={index} />
  })

  return (
    <div className='appliedJobs'>
      <Navbar />
      <h1 className='py-3'>Applied Jobs</h1>
      <div className='container'>{renderPosts}</div>
    </div>
  )
}

export default AppliedJobs
