import React from 'react'

const UserBlogs = ({ userBlogs }) => {
  console.log(userBlogs)
  if(userBlogs){
    return (
      <div>
        <h2>{userBlogs.name}</h2>
        <h3>added blogs</h3>
        <ul>
          {userBlogs.blogs.map(item => {
            return <li key={item.id}>{item.title}</li>
          })}
        </ul>
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