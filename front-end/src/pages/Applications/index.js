import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Nav'
import './style.css'
import Axios from 'axios'
import Container from '../../components/Container'

const Applications = (props) => {
  const [application, setApplication] = useState([])

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
}

export default Applications
