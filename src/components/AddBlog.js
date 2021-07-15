import React,{ useState } from 'react'
import { addBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { Form,Button } from 'react-bootstrap'
const DEFAULT_BLOG ={
  title:'',
  url:'',
  author:''
}
const AddBlog = () => {

  const [newBlog, setNewBlog] = useState(DEFAULT_BLOG)
  const dispatch = useDispatch()
  const history = useHistory()
  const handleChangeTitle = ({ target }) => {
    setNewBlog({ ...newBlog, title:target.value })
  }
  const handleChangeUrl = ({ target }) => {
    setNewBlog({ ...newBlog, url:target.value })
  }
  const handleChangeAuthor = ({ target }) => {
    setNewBlog({ ...newBlog, author:target.value })
  }
  const handleSubmit = async (event) => {
    try{
      event.preventDefault()
      await dispatch(addBlog(newBlog))
      await dispatch(setNotification(
        `a new blog ${newBlog.title} by ${newBlog.author}`,
        'success'
      ))
      setNewBlog(DEFAULT_BLOG)
      history.push('/')
    }catch(error){
      dispatch(setNotification(error.message,'error'))
    }

  }
  return(
    <div>
      <h2>Create New</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" >
          <Form.Label>Title</Form.Label>
          <Form.Control
            id="title"
            type="text"
            placeholder="Enter title"
            value={newBlog.title}
            onChange={handleChangeTitle}
          />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>author</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Author"
            value={newBlog.author}
            onChange={handleChangeAuthor}
          />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>url</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Url"
            value={newBlog.url}
            onChange={handleChangeUrl}
          />
        </Form.Group>
        <Button variant="success" type="submit">Create</Button>
      </Form>
    </div>
  )
}

export default AddBlog