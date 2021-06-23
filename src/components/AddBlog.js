const AddBlog = ({title, author, url, handleChangeTitle, handleChangeUrl, handleChangeAuthor, handleSubmit})=>{
    return(
        <div>
            <h2>Create New</h2>
            <form onSubmit={handleSubmit}> 
                <div>
                    <label>title</label>
                    <input type="text" value={title} onChange={handleChangeTitle} />
                </div>
                <div>
                    <label>author</label>
                    <input type="text" value={author} onChange={handleChangeAuthor} />
                </div>
                <div>
                    <label>url</label>
                    <input type="text" value={url}  onChange={handleChangeUrl}/>
                </div>
                <div>
                    <button>Create</button>
                </div>
            </form>
        </div>
    ) 
}
export default AddBlog