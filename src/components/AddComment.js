import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addComment } from '../reducers/blogReducer'
const AddComment = ({ blogId }) => {
  const [content, setContent] = useState('')
  const dispatch = useDispatch()
  console.log(blogId)

  const handleChange = (event) => {
    setContent(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addComment(blogId,{ content }))

  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col><Form.Control
            type="text"
            placeholder="Enter content"
            onChange={handleChange}
            value={content}
          /></Col>
          <Col><Button  variant="primary" type="submit">add Comment</Button></Col>
        </Row>
      </Form>
    </div>
  )
}
export default AddComment