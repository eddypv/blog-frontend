import React from 'react'
import { ListGroup } from 'react-bootstrap'

const UserBlogs = ({ userBlogs }) => {

  if(userBlogs){
    return (
      <div>
        <h2>{userBlogs.name}</h2>
        <h3>added blogs</h3>
        <ListGroup>
          {userBlogs.blogs.map(item => {
            return <ListGroup.Item key={item.id}>{item.title}</ListGroup.Item>
          })}
        </ListGroup>
      </div>
    )
  }
  if(!userBlogs){
    return(
      <div>
        <h2>Not found user</h2>
      </div>
    )
  }


}
export default UserBlogs