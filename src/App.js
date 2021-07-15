import React, { useEffect } from 'react'
import Blogs from './components/Blogs'
import blogService from './services/blogs'
import Login from './components/Login'
import AddBlog from './components/AddBlog'
import Notification from './components/Notification'
import UserInfo from './components/UserInfo'
import Togglable  from './components/Togglable'
import { useSelector, useDispatch } from 'react-redux'
import { setUser, getUsers } from './reducers/userReducer'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import Users from './components/Users'
import UserBlogs from './components/UserBlogs'

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.userLoggedIn)
  const users = useSelector(state => state.user.users)
  const userBlogsMatch = useRouteMatch('/users/:userId')
  const userBlogs = userBlogsMatch ? users.find(item => item.id === userBlogsMatch.params.userId): null
  useEffect(() => {
    const userLocal = JSON.parse(window.localStorage.getItem('AppBlogList'))
    if(userLocal !== null){
      blogService.setToken(userLocal.token)
      dispatch(setUser(userLocal))
      dispatch(getUsers())
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
              <UserInfo />
              <Switch>
                <Route path='/users/:userId'>
                  <UserBlogs userBlogs={userBlogs} />
                </Route>
                <Route path='/users'>
                  <Users users={users}/>
                </Route>
                <Route path='/'>
                  <Togglable showText="create new blog" closeText="Close">
                    <AddBlog/>
                  </Togglable>
                  <Blogs user={user}/>
                </Route>
              </Switch>
            </div>
      }
    </div>

  )
}

export default App