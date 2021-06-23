import Blog from './Blog'

export default function Blogs({blogs, handleSetLikes}){
    
    
    return (
        <div >
            <div >
                {blogs.map( item => {
                    let user = ''
                    if(item.user){
                        user = item.user.name;
                    }
                    return <Blog 
                            key={item.id} 
                            id={item.id}
                            title={item.title} 
                            author={item.author} 
                            likes={item.likes}
                            url={item.url}
                            user={user}
                            handleSetLikes={handleSetLikes}
                        />
                })}
            </div>
        </div>
    )
}