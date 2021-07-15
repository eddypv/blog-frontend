import React, { useEffect } from 'react'
import Blogs from './components/Blogs'
import blogService from './services/blogs'
import Login from './components/Login'
import AddBlog from './components/AddBlog'
import Notification from './components/Notification'
import UserInfo from './components/UserInfo'
import Togglable  from './components/Togglable'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from './reducers/userReducer'
const App = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  useEffect(() => {
    const userLocal = JSON.parse(window.localStorage.getItem('AppBlogList'))
    if(userLocal !== null){
      blogService.setToken(userLocal.token)
      dispatch(setUser(userLocal))
    }
  }, [])


  return (
    <div>
      <h2>blogs</h2>
      {
        user === null &&
        <div>
          <Notification />
          <Login/>
        </div>

      }
      {
        user !== null &&
        <div>
          <Notification />
          <UserInfo
            user={user}
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