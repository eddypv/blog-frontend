import React, {useState} from 'react'
import propType from 'prop-types'

const Blog = ({id,title, author, url, likes, userBlog, user, handleSetLikes, handleRemove}) => {
  const [viewDetail, setViewDetail] = useState(false)
  const blogStyle = {
      paddingTop: 10,
      paddingLeft: 2,
      border: 'solid',
      borderWidth: 1,
      marginBottom: 5
  }
  const show = { display:'inline-block'}
  const hide= { display:'none'}
  
  const handleToggle = () => setViewDetail(!viewDetail)

  
  return (
    <div style={blogStyle}>
      <div>
        <div>{title} {author} <button onClick={handleToggle}> {viewDetail ? 'hide': 'view'}</button></div> 
        <div style={viewDetail ? show : hide}>
          <p>{title}</p>
          <p>{url}</p>
          <p>{likes} <button onClick={()=> handleSetLikes(id,likes+1)}>like</button></p>
          <p>{userBlog.name || ''}</p>
          {userBlog.username === user.username && <button onClick={()=> handleRemove(id, title, author) }>Remove</button>}
        </div>
        
        
      </div>
      <div></div>
    </div>  
  )
}
Blog.propTypes ={
  id:propType.string.isRequired,
  title:propType.string.isRequired,
  author:propType.string.isRequired, 
  url: propType.string.isRequired, 
  likes: propType.number.isRequired, 
  userBlog:propType.object.isRequired, 
  user:propType.object.isRequired, 
  handleSetLikes:propType.func.isRequired, 
  handleRemove:propType.func.isRequired

}
export default Blog