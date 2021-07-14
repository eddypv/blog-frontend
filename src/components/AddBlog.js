import React,{ useState } from 'react'
import { addBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'
import { useDispatch } from 'react-redux'
const DEFAULT_BLOG ={
  title:'',
  url:'',
  author:''
}
const AddBlog = () => {

  const [newBlog, setNewBlog] = useState(DEFAULT_BLOG)
  const dispatch = useDispatch()
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
    }catch(error){
      dispatch(setNotification(error.message,'error'))
    }

  }

  return(
    <div>
      <h2>Create New</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>title</label>
          <input id="title" type="text" value={newBlog.title} onChange={handleChangeTitle} />
        </div>
        <div>
          <label>author</label>
          <input id="author" type="text" value={newBlog.author} onChange={handleChangeAuthor} />
        </div>
        <div>
          <label>url</label>
          <input id="url" type="text" value={newBlog.url}  onChange={handleChangeUrl}/>
        </div>
        <div>
          <button>Create</button>
        </div>
      </form>
    </div>
  )
}

export default AddBlog