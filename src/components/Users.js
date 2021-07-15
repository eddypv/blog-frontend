import React from 'react'
import { Link } from 'react-router-dom'

const Users = ({ users }) => {

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
                  <td>
                    <Link to={`/users/${item.id}`}>{item.name}</Link>
                  </td>
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