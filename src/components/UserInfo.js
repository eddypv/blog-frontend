import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../reducers/userReducer'
const  UserInfo = ({ user }) => {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
  }
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