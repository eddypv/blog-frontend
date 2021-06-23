import React, { useState, useEffect } from 'react'
import Blogs from './components/Blogs'
import blogService from './services/blogs'
import Login from './components/Login'
import serviceLogin from './services/login'
import AddBlog from './components/AddBlog'
import Notification from './components/Notification'
import UserInfo from './components/UserInfo'
import Togglable  from './components/Togglable'

const DEFAULT_NOTIFICATION ={
  message:'',
  type:''
}
const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  
  const [notificacion, setNotificacion] = useState(DEFAULT_NOTIFICATION)
    
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
          setNotificacion({
            message:error.message,
            type:'error'
          })
          removeNotification()
      }
      
  }
  const handleLogout = ()=>{
    window.localStorage.removeItem("AppBlogList")
    setUser(null)
  }
  
  const handleAddBlog = async (newBlog) =>{
    let success = true
    try{
      const blogCreated = await blogService.AddBlog(newBlog)
      setNotificacion({
        message:`a new blog ${blogCreated.title} by ${blogCreated.author}`,
        type:'success'
      })
      
      getAllBlogs()
      
    }catch(error){
        setNotificacion({
          message:error.message,
          type:'error'
        })
        success= false
    }
    removeNotification()
    return success
    
  }
  const getAllBlogs = ()=>{
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )
  }
  const removeNotification = () =>{
    setTimeout(()=>{
      setNotificacion(DEFAULT_NOTIFICATION)
    }, 5000)
  }

  // load blog list 
  useEffect(() => {
    if(user !== null){
      getAllBlogs()
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
        <div>
          <Notification 
            message={notificacion.message}
            type={notificacion.type}
          />
          <Login
            username={username}
            password={password}
            handleSubmitLogin={handleSubmitLogin}
            handleChangeUsername={handleChangeUsername}
            handleChangePassword={handleChangePassword}
          />
        </div>
        
      }
      {
        user !== null &&
        <div>
          <Notification  
            type={notificacion.type} 
            message={notificacion.message} 
          />
          <UserInfo 
            user={user}
            handleLogout= {handleLogout}
          />
          <Togglable buttonText="create new blog">
            <AddBlog 
              handleAddBlog= {handleAddBlog}
            />
          </Togglable>
          <Blogs
            blogs={blogs} 
          />
          
        </div>
        
      }
    </div>
  )
}

export default App