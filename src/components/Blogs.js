import React, { useEffect } from 'react'
import Blog from './Blog'
import propType  from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { initBlogs, setLikes, removeBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'

function Blogs({  user }){
  const blogs = useSelector(state => state.blogs)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initBlogs())
  },[])

  const handleSetLikes = (id, likes) => {
    try{
      dispatch(setLikes(id, likes))
    }catch(error){
      dispatch(setNotification(error.message,'error'))
    }
  }

  const handleRemove = async(id, title, author) => {
    try{
      if(window.confirm(`Remove blog ${title} by ${author}`)){
        dispatch(removeBlog(id))
        dispatch(setNotification('The blog was delete','success'))
      }
    }catch(error){
      dispatch(setNotification(error.message,'error'))
    }
  }
  return (
    <div >
      <div >
        {blogs.map( item => {
          let userBlog = {}
          if(item.user){
            userBlog = item.user
          }
          return <Blog
            key={item.id}
            id={item.id}
            title={item.title}
            author={item.author}
            likes={item.likes}
            url={item.url}
            userBlog={userBlog}
            user={user}
            handleSetLikes={handleSetLikes}
            handleRemove={handleRemove}
          />
        })}
      </div>
    </div>
  )
}
Blogs.propTypes ={
  user:propType.object.isRequired
}

export default Blogs