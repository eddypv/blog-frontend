import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../reducers/userReducer'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import { userUrls } from '../utils/urls'
const  UserInfo = ({ user }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const handleLogout = async() => {
    await dispatch(logout())
    history.push(userUrls.LOGIN)
  }
  if(user === null)
    return null

  return(
    <div>
      <div>
        <Link to="/">blogs</Link> <Link to="/users">users</Link> <span>{user.name} logged In</span> <button type="button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}
export default UserInfo