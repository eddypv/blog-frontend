import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../reducers/userReducer'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import { userUrls } from '../utils/urls'
import { Button } from 'react-bootstrap'

const  Navigation = ({ user }) => {
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
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link active" to="/">Blogs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/users">Users</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#"  aria-disabled="true">{user.name} logged In</a>
        </li>
        <li className="nav-item">
          <Button variant="primary" onClick={handleLogout}>Logout</Button>
        </li>
      </ul>
    </div>
  )
}
export default Navigation