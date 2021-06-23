import React, {useState} from 'react'

const Blog = ({title, author, url, likes, user}) => {
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
          <p>{likes} <button>like</button></p>
          <p>{user}</p>
        </div>
      </div>
      <div></div>
    </div>  
  )
}

export default Blog