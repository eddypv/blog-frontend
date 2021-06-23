import React, { useState, useEffect } from 'react'
import Blogs from './components/Blogs'
import blogService from './services/blogs'
import Login from './components/Login'
import serviceLogin from './services/login'
import AddBlog from './components/AddBlog'
import Notification from './components/Notification'
import UserInfo from './components/UserInfo'
import Togglable  from './components/Togglable'
import blogUtils from './utils/blogUtils'
const DEFAULT_NOTIFICATION ={
  message:'',
  type:''
}
const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [notificacion, setNotificacion] = useState(DEFAULT_NOTIFICATION)
    
  const handleSubmitLogin = async (username, password)=>{
      try{
          const user = await serviceLogin.login(username, password)
          setUser(user)
          blogService.setToken(user.token)
          window.localStorage.setItem("AppBlogList", JSON.stringify(user))
          return true
      }catch(error){
          setNotificacion({
            message:error.message,
            type:'error'
          })
          removeNotification()
          return false
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
  const handleSetLikes = async (id, likes)=>{
    try{
      const blogUpdated = await blogService.setLikes(id,likes)
      const blogsUpdated = blogUtils.updateLikesBlogs(blogs, id, likes)
      //setBlogs(blogUtils.sortBlogs(blogsUpdated))
      setBlogs(blogsUpdated)
    }catch(error){
      setNotificacion({
        message:error.message,
        type:'error'
      }) 
    }
    removeNotification()
  } 
  const getAllBlogs = ()=>{
    blogService.getAll().then(blogs =>{
      setBlogs( blogUtils.sortBlogs(blogs) )
    }
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
            handleLogin={handleSubmitLogin}
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
          <Togglable showText="create new blog" closeText="Close">
            <AddBlog 
              handleAddBlog= {handleAddBlog}
            />
          </Togglable>
          <Blogs
            blogs={blogs} 
            handleSetLikes={handleSetLikes}
          />
        </div>
      }
    </div>
  )
}

export default App