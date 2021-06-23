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

export default {sortBlogs, updateLikesBlogs}