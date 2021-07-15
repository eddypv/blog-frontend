import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../reducers/userReducer'
const  UserInfo = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.userLoggedIn)

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