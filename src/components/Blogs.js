import Blog from './Blog'
import propType  from 'prop-types'

function Blogs({blogs=[], handleSetLikes, handleRemove, user}){
    
    
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
Blogs.propTypes ={
    blogs:propType.array,
    handleSetLikes:propType.func.isRequired,
    handleRemove:propType.func.isRequired,
    user:propType.object.isRequired
}

export default Blogs