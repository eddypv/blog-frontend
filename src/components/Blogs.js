import Blog from './Blog'

export default function Blogs({blogs, handleSetLikes, handleRemove, user}){
    
    
    return (
        <div >
            <div >
                {blogs.map( item => {
                    let userBlog = {}
                    if(item.user){
                        userBlog = item.user;
                    }
                    return <Blog 
                            key={item.id} 
                            id={item.id}
                            title={item.title} 
                            author={item.author} 
                            likes={item.likes}
                            url={item.url}
                            userBlog={userBlog}
                            user={user}
                            handleSetLikes={handleSetLikes}
                            handleRemove={handleRemove}
                        />
                })}
            </div>
        </div>
    )
}