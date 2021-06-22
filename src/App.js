import React, { useState, useEffect } from 'react'
import Blogs from './components/Blogs'
import blogService from './services/blogs'
import {Login} from './components/Login'
import serviceLogin from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
    
  const handleChangeUsername = ({target})=> {
      setUsername(target.value)
  }
  const handleChangePassword = ({target})=>{
      setPassword(target.value)
  }
  const handleSubmitLogin = async (event)=>{
      try{
          event.preventDefault()
          const user = await serviceLogin.login(username, password)
          setUser(user)
          blogService.setToken(user.token)
          window.localStorage.setItem("AppBlogList", JSON.stringify(user))
          setUsername('')
          setPassword('')
      }catch(error){
          console.log(error.message)
      }
      
  }
  const handleLogout = ()=>{
    window.localStorage.removeItem("AppBlogList")
    setUser(null)
  }
  // load blog list 
  useEffect(() => {
    if(user !== null){
      blogService.getAll().then(blogs =>
        setBlogs( blogs )
      )
    }       
  }, [user])

  useEffect(()=>{
    const userLocal = JSON.parse(window.localStorage.getItem("AppBlogList"))
    
    if(userLocal !== null){
      blogService.setToken(userLocal.token)
      setUser(userLocal)
    }
  }, [])


  return (
    <div>
      <h2>blogs</h2>
      { 
        user === null && 
        <Login
          username={username}
          password={password}
          handleSubmitLogin={handleSubmitLogin}
          handleChangeUsername={handleChangeUsername}
          handleChangePassword={handleChangePassword}
        />
      }
      {
        user !== null &&
        <Blogs
          handleLogout= {handleLogout} 
          user={user} 
          blogs={blogs} 
        />
      }
    </div>
  )
}

export default App