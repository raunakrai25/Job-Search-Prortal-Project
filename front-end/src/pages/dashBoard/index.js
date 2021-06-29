import React, { useState, useEffect } from 'react'
import Container from '../../components/Container/index'
import Navbar from '../../components/Navbar/Nav'
import Axios from 'axios'
import './style.css'

const Dashboard = () => {
  const [post, setPost] = useState([])
  const [credentials, setCredentials] = useState({})

  useEffect(() => {
    Axios.get('http://localhost:1111/user/getAllPosts')
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

  const onSubmitClick = async (event) => {
    event.preventDefault()

    await Axios.post('http://localhost:1111/user/search/profile', credentials)
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
    <div className='dashboard'>
      <Navbar />
      <div className='contiainer main-container'>
        <div className='Job '>{
          <a href='/'><button type="button" class="btn btn-success">Applied</button></a>
        }</div>
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

export default Dashboard
