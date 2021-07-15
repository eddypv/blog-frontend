import React from 'react'
import propType  from 'prop-types'
import { Link } from 'react-router-dom'

function Blogs({ blogs }){

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  /*

  */
  return (
    <div >
      <div >
        {blogs.map( item => {
          /*let userBlog = {}
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
            handleRemove={handleRemove}*/
          return(
            <div key={item.id} style={blogStyle}>
              <Link to={`/blogs/${item.id}`}>{item.title} {item.author}</Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
Blogs.propTypes ={
  blogs:propType.array.isRequired
}

export default Blogs