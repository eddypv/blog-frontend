import React from 'react'
import propType from 'prop-types'
import { useDispatch } from 'react-redux'
import { setLikes,removeBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'
import { Card, Button } from 'react-bootstrap'

const Blog = ({ blog, user={} }) => {
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
  if(!blog ){
    return null
  }
  if(blog){
    if(blog.user){
      userBlog= blog.user
    }
    return (
      <div className="Blog-item">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{blog.title} {blog.author}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">added by {userBlog.name || ''}</Card.Subtitle>
            <Card.Text>
              {blog.likes} <Button variant="primary" onClick={handleSetLikes} >Like</Button>
              {userBlog.username === user.username && <button onClick={() => handleRemove(blog.id, blog.title, blog.author) }>Remove</button>}
            </Card.Text>
            <Card.Link href={blog.url}>Go to Url</Card.Link>
          </Card.Body>
        </Card>
      </div>
    )
  }

}
Blog.propTypes ={
  blog:propType.object,
  user:propType.object
}
export default Blog