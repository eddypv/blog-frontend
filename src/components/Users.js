import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'

const Users = ({ users }) => {
  return(
    <div>
      <h2>Users</h2>
      <div>
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Username</td>
              <td>Blogs created</td>
            </tr>
            {users.map( item => {
              return (
                <tr key={item.id}>
                  <td>
                    <Link to={`/users/${item.id}`}>{item.name}</Link>
                  </td>
                  <td>{item.username}</td>
                  <td>{item.blogs.length}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Users