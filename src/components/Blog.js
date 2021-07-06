import React, { useState } from 'react'
import propType from 'prop-types'

const Blog = ({ id,title, author, url='', likes=0, userBlog={}, user={}, handleSetLikes, handleRemove }) => {
  const [viewDetail, setViewDetail] = useState(false)
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  const show = { display:'inline-block' }
  const hide= { display:'none' }

  const handleToggle = () => setViewDetail(!viewDetail)


  return (
    <div style={blogStyle} className="Blog-item">
      <div>
        <div>{title} {author}<button className="button-show-hide" onClick={handleToggle}> {viewDetail ? 'hide': 'view'}</button></div>
        <div style={viewDetail ? show : hide}>
          <p>{title}</p>
          <p>{author}</p>
          <p>{url}</p>
          <p data-testid="Blog-likes"><span>{likes}</span> <button className="button-likes" onClick={() => handleSetLikes(id,likes+1)}>like</button></p>
          <p>{userBlog.name || ''}</p>
          {userBlog.username === user.username && <button onClick={() => handleRemove(id, title, author) }>Remove</button>}
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
  url: propType.string,
  likes: propType.number,
  userBlog:propType.object,
  user:propType.object,
  handleSetLikes:propType.func,
  handleRemove:propType.func

}
export default Blog