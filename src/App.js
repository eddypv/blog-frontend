import React, { useEffect } from 'react'
import Blogs from './components/Blogs'
import Blog from './components/Blog'
import blogService from './services/blogs'
import Login from './components/Login'
import AddBlog from './components/AddBlog'
import Notification from './components/Notification'
import NavBar from './components/NavBar'
import Togglable  from './components/Togglable'
import { useSelector, useDispatch } from 'react-redux'
import { setUser, getUsers } from './reducers/userReducer'
import { initBlogs } from './reducers/blogReducer'
import { Route, Switch, useRouteMatch, useHistory } from 'react-router-dom'
import Users from './components/Users'
import UserBlogs from './components/UserBlogs'

const App = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector(state => state.user.userLoggedIn)
  const users = useSelector(state => state.user.users)
  const blogs = useSelector(state => state.blogs)

  const userBlogsMatch = useRouteMatch('/users/:userId')
  const blogMatch = useRouteMatch('/blogs/:blogId')
  const userBlogs = userBlogsMatch ? users.find(item => item.id === userBlogsMatch.params.userId): null
  const blog = blogMatch ? blogs.find(item => item.id === blogMatch.params.blogId) :null

  const initial = async() => {
    const userLocal = JSON.parse(window.localStorage.getItem('AppBlogList'))
    if(userLocal !== null){
      blogService.setToken(userLocal.token)
      await dispatch(setUser(userLocal))
      await dispatch(initBlogs())
      await dispatch(getUsers())
    }
    if(userLocal === null){
      history.push('/login')
    }
  }
  useEffect(() => {
    initial()
  }, [])

  return (

    <div className="container">
      <h2>blogs</h2>
      <div>
        <Notification />
        <NavBar user={user} />
        <Switch>
          <Route path='/login'>
            <Login/>
          </Route>

          <Route path='/users/:userId'>
            <UserBlogs userBlogs={userBlogs} />
          </Route>

          <Route path='/users'>
            <Users users={users}/>
          </Route>

          <Route path='/blogs/:blogId'>
            <Blog blog={blog} user={user}/>
          </Route>

          <Route path='/'>
            <Togglable showText="create new blog" closeText="Close">
              <AddBlog/>
            </Togglable>
            <Blogs blogs={blogs} />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default App