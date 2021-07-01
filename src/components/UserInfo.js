import React from 'react'

const  UserInfo = ({ user, handleLogout }) => {
  if(user === null)
    return null

  return(
    <div>
      <p>{user.name} logged In</p>
      <button type="button" onClick={handleLogout}>Logout</button>
    </div>
  )
}
export default UserInfo