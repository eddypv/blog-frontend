import Blog from './Blog'

export default function Blogs({blogs}){
    
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
                            title={item.title} 
                            author={item.author} 
                            likes={item.likes}
                            url={item.url}
                            user={user}
                        />
                })}
            </div>
        </div>
    )
}