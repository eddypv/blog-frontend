import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from '../reducers/userReducer'
const Users = () => {
  const dispatch = useDispatch()
  const users = useSelector(state => state.user.users)
  useEffect(() => {
    dispatch(getUsers())
  },[])
  return(
    <div>
      <h2>Users</h2>
      <div>
        <table>
          <tbody>
            <tr>
              <td></td>
              <td>Blogs created</td>
            </tr>
            {users.map( item => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.blogs.length}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users