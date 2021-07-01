import { useState } from "react"
import propTypes from 'prop-types'
const DEFAULT_BLOG ={
    title:'',
    url:'',
    author:''
  }
const AddBlog = ({ handleAddBlog})=>{
    
    const [newBlog, setNewBlog] = useState(DEFAULT_BLOG)

    const handleChangeTitle = ({target})=> {
        setNewBlog({...newBlog, title:target.value})
    }
    const handleChangeUrl = ({target})=> {
        setNewBlog({...newBlog, url:target.value})
    }
    const handleChangeAuthor = ({target})=> {
        setNewBlog({...newBlog, author:target.value})
    }
    const handleSubmit = async (event) =>{
        event.preventDefault()
        const success = await handleAddBlog(newBlog)
        if(success){
            setNewBlog(DEFAULT_BLOG)
        }
    }
    return(
        <div>
            <h2>Create New</h2>
            <form onSubmit={handleSubmit}> 
                <div>
                    <label>title</label>
                    <input type="text" value={newBlog.title} onChange={handleChangeTitle} />
                </div>
                <div>
                    <label>author</label>
                    <input type="text" value={newBlog.author} onChange={handleChangeAuthor} />
                </div>
                <div>
                    <label>url</label>
                    <input type="text" value={newBlog.url}  onChange={handleChangeUrl}/>
                </div>
                <div>
                    <button>Create</button>
                </div>
            </form>
        </div>
    ) 
}
AddBlog.propTypes ={
    handleAddBlog:propTypes.func.isRequired
}
export default AddBlog