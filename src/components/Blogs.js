import React from 'react'
import propType  from 'prop-types'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
function Blogs({ blogs }){

  return (
    <div className="container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map( item => {
            return(
              <tr key={item.id} >
                <td><Link to={`/blogs/${item.id}`}>{item.title}</Link></td>
                <td>{item.author}</td>
                <td>{item.user ? item.user.name : ''}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}
Blogs.propTypes ={
  blogs:propType.array.isRequired
}

export default Blogs