import React from 'react'
import propType from 'prop-types'
import { useDispatch } from 'react-redux'
import { setLikes,removeBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'

const Blog = ({ blog={}, user={} }) => {
  let userBlog ={}
  const dispatch = useDispatch()

  const handleSetLikes = () => {
    try{
      dispatch(setLikes(blog.id, blog.likes+1))
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
  if(!blog){
    return null
  }
  if(blog){
    if(blog.user){
      userBlog= blog.user
    }
    return (
      <div className="Blog-item">
        <div>
          <div >
            <h2>{blog.title} {blog.author}</h2>
            <a href={blog.url}>{blog.url}</a>
            <p data-testid="Blog-likes"><span>{blog.likes}</span> <button className="button-likes" onClick={handleSetLikes}>like</button></p>
            <p>added by {userBlog.name || ''}</p>
            {userBlog.username === user.username && <button onClick={() => handleRemove(blog.id, blog.title, blog.author) }>Remove</button>}
          </div>
        </div>
      </div>
    )
  }

}
Blog.propTypes ={
  blog:propType.object,
  user:propType.object
}
export default Blog