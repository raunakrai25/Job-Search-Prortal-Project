import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Nav'
import './style.css'
import Axios from 'axios'
import Container from '../../components/adminContainer'

const AllJobs = () => {
  const [post, setPost] = useState([])
  let admin = JSON.parse(localStorage.getItem('admin'))
  let company = admin.admin.companyName

  useEffect(() => {
    Axios.post(`http://localhost:1111/user/search/companyName/${company}`)
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
    <div className='alljobs'>
      <Navbar />
      <h1 className='pt-2'>All Jobs posted for: "{company.toUpperCase()}"</h1>
      <div className='main-container'>{renderPosts}</div>
    </div>
  )
}

export default AllJobs
