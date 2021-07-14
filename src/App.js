import React, { useState, useEffect } from 'react'
import Blogs from './components/Blogs'
import blogService from './services/blogs'
import Login from './components/Login'
import serviceLogin from './services/login'
import AddBlog from './components/AddBlog'
import Notification from './components/Notification'
import UserInfo from './components/UserInfo'
import Togglable  from './components/Togglable'
import { useDispatch } from 'react-redux'
import { setNotification as setNotify } from './reducers/notificationReducer'

const App = () => {
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
      return false
    }
  }
  const handleLogout = () => {
    window.localStorage.removeItem('AppBlogList')
    setUser(null)
  }

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
            <AddBlog/>
          </Togglable>
          <Blogs
            user={user}
          />
        </div>
      }
    </div>
  )
}

export default App