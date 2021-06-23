const sortBlogs = (blogs) =>{
    const ordered= blogs.sort((first, second)=>{
        return  first.likes - second.likes
    })
    return ordered
}
const updateLikesBlogs  = (blogs, id, likes)=>{
    const updated = blogs.map((item)=> {
        if(item.id === id){
          item.likes = likes
        }
        return item
    })
    return  updated
}
const removeBlog = (blogs, id)=>{
    const blogsUpdated = blogs.filter(item =>{
        if(item.id === id )
            return false
        else 
            return true
        
    })
    return blogsUpdated
}

export default {sortBlogs, updateLikesBlogs, removeBlog}