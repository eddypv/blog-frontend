import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import {Login} from './components/Login'
const App = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  return (
    <div>
      <h2>blogs</h2>
      <Login />
      
    </div>
  )
}

export default App