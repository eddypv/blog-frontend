import React from 'react'
import propType  from 'prop-types'
import { Link } from 'react-router-dom'

function Blogs({ blogs }){

  //const dispatch = useDispatch()
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  /*
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
  }*/
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
              <Link to="">{item.title} {item.author}</Link>
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