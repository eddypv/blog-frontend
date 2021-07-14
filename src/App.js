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
import { useDispatch } from 'react-redux'
import { setNotification as setNotify } from './reducers/notificationReducer'
const DEFAULT_NOTIFICATION ={
  message:'',
  type:''
}
const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const dispatch = useDispatch()
  const handleSubmitLogin = async (username, password) => {
    try{
      const user = await serviceLogin.login(username, password)
      setUser(user)
      blogService.setToken(user.token)
      window.localStorage.setItem('AppBlogList', JSON.stringify(user))
      return true
    }catch(error){
      dispatch(
        setNotify(error.message,'error'
        )
      )
      removeNotification()
      return false
    }
  }
  const handleLogout = () => {
    window.localStorage.removeItem('AppBlogList')
    setUser(null)
  }

  const handleAddBlog = async (newBlog) => {
    let success = true
    try{
      const blogCreated = await blogService.AddBlog(newBlog)
      dispatch(setNotify(
        `a new blog ${blogCreated.title} by ${blogCreated.author}`,
        'success'
      ))
      getAllBlogs()

    }catch(error){
      dispatch(
        setNotify(error.message,'error'
        )
      )
      success= false
    }
    removeNotification()
    return success

  }
  const handleSetLikes = async (id, likes) => {
    try{
      await blogService.setLikes(id,likes)
      const blogsUpdated = blogUtils.updateLikesBlogs(blogs, id, likes)
      //setBlogs(blogUtils.sortBlogs(blogsUpdated))
      setBlogs(blogsUpdated)
    }catch(error){
      dispatch(
        setNotify(error.message,'error'
        )
      )
    }
    removeNotification()
  }
  const handleRemoveBlog = async(id, title, author) => {
    try{
      if(window.confirm(`Remove blog ${title} by ${author}`)){
        await blogService.removeBlog(id)
        setBlogs(blogUtils.removeBlog(blogs, id))
        dispatch(
          setNotify('The blog was delete','success')
        )

      }
    }catch(error){
      dispatch(
        setNotify(error.message,'error'
        )
      )
    }
    removeNotification()
  }
  const getAllBlogs = () => {
    blogService.getAll().then(blogs => {
      setBlogs( blogUtils.sortBlogs(blogs) )
    }
    )
  }
  const removeNotification = () => {
    setTimeout(() => {
      dispatch(
        setNotify(DEFAULT_NOTIFICATION.message, DEFAULT_NOTIFICATION.type)
      )
    }, 5000)
  }

  // load blog list
  useEffect(() => {
    if(user !== null){
      getAllBlogs()
    }
  }, [user])

  useEffect(() => {
    const userLocal = JSON.parse(window.localStorage.getItem('AppBlogList'))

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
          <Notification />
          <Login
            handleLogin={handleSubmitLogin}
          />
        </div>

      }
      {
        user !== null &&
        <div>
          <Notification />
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
            handleRemove={handleRemoveBlog}
            user={user}
          />
        </div>
      }
    </div>
  )
}

export default App