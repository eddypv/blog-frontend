import React from 'react'
const Comments = ({ comments=[] }) => {
  return (
    <div>
      <ul>
        {comments.map(item => <li key={item.id}>{item.content}</li> )}
      </ul>
    </div>
  )
}
export default Comments