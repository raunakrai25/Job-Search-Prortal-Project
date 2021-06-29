import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Nav'
import './style.css'
import Axios from 'axios'
import Container from '../../components/Container'

const AdminDash = (props) => {
  const [post, setPost] = useState([])
  const [credentials, setCredentials] = useState({})

  const onSubmitClick = async (event) => {
    event.preventDefault()

    await Axios.post(
      `http://localhost:1111/user/search/${props.companyName}`,
      credentials
    )
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
  }
  const renderPosts = post.map((post, index) => {
    return <Container postDetails={post} key={index} />
  })
  return (
    <div className='dashboard adminDash'>
      <Navbar />
      <div className='contiainer main-container'>
        <div className='btn-container'>
          <a href='/Admin/details'>
            <div className='btn btn-success col-md-2 mx-3 btn-lg'>Post Job</div>
          </a>
          <a href='/Admin/companyProfile'>
            <div className='btn btn-success col-md-2 mx-3 btn-lg'>
              View All Jobs
            </div>
          </a>
        </div>
        <form>
          <input
            className='form-control me-2'
            type='search'
            placeholder='Search for Profile...'
            onChange={(e) => {
              setCredentials({
                ...credentials,
                profile: e.target.value,
              })
            }}
          />
          <button
            className='btn btn-outline-success'
            type='submit'
            onClick={onSubmitClick}
          >
            Search
          </button>
        </form>
        <div className='latestPosts container'>{renderPosts}</div>
      </div>
    </div>
  )
}

export default AdminDash
